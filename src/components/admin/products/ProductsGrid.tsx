import {
  ActionRow,
  BaseRow,
  ImageRow,
  StateRow,
  Table,
  TextRow,
} from "@/components/ui";

import { Base } from "@/interfaces/base";
import { Column } from "@/interfaces/column";
import { Product } from "@/interfaces/product";
import Link from "next/link";

import { BiSolidEdit } from "react-icons/bi";

const columns: Column[] = [
  { label: "Imagen" },
  { label: "Sku" },
  { label: "Slug" },
  { label: "Estado" },
  { label: "Categoría" },
  { label: "Subcategoría" },
  { label: "Acciones" },
];

interface Props {
  products: Product[];
  totalPages: number;
  categories: Base[];
  subcategories: Base[];
}

export const ProductGrid = ({
  products,
  categories,
  subcategories,
  totalPages,
}: Props) => {
  return (
    <div className="mt-5">
      <header className="flex justify-between items-center border-b-[1px] border-gray-300">
        <h1 className="text-xl font-extrabold mb-5 uppercase">Productos</h1>
        <Link className="button-gold" href="/admin/producto/nuevo">
          Agregar Producto
        </Link>
      </header>

      <Table columns={columns} totalPages={totalPages}>
        <>
          {products.map((product) => (
            <tr key={product.sku}>
              <ImageRow
                image={product.productImage[0].url}
                label={product.spanishName}
              />
              <TextRow label={product.sku} />
              <TextRow label={product.slug} />
              <StateRow
                state={product.state}
                trueLabel="Disponible"
                falseLabel="No disponible"
              />
              <BaseRow base={categories} id={product.categoryId} />
              <BaseRow base={subcategories} id={product.subcategoryId} />
              <ActionRow
                actions={[
                  {
                    icon: <BiSolidEdit size={25} />,
                    href: `/admin/producto/${product.sku}`,
                    id: product.id,
                  },
                ]}
              />
            </tr>
          ))}
        </>
      </Table>
    </div>
  );
};
