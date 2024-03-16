import React from "react";
import { Metadata } from "next";

import { ProductTranslations } from "@/models/productTranslations";
import GetTranslations from "@/utils/translationsPage";

import ProductService from "@/service/productService";
import { ProductDetailDescription } from "@/components/product/product/ProductDetailDescription";
import { ProductDetailMobileImages } from "@/components/product/product/ProductDetailMobileImages";
import { ProductDetailImages } from "@/components/product/product/ProductDetailImages";
import { ProductRecommended } from "@/components/product/product/ProductRecommended";
import { BreadCrumbs } from "@/components/product/product/BreadCrumbs";
import { ContactUs } from "@/components/us";
import { ContactTranslations } from "@/models/contactTranslations";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const languages = ["en", "es"];

interface Props {
  params: {
    lng: string;
    product: string;
  };
}

export async function generateStaticParams() {
  const { findAll } = ProductService();
  const products = await findAll();
  const params: any = [];
  languages.forEach((lng) => {
    products.forEach((product) => {
      params.push({ lng, product: product.slug });
    });
  });
  return params;
}

const getProductBySlug = async (slug: string) => {
  const { findById } = ProductService();
  return await findById(slug);
};

async function getTranslationsProduct(
  lng: string
): Promise<ProductTranslations> {
  const { getProductTranslations } = GetTranslations();
  return await getProductTranslations(lng);
}

async function getTranslationsContact(
  lng: string
): Promise<ContactTranslations> {
  const { getContactTranslations } = GetTranslations();
  return await getContactTranslations(lng);
}

export async function generateMetadata({
  params: { lng, product },
}: Props): Promise<Metadata> {
  const productFinded = await getProductBySlug(product);

  return {
    metadataBase: new URL(
      `https://www.dominicanmasterblue.com/${lng}/productos/${productFinded.slug}`
    ),
    title: lng === "es" ? productFinded.spanishName : productFinded.englishName,
    description:
      lng === "es"
        ? productFinded.spanishDescription
        : productFinded.englishDescription,
    openGraph: {
      title:
        lng === "es" ? productFinded.spanishName : productFinded.englishName,
      description:
        lng === "es"
          ? productFinded.spanishDescription
          : productFinded.englishDescription,
      siteName: "Dominican Master Blue",
      url: `https://www.dominicanmasterblue.com/${lng}/productos/${productFinded.slug}`,
      images: [
        {
          url: productFinded?.urlImage || "",
          width: 800,
          height: 600,
        },
      ],
    },
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}

export default async function ProductPage({ params: { lng, product } }: Props) {
  const productBySlugPromise = getProductBySlug(product);
  const translationsPromise = getTranslationsProduct(lng);
  const translationsContactPromise = getTranslationsContact(lng);

  const [productBySlug, translations, contactTranslations] = await Promise.all([
    productBySlugPromise,
    translationsPromise,
    translationsContactPromise,
  ]);

  return (
    <main className="m-0">
      <div className="mt-10 mb-5 sm:mx-20 sm:px-[120px]">
        <BreadCrumbs
          translations={translations}
          product={productBySlug}
          lng={lng}
        />
      </div>
      <div className="flex flex-col gap-10 md:flex-row sm:mx-20 sm:px-20">
        <section className="hidden sm:block md:w-1/2">
          <ProductDetailImages product={productBySlug} />
        </section>
        <section className="w-full block sm:hidden">
          <ProductDetailMobileImages product={productBySlug} />
        </section>
        <section className="w-full md:w-1/2">
          <ProductDetailDescription
            translations={translations}
            lng={lng}
            product={productBySlug}
          />
        </section>
      </div>
      <ProductRecommended lng={lng} translations={translations} />
      <ContactUs translations={contactTranslations} />
    </main>
  );
}
