import { useParams } from "next/navigation";

function ProductPage({ id }: { id: string }) {
  return (
    <div>
      <h1>Product {id}</h1>
      <p>This is the product page for product {id}.</p>
    </div>
  );
}

export default ProductPage;
