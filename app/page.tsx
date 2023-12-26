import { unstable_noStore as noStore } from "next/cache";
import { getMessagesAction } from "@/action";
import CreateMessageForm from "@/components/CreateMessageForm/CreateMessageForm";

export default async function Home() {
  noStore();
  const data = await getMessagesAction();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {data.map((d) => (
        <div key={d.id} className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{d.message}</h1>
        </div>
      ))}
      <CreateMessageForm />
    </main>
  );
}
