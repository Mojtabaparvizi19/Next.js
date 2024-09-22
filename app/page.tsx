import UserCard from "./components/UserCard/UserCard";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOption);

  return (
    <main>
      {/* <h1 className="font-light">
        Hello<span className="font-bold"> {session?.user?.name}</span>
      </h1>
      <UserCard /> */}
      <Image />
    </main>
  );
}
