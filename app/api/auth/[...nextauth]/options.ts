import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"
import { prismaDB } from "@/lib/prismal";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if(!user) throw new Error("Invalid credential!")

        const isMatchedPassword = await bcrypt.compare(credentials.password, user?.password!)
        if(!isMatchedPassword) throw new Error("Invalid credential!")


        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      const user = await prismaDB.user.findUnique({
        where: { email: token.email as string },
      });

      if (user) {
        session.user = {
          ...session.user,
          name: user.name, // Updated name
          email: user.email,
          role: user.role,
          // Include any other fields you want in the session
        };
      }

      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
