import NextAuth from "next-auth";
import authOptions from "@/lib/auth/auth.config";

// console.log({ ...authOptions });
const handler = NextAuth(authOptions);
// console.log("after the route");

export { handler as GET, handler as POST };
