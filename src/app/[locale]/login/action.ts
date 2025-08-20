// "use server"

// // import { signIn } from "@/auth"
// import { redirect } from "next/navigation"

// export async function login() {
//   try {
//     const result = await signIn("credentials", {
//       email: "abc@gmail.com",
//       redirect: false,
//     })

//     if (!result || result.error) {
//       throw new Error(result?.error || "Authentication failed")
//     }

//     redirect("/dashboard")
//   } catch (error) {
//     console.error("Login error:", error)
//     throw new Error("Authentication failed")
//   }
// }
