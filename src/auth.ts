// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "text" },
//       },
//       async authorize(credentials) {
//         if (credentials?.email === "abc@gmail.com") {
//           return { id: "1", email: "abc@gmail.com", name: "Harish" };
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login", // optional
//   },
// });
