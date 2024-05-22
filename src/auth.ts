import {loginUser} from "@/hooks/authentication";
import NextAuth, {NextAuthConfig} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { encode, decode } from 'next-auth/jwt';

const credentialsConfig = Credentials({

  async authorize(credentials){
    try {
      let user = null;

      const response = await loginUser({username: credentials.username, password: credentials.password})

      if (response === 200){
        user = {name: "some user"}
      } else throw new Error("User not found")

      return user;
    } catch (error: any) {
      return null;
    }
  }
})

const config = {
  providers: [credentialsConfig],
  session: {
    strategy: 'jwt',
  },
  jwt: { encode, decode },
} satisfies NextAuthConfig

export const {
  handlers: {GET, POST},
  auth,
  signIn,
  signOut
} = NextAuth(config)