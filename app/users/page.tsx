import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

function UsersPage({ searchParams: { sortOrder } }: Props) {
  return (
    <div>
      <Link href={"/users/new"} className="btn m-3">
        new user
      </Link>
      <h1 className="badge-md hover cursor-pointer">
        <Link className="badge badge-primary " href={"/users"}>
          clear sort
        </Link>
      </h1>
      <Suspense
        fallback={<div className="loading loading-lg loading-spinner"></div>}
      >
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
}

export default UsersPage;
