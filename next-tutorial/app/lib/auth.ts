import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            }, async authorize(credentials) {
                console.log(credentials);
                return { id: "user1", email: "prathvi@gmail.com", name: "Prathvi" }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ], secret: process.env.NEXTAUTH_SECRET, callbacks: {
        jwt: async ({ token, user }: any) => {
            console.log(token);
            token.userId = token.sub;
            token.type = "auth";
            return token;
        },
        session: async ({ session, token }: any) => {
            if (session.user) {
                session.user.id = token.userId;
                session.user.type = token.type;
            }
            console.log("Session Callback", session);
            return session;
        }
    },
    pages : {
        signIn : "/signin",
    }
}