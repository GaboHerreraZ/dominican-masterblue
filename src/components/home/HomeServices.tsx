import { getTranslation } from "@/i18n";
import { HomeServiceRight } from "./HomeServiceRight";
import { HomeServiceLeft } from "./HomeServiceLeft";

export const HomeServices = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  const services = [
    {
      title: t("interiorDesign"),
      description: t("interiorDesingDescriptions"),
      lng,
      urlImage:
        "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/interior-design.webp?t=2024-05-03T18%3A54%3A56.613Z",
      isRight: true,
    },
    {
      title: t("restoration"),
      description: t("restorationDescription"),
      lng,
      urlImage:
        "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/furniture-manufacturing.webp?t=2024-05-03T18%3A58%3A30.101Z",
      isRight: false,
    },
    {
      title: t("architectureRender"),
      description: t("architectureRenderDescription"),
      lng,
      urlImage:
        "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/3dRender.webp?t=2024-05-04T13%3A54%3A12.602Z",
      isRight: true,
    },
    {
      title: t("furnitureUpholstery"),
      description: t("furnitureUpholsteryDescription"),
      lng,
      urlImage:
        "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/furnitureUpholtery.webp?t=2024-05-04T13%3A57%3A39.960Z",
      isRight: false,
    },
    {
      title: t("handMadeDecoration"),
      description: t("handMadeDecorationDescription"),
      lng,
      urlImage:
        "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/lamps.webp?t=2024-05-03T19%3A05%3A00.758Z",
      isRight: true,
    },
    /*   {
      title: t("WorldforLittleOnes"),
      description: t("WorldforLittleOnesDescription"),
      lng,
      urlImage:
        "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/office.jpg?t=2024-04-15T13%3A36%3A09.234Z",
      isRight: false,
    }, */
  ];

  return (
    <section className=" grid justify-center ">
      {services.map((service, idx) =>
        service.isRight ? (
          <HomeServiceRight key={idx} {...service} />
        ) : (
          <HomeServiceLeft key={idx} {...service} />
        )
      )}
    </section>
  );
};
