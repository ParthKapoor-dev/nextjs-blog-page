import { prisma } from "@/prisma/db"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

const google_client_id = process.env.GOOGLE_CLIENT_ID || "774547425655-msi9cs4c60gt0kkvo73fsad4svba4gfv.apps.googleusercontent.com";
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET || "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"

if (!google_client_id || !google_client_secret) {
  console.log(google_client_id);
  console.log(google_client_secret)
  throw Error("Undefined Google Client Id or Secret");
}

export const { handlers : { GET , POST } , auth , signIn , signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: google_client_id,
      clientSecret: google_client_secret
    })
  ],
  callbacks: {
    async session({ session, user }) {
      if (session && user) session.user.id = user.id
      return session;
    }
  }
})