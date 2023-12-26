import { createMessageAction } from "@/action";
import { revalidatePath } from "next/cache";
import { Input, Button } from "@nextui-org/react";

export default function CreateMessageForm() {
  async function handleSubmit(data: FormData) {
    "use server";
    let message = data.get("message") as string;
    await createMessageAction({
      message: message,
    });
    revalidatePath("/");
    data.set("message", "");
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4">
      <Input type="text" name="message" placeholder="message" />
      <Button
        type="submit"
        className=" dark:bg-white dark:text-black bg-black text-white rounded-md"
      >
        Create Message
      </Button>
    </form>
  );
}
