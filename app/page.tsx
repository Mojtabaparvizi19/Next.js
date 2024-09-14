import Link from "next/link";
import UserCard from "./components/UserCard/UserCard";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href={"/users"} className="btn m-4">
        users
      </Link>
      <UserCard />
      <button className="m-4  btn">Shoes</button>
    </main>
  );
}
