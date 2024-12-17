"use server";

import { updateGoing, updateInterest } from "@/db/event-queries";
import { createUser, findUserByCredentials } from "@/db/user-queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);

  const created = await createUser(user);

  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");

    const found = await findUserByCredentials(credential);
    return found;
  } catch (err) {
    throw err;
  }
}

async function addInterestedEvent(eventId, authId) {
  try {
    await updateInterest(eventId, authId);
  } catch (err) {
    throw err;
  }
  revalidatePath("/");
}

async function addGoingEvent(eventId, user) {
  try {
    await updateGoing(eventId, user?.id);
  } catch (err) {
    throw err;
  }

  revalidatePath("/");
  redirect("/");
}

export { addGoingEvent, addInterestedEvent, performLogin, registerUser };
