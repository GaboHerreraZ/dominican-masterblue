"use client";
import { HomeIcon, ProductsIcon } from "@/app/utils/iconsUtils";
import { useTranslationStore } from "@/store/translationStore";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes: any = {
  productos: {
    label: "Productos",
    icon: <ProductsIcon size={20} color="#091a7ab3" />,
    link: "productos",
  },
  dashboard: {
    label: "Home",
    icon: <HomeIcon size={15} />,
    link: "",
  },
};

export const BreadcrumbsPage = () => {
  const lng = useTranslationStore((state) => state.lng);
  const paths = usePathname();
  let pathNames = paths.split("/").filter((path) => path);
  pathNames = pathNames.filter((path) => path !== lng);

  return (
    <div className="px-5 mt-10 md:mt-5">
      <Breadcrumbs
        underline="focus"
        variant="light"
        color="primary"
        radius="none"
      >
        {pathNames.map((path) => (
          <BreadcrumbItem
            key={path}
            startContent={routes[path] ? routes[path].icon : <></>}
          >
            {routes[path] ? (
              <Link prefetch={true} href={`/dashboard/${routes[path].link}`}>
                {routes[path].label}
              </Link>
            ) : (
              path
            )}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
};
