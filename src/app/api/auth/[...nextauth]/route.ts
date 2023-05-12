import NextAuth, { NextAuthOptions } from 'next-auth';
import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/libs/prisma';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions: NextAuthOptions = {
	// cookies: {},
	// jwt: {
	// 	decode(params) {
	// 		return null;
	// 	},
	// 	encode(params) {
	// 		return '';
	// 	},
	// 	maxAge: 1,
	// },
	// pages: {},
	// secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
	// useSecureCookies: false,

	// debug: process.env.NODE_ENV === 'development',
	// adapter: PrismaAdapter(prisma),
	providers: [
		// GoogleProvider({
		// 	clientId: process.env.GOOGLE_CLIENT_ID as string,
		// 	clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		// }),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {},
			type: 'credentials',
			async authorize(credentials) {
				// console.log('credentials-->', credentials);
				if (credentials) {
					return { ...credentials, id: '1' };
				} else {
					return null;
				}
			},
		}),
	],

	events: {
		signIn(message) {
			// console.log(message.user);
		},
		signOut(message) {},
		createUser(message) {},
		linkAccount(message) {},
		session(message) {
			console.log(message);
		},
		updateUser(message) {},
	},
	callbacks: {
		// async signIn({ user, account, profile, email, credentials }) {
		// 	return true;
		// },
		// async redirect({ url, baseUrl }) {
		// 	return baseUrl;
		// },
		// async session({ session, user, token }) {
		// 	return { ...session };
		// },
		// async jwt({ token, user, account, profile, session, trigger }) {
		// 	if (trigger === 'update') {
		// 		return {};
		// 	}
		// 	return { ...token, ...session };
		// },
		async jwt({ token, user, account }) {
			console.log({ account });

			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			session.user = token as any;

			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
