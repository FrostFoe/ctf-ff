import { User } from "next-auth";
import { JWT } from "next-auth/jwt";

type UserRole = "USER" | "ADMIN";

export type ExtendedUser = User & {
  role: UserRole;
};

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
  }
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
