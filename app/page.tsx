import Link from "next/link";
import UserCard from "./components/UserCard/UserCard";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOption);

  return (
    <main>
      <h1 className="font-light">
        Hello<span className="font-bold"> {session?.user?.name}</span>
      </h1>
      <Link href={"/users"} className="btn m-4">
        users
      </Link>
      <UserCard />
      <button className="m-4  btn">Shoes</button>
    </main>
  );
}
