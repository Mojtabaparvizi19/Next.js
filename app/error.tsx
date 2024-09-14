"use client";

interface Props {
  error: Error;
  reset: () => void;
}

import React from "react";

function ErrorPage({ reset, error }: Props) {
  console.log("Error", error);
  return (
    <div>
      <div className="flex ">
        It doesn&apos;t. matter Unexpected error happened
      </div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}

export default ErrorPage;
