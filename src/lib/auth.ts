import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const providers = [];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  );
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  secret: process.env.NEXTAUTH_SECRET || 'radomday-dev-secret-not-for-production',
  pages: {
    signIn: '/',
  },
  callbacks: {
    session({ session }) {
      return session;
    },
  },
});
