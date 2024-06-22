import { getAllProducts, getProductBySlug } from "@/actions";
import { ProductDetail } from "@/components";
import { SharedContact, SharedProjects } from "@/components/shared";
import { Product } from "@/interfaces/product";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const languages = ["en", "es"];

export async function generateStaticParams() {
  const product = await getAllProducts();

  const params: { slug: string; lng: string }[] = [];

  languages.forEach((lng) => {
    product.forEach((product) => {
      params.push({ lng, slug: product.slug });
    });
  });

  return params;
}

export async function generateMetadata({
  params: { slug, lng },
}: {
  params: { slug: string; lng: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(slug);

  return {
    metadataBase: new URL(
      `https://dominicanmasterblue.com/${lng}/product/${product!.slug}`
    ),
    title: lng === "en" ? product?.englishName : product?.spanishName,
    description:
      lng === "en" ? product?.englishDescription : product?.spanishDescription,
    openGraph: {
      title: lng === "en" ? product?.englishName : product?.spanishName,
      description:
        lng === "en"
          ? product?.englishDescription
          : product?.spanishDescription,
      siteName: "Dominican Master Blue",
      url: `https://dominicanmasterblue.com/${lng}/product/${product!.slug}`,
      images: [
        {
          url: product?.productImage[0].url!,
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

export default async function ProductPage({
  params: { slug, lng },
}: {
  params: { slug: string; lng: string };
}) {
  const product = await getProductBySlug(slug);

  return (
    <>
      <ProductDetail lng={lng} product={product as Product} />
      <SharedProjects lng={lng} />
      <SharedContact lng={lng} />
    </>
  );
}
