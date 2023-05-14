import NextAuth, { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

import prisma from '@/libs/prisma';

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {},
			type: 'credentials',
			async authorize(credentials) {
				if (credentials) {
					const user = await prisma.user.findUnique({
						where: {
							phoneNumber: credentials.phoneNumber,
						},
					});
					return { ...credentials, id: '1' };
				} else {
					return null;
				}
			},
		}),
	],

	callbacks: {
		jwt({ account, token, user, profile, session, trigger }) {
			if (trigger === 'update') {
				return { ...token, ...session.user };
			}
			return { ...user, ...token };
		},
		session({ newSession, session, token, trigger, user }) {
			session.user = token;

			return session;
		},
		redirect({ baseUrl, url }) {
			return url;
		},
		signIn({ account, user, credentials, email, profile }) {
			return true;
		},
	},
	events: {
		session({ session, token }) {},
		signIn({ account, user, isNewUser, profile }) {},
		createUser({ user }) {
			console.log(user);
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
