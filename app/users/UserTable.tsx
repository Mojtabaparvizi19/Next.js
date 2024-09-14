import Link from "next/link";
import { sort } from "fast-sort";

interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

async function UserTable({ sortOrder }: Props) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    // { cache: "no-cache" } //this will make this dynamic. when

    { next: { revalidate: 10 } } // only available in Fetch function not axios :)
  );

  const users: UserProps[] = await res.json();
  const sorted = sort(users).asc(
    sortOrder === "email"
      ? (u) => u.email
      : sortOrder === "name"
      ? (u) => u.name
      : undefined
  );
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Link href={`/users?sortOrder=name`}>Name</Link>
          </th>
          <th>
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((user) => (
          <tr className="hover" key={user.id}>
            <td>
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
