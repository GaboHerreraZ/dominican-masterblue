import { getTranslation } from "@/i18n";
import "./style.css";
import { ZoomImage } from "./ZoomImage";

const images = [
  {
    className: "kitchen",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/kitchen.jpg?t=2024-04-15T13%3A38%3A22.861Z",
    label: "kitchen",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Clamp",
  },

  {
    className: "bathroom",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/bathroom.jpg?t=2024-04-15T13%3A37%3A41.998Z",
    label: "bathRoom",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Clamp",
  },

  {
    className: "room",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/room.jpg",
    label: "room",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Cdesk",
  },
  {
    className: "livingRoom",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/living-room.jpg?t=2024-04-15T13%3A36%3A47.618Z",
    label: "livingRoom",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Cdesk",
  },

  {
    className: "office",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/office.jpg?t=2024-04-15T13%3A36%3A09.234Z",
    label: "offices",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Cdesk",
  },
];

export const FindInDominican = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="grid justify-center py-10 bg-gold/10">
      <h1 className="font-bold py-10 text-gold text-center text-3xl">
        {t("titleFindIn")}
      </h1>

      <div className="wrapper">
        {images.map((image) => (
          <ZoomImage key={image.label} lng={lng} {...image} />
        ))}
      </div>
    </section>
  );
};
