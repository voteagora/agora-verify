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
        // Extract username and id from the Twitter profile and pass it to the JWT token
        const profileData = profile as {
          data?: { username?: string; id?: string };
        };
        token.username = profileData?.data?.username;
        token.id = profileData?.data?.id;
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

declare module "next-auth" {
  interface Session {
    user: {
      username?: string;
      id?: string;
    };
  }
}
