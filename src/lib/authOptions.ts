import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import bcrypt from 'bcrypt';

import { prisma } from '../../prisma/client';

//CredentialsProviders: se encarga del login manual
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) return null;

        {
          /*transformamos id en string porque es el parametro que recibe Credentials*/
        }
        return { id: String(user.id), email: user.email, name: user.name };
      },
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
};
