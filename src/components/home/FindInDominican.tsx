import { getTranslation } from "@/i18n";
import "./style.css";
import { ZoomImage } from "./ZoomImage";

const images = [
  {
    className: "sillas",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/dominican4.jpg?t=2024-04-09T15%3A13%3A48.879Z",
    label: "chairs",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Clamp",
    alt: "Anillos en BellArte",
  },

  {
    className: "mesas",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/dominican3.jpg?t=2024-04-09T15%3A14%3A49.229Z",
    label: "tables",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Clamp",
    alt: "Cadenas en BellArte",
  },

  {
    className: "camas",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/dominican6.jpg",
    label: "beds",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Cdesk",
    alt: "Camas en Dominican",
  },

  {
    className: "muebles",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/dominican5.jpg?t=2024-04-09T15%3A19%3A33.984Z",
    label: "furniture",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Cdesk",
    alt: "Muebles en Dominican",
  },

  {
    className: "lamparas",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/dominican2.jpg?t=2024-04-09T15%3A18%3A01.021Z",
    label: "lamps",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Cdesk",
    alt: "Lamparas en Dominican",
  },

  {
    className: "oficinas",
    urlImage:
      "https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/dominican1.jpg?t=2024-04-09T15%3A18%3A59.501Z",
    label: "offices",
    link: "http://localhost:3000/es/products/all?subcategoria=%2Cdesk",
    alt: "Oficinas en Dominican",
  },
];

export const FindInDominican = async ({ lng }: { lng: string }) => {

  const {t} = await getTranslation(lng, 'home')

  return (
    <section className="grid justify-center py-10 bg-gold/10">
      <h1 className="font-bold py-10 text-gold text-center text-3xl">
        {t('titleFindIn')}
      </h1>

      <div className="wrapper">
        {images.map((image) => (
          <ZoomImage key={image.label} lng={lng} {...image} />
        ))}
      </div>
    </section>
  );
};
