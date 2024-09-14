"use client";

import { useRouter } from "next/navigation";
import React from "react";

function NewUserPage() {
  const router = useRouter();
  return (
    <div>
      <button className="btn" onClick={() => router.push("/users")}>
        Add User
      </button>
    </div>
  );
}

export default NewUserPage;
