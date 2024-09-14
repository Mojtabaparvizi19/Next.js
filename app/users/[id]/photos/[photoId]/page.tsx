import React from "react";

interface Props {
  params: { photoId: number; id: number };
}

function photos({ params: { id, photoId } }: Props) {
  return (
    <div>
      photo {photoId} of user: {id}
    </div>
  );
}

export default photos;
