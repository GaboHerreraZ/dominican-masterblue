import { getTranslation } from "@/i18n";
import { Product } from "@/interfaces/product";

export const ProductDetailTableDescription = async ({
  lng,
  product,
}: {
  lng: string;
  product: Product;
}) => {
  const { t } = await getTranslation(lng, "products");

  return (
    <table className="table-auto w-full">
      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
        <tr>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">{t("attribute")}</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">{t("detail")}</div>
          </th>
        </tr>
      </thead>
      <tbody className="text-sm divide-y divide-gray-100">
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">{t("category")}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              {lng === "es"
                ? product.category?.spanishDescription
                : product.category?.englishDescription}
            </div>
          </td>
        </tr>
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">
                {t("subcategory")}
              </div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              {lng === "es"
                ? product.subcategory?.spanishDescription
                : product.subcategory?.englishDescription}
            </div>
          </td>
        </tr>
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">{t("material")}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{product.material}</div>
          </td>
        </tr>
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">{t("length")}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{product.length} cm</div>
          </td>
        </tr>
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">{t("width")}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{product.width} cm</div>
          </td>
        </tr>
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">{t("height")} </div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{product.height} cm</div>
          </td>
        </tr>
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">{t("weight")}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{product.weight} cm</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
