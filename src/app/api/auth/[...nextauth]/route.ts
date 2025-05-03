import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from '../../../../../prisma/client';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (!account || !user) return false;

      if (account.provider === 'google') {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name!,
              email: user.email!,
            },
          });
        }
      }
      return true;
    },
  },
  pages: {
    signIn: '/',
  },
});

export { handler as GET, handler as POST };
