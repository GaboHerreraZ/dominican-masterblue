import { Product } from "@/domain/model/product";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { ProductTranslations } from "@/models/productTranslations";

interface Props {
  lng: string;
  product: Product;
  translations: ProductTranslations;
}

export const ProductDetailDescription = ({
  product,
  lng,
  translations,
}: Props) => {
  return (
    <div className="px-10">
      <h1 className="text-black/80 font-bold capitalize  text-2xl">
        {lng === "en" ? product.englishName : product.spanishName}
      </h1>
      <h2 className="text-master-900/70 my-2 font-bold text-xl">
        ${product.price}
      </h2>
      <article className="text-xl lowercase text-justify">
        {lng === "en" ? product.englishDescription : product.spanishDescription}
      </article>
      <Divider className="mt-2" />
      <div className="mt-2">
        <h2 className="py-2 text-lg font-bold text-black/80">
          {translations.colors}
        </h2>
        {product.colors?.map((color, idx) => (
          <div
            className="inline-block mr-2"
            key={idx}
            style={{
              height: "25px",
              width: "25px",
              backgroundColor: `${color.color}`,
              borderRadius: "100%",
            }}
          ></div>
        ))}
      </div>
      <Divider className="mt-2" />
      <div className="mb-5">
        <h2 className="py-2 text-lg font-bold text-black/80">
          {translations.characteristics}
        </h2>
        <table className="min-w-full shadow">
          <thead className="bg-white border-b">
            <tr className="bg-black/80">
              <th
                scope="col"
                className="text-sm text-white font-bold  px-6 py-4 text-left"
              >
                {translations.attribute}
              </th>
              <th
                scope="col"
                className="text-sm text-white font-bold  px-6 py-4 text-left"
              >
                {translations.detail}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {translations.material}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {product.material} cm
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {translations.width}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {product.width} cm
              </td>
            </tr>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {translations.length}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {product.length} cm
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {translations.height}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {product.height} cm
              </td>
            </tr>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {translations.weight}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {product.weight} Kg
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        className="w-full"
        color="primary"
        variant="bordered"
        radius="none"
      >
        {translations.requestInformation}
      </Button>
    </div>
  );
};
