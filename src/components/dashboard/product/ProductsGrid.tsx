import { Product } from "@/domain/model/product";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ProductTranslations } from "@/models/productTranslations";
import { ProductsTable } from "./ProductsTable";
import { IoMdAddCircle } from "react-icons/io";

interface Props {
  products: Product[];
  lng: string;
  translations: ProductTranslations;
}

export const ProductsGrid = ({ products, lng, translations }: Props) => {
  return (
    <section className="p-5 mt-5 md:px-5 md:py-0">
      <header className="flex w-full justify-between">
        <h4 className="text-3xl text-master-900/70 pb-5 uppercase font-bold">
          {translations?.title}
        </h4>
        <Link href={"/dashboard/productos/nuevo"}>
          <Button
            color="primary"
            radius="none"
            variant="bordered"
            size="sm"
            startContent={<IoMdAddCircle size={20} />}
          >
            {translations?.newProduct}
          </Button>
        </Link>
      </header>
      <ProductsTable
        lng={lng}
        translations={translations}
        products={products}
      />
    </section>
  );
};
