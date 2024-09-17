"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}

export default AuthProvider;
