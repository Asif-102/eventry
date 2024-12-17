"use server";

import { createUser } from "@/db/users-queries";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);

  const created = await createUser(user);

  redirect("/login");
}

export { registerUser };
