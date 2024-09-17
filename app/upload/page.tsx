"use client";

import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryProp {
  public_id: string;
}

function UploadPage() {
  const [publicId, setPublic] = useState("");
  return (
    <div>
      {publicId && (
        <CldImage
          className="my-10 rounded-xl"
          alt="picture"
          src={publicId}
          width={370}
          height={450}
        />
      )}
      <CldUploadWidget
        options={{ sources: ["local", "google_drive", "unsplash"] }}
        uploadPreset="nggquzjc"
        onSuccess={(result, { widget }) => {
          const info = result.info as CloudinaryProp;
          setPublic(info.public_id);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}

export default UploadPage;
