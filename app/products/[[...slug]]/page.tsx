interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

function Product({ params: { slug }, searchParams: { sortOrder } }: Props) {
  return (
    <div>
      Product: {slug}
      {sortOrder}
    </div>
  );
}

export default Product;
