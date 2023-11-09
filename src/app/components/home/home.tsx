import { Banner } from "@/app/components/home/banner";
import { Services } from "@/app/components/home/services/services";
import { useTranslation } from "@/app/i18n";
import { ContactSection } from "@/app/components/home/contactSection";
import { Products } from "@/app/components/home/products/products";

export const Home = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <>
      <Banner />
      <section className="w-full mt-5 p-5 md:p-10 ">
        <p className="italic text-center m-0 text-4xl ">
          {t("serviceDescription")}
        </p>
        <h4 className="mb-7 m-0 text-center font-bold text-2xl">
          {t("service")}
        </h4>
        <Services />
      </section>
      <ContactSection lng={lng} />
      <section className="w-full mt-5 p-5 md:p-10">
        <p className="italic text-center m-0 text-4xl ">
          {t("productDescription")}
        </p>
        <h4 className="mb-7 m-0 text-center font-bold text-2xl">
          {t("product")}
        </h4>
        <section className="mx-20">
          <Products />
        </section>
      </section>
    </>
  );
};
