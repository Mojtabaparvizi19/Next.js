import Link from "next/link";

interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

function ShowCategory({
  params: { slug },
  searchParams: { sortOrder },
}: Props) {
  return (
    <div>
      shoes: {slug}
      <hr />
      sort: {sortOrder}
      <table className="table">
        <thead>
          <tr>
            <th>
              <Link href={"/shoes?sortOrder=brand"}>Brand</Link>
            </th>
            <th>
              <Link href={"/shoes?sortOrder=type"}>Type</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover rounded-full">
            <td>Nike</td>
            <td>Jordan</td>
          </tr>
          <tr className="hover">
            <td>Nike</td>
            <td>Air Max</td>
          </tr>
          <tr className="hover">
            <td>Puma</td>
            <td>Jump</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowCategory;
