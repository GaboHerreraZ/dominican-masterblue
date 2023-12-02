import { ListProductsIcon, ProductsIcon } from "@/app/utils/iconsUtils";
import { useTranslationStore } from "@/store/translationStore";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";

export const Menu = () => {
  const dashboardTranslations = useTranslationStore(
    (state) => state.dashboardTranslations
  );
  const lng = useTranslationStore((state) => state.lng);

  return (
    <section className="p-2 ">
      <Accordion
        itemClasses={{
          base: "z-40",
          heading: "text-white",
          title: "text-white text-sm",
        }}
        variant="light"
      >
        <AccordionItem
          key="1"
          aria-label="Products"
          title={dashboardTranslations?.productTitle}
          subtitle={dashboardTranslations?.productDescription}
          classNames={{
            subtitle: "text-slate-400 text-[10px]",
          }}
          startContent={<ProductsIcon size={30} color="currentColor" />}
        >
          <ul className="z-40 text-xs text-white py-2 px-4 bg-black/30  ">
            <li className="flex items-center gap-1 ">
              <ListProductsIcon size={20} />
              <Link
                className="hover:underline"
                href={`/${lng}/dashboard/productos`}
              >
                {dashboardTranslations?.listProductTitle}
              </Link>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
