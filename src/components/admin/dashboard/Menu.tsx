import Link from "next/link";

interface Props {
  products: number;
}

export const Menu = ({
  products,
}: Props) => {
  return (
    <>
      <header className="flex mt-5 flex-col md:flex-row  justify-between md:items-center border-b-[1px] border-gray-300">
        <h1 className="text-xl font-extrabold  uppercase">Dashboard</h1>
      </header>
      <ul className="flex flex-wrap py-2 justify-center md:justify-normal  gap-10 w-full mt-2 ">
        <li>
          <Link
            href="/admin/productos"
            className="shadow py-4 px-6  flex flex-col gap-2 items-center "
          >
            <h1 className="font-bold text-xl">Artículos</h1>
            <p className="text-4xl font-bold text-gold">{products}</p>
          </Link>
        </li>
      </ul>
    </>
  );
};
