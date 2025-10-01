"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

import { supabase } from "@/lib/db";
import { userNameSchema } from "@/lib/validations/user";

export type FormData = {
  name: string;
};

export async function updateUserName(userId: string, data: FormData) {
  try {
    const session = await auth();

    if (!session?.user || session?.user.id !== userId) {
      throw new Error("Unauthorized");
    }

    const { name } = userNameSchema.parse(data);

    // Update the user name.
    const { error } = await supabase
      .from("users")
      .update({ name: name })
      .eq("id", userId);

    if (error) throw error;

    revalidatePath("/dashboard/settings");
    return { status: "success" };
  } catch (error) {
    // console.log(error)
    return { status: "error" };
  }
}
