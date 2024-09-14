import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function AdminLayout({ children }: Props) {
  return (
    <div>
      <div className="flex">
        <aside className="bg-slate-300 p-4 m-3 w-[150px] text-center">
          menu
        </aside>
        <div className="m-3 p-4">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
