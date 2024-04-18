import { getCategories } from "@/actions";
import Link from "next/link";

export const NavbarCategory = async ({ lng }: { lng: string }) => {
  const categories = await getCategories();

  return (
    <nav className="hidden md:flex w-full z-50 bg-secondary sticky top-0  h-10">
      <ul className="flex gap-10 w-full items-center justify-center border-b-[1px]  text-white font-bold border-gold">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/products/${category.link}`}>
              {lng === "es"
                ? category.spanishDescription
                : category.englishDescription}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
