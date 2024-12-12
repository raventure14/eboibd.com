import "next-auth";
import { DefaultSession } from "next-auth";

type Avatar = {
  url:string,
  publicId:string
}
declare module "next-auth" {
  interface User {
    _id?: string;
    role?: string;
    avatar?:Avatar
  }
  interface Session {
    user: {
      _id?: string;
      role?: string;
      avatar?:Avatar
    } & DefaultSession["user"];
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    role?: string;
    avatar?:Avatar
  }
}