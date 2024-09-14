import { error } from "console";
import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

function page({ params }: Props) {
  if (params.id > 10) notFound();
  return <div>page {params.id}</div>;
}

export default page;
