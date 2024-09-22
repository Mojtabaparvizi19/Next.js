"use client";

import UserCard from "./components/UserCard/UserCard";
import { getServerSession } from "next-auth";
import authOption from "./api/auth/authOption";
import Image from "next/image";
import image from "./assets/images/london.jpg";
import { CSSProperties, useState } from "react";
import dynamic from "next/dynamic";

const imageCSS: CSSProperties = {
  height: "400px",
  width: "400px",
  background: "red",
  padding: "10px",
  position: "relative",
};

const HeavyComponent = dynamic(() => import("./components/UserCard/UserCard"), {
  loading: () => (
    <div>
      <hr /> <p>...loading</p>
    </div>
  ),
});

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);
  // const session = await getServerSession(authOption);

  return (
    <main>
      {/* <h1 className="font-light">
        Hello<span className="font-bold"> {session?.user?.name}</span>
      </h1>
      <UserCard /> */}

      <div style={imageCSS}>
        <Image
          style={{ borderRadius: "10px" }}
          // width={100}
          // height={300}
          sizes="inherit"
          fill
          objectFit="cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/800px-London_Big_Ben_Phone_box.jpg"
          alt="image of London"
        />
      </div>
      <button onClick={() => setLoaded(true)} className="btn">
        show
      </button>
      {isLoaded && <HeavyComponent />}
    </main>
  );
}
