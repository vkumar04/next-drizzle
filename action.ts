"use server";

import { db } from "@/db";
import { messages } from "@/db/schema/messages";
import { revalidatePath } from "next/cache";

export async function createMessageAction({ message }: { message: string }) {
  await db.insert(messages).values({
    message,
  });

  return messages;
}

export async function getMessagesAction() {
  const res = await db.select().from(messages);
  return res;
}

export async function deleteMessageAction(id: number) {
  await db.delete(messages).where(eq(messages.id, id));
  revalidatePath("/");
  return messages;
}
