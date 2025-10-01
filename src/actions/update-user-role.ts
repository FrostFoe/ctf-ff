"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

import { supabase } from "@/lib/db";
import { userRoleSchema } from "@/lib/validations/user";

export type FormData = {
  role: "USER" | "ADMIN";
};

export async function updateUserRole(userId: string, data: FormData) {
  try {
    const session = await auth();

    if (!session?.user || session?.user.id !== userId) {
      throw new Error("Unauthorized");
    }

    const { role } = userRoleSchema.parse(data);

    // Update the user role.
    const { error } = await supabase
      .from("users")
      .update({ role: role })
      .eq("id", userId);

    if (error) throw error;

    revalidatePath("/dashboard/settings");
    return { status: "success" };
  } catch (error) {
    // console.log(error)
    return { status: "error" };
  }
}
