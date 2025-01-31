import NextAuth from "next-auth";

import Twitter from "next-auth/providers/twitter";

export const { handlers, auth } = NextAuth({
  debug: true,
  providers: [Twitter],
  basePath: "/api/auth",
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        // Extract x account username and id
        token.username = profile?.data?.username;
        token.id = profile?.data?.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Pass username and id to the session
        session.user.username = token.username as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
