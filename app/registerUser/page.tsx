"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import axios, { AxiosError } from "axios";

function RegisterUser() {
  const [fail, setFail] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          if (email.current && password.current) {
            const newData = {
              email: email.current.value,
              password: email.current.value,
            };
            await axios
              .post("/register", newData, {
                headers: {
                  "content-type": "application/json",
                },
              })
              .then(() => {
                setFail(false);
                router.push("/user");
              })
              .catch((error: AxiosError) => {
                setError(error.message);
                setFail(true);
              });
          }
        }}
      >
        <label htmlFor="">email</label>
        <input
          ref={email}
          type="text"
          className="bg-slate-200 rounded-xl p-3 m-3"
        />

        <label htmlFor="">password</label>
        <input
          ref={password}
          type="text"
          className="bg-slate-200 rounded-xl p-3 m-3"
        />

        {!fail && (
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        )}
        {fail && (
          <button
            className="btn btn-secondary"
            onClick={() => router.push("/api/user")}
          >
            Sign In
          </button>
        )}
      </form>
      {fail && <p>{error}</p>}
    </div>
  );
}
//email@gmail.com

export default RegisterUser;
