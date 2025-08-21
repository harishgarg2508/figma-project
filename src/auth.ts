import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";

export const authOptions:NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                name:{label:"Name", type:"text"},
                email:{label:"Email", type:"text"},
                password:{label:"Password", type:"password"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {    
                    throw new Error("Email and password are required");
                }
                try {
                    const name = credentials.name
                    const email = credentials.email
                    const user = { id: "1", email, name };

                    //backend
                    return user;
                } catch (error) {
                     return null;
                }
            }
        }),
            
    ],
    callbacks:{
        async jwt({token,user}){
            if(user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }){
            if(session.user) {
                session.user.id = token.id as string; 
            }

            return session;
        }
     } ,
     pages:{
        signIn: "/login",
        error: "/login",

     },
     session:{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, 
     },
     secret: process.env.NEXTAUTH_SECRET,

    
}