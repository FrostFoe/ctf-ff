import { supabase } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const { data: user, error } = await supabase
      .from("users")
      .select("name, emailVerified")
      .eq("email", email)
      .single();

    if (error) throw error;

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return user;
  } catch {
    return null;
  }
};
