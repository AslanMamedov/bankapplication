import NextAuth, { NextAuthOptions } from 'next-auth';
import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/libs/prisma';

export const authOptions: NextAuthOptions = {
	// cookies: {},
	// jwt: {},
	// pages: {},
	// secret: '',
	// session: {
	// 	strategy: 'jwt',
	// },
	// useSecureCookies: false,
	debug: process.env.NODE_ENV === 'development',
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {},
			type: 'credentials',
			async authorize(credentials) {
				if (credentials) {
					return { id: '1', credentials };
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		// jwt({ account, token, user, profile, session, trigger }) {
		// 	return {};
		// },
		// session({ newSession, session, token, trigger, user }) {
		// 	return session;
		// },
		// signIn({ account, user, credentials, email, profile }) {
		// 	return true;
		// },
		// redirect({ baseUrl, url }) {
		// 	return url;
		// },
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
