import NextAuth, { NextAuthOptions } from "next-auth";
import authOption from "../authOption";

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
