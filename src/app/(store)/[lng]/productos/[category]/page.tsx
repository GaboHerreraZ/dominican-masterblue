interface Props {
  params: {
    lng: string;
    category: string;
  };
  searchParams: {
    subcategoria: string;
    pagina: string;
  };
}

export default function ProductsPage({
  params: { lng, category },
  searchParams: { pagina, subcategoria },
}: Props) {
  return (
    <>
      {lng} - {category} {pagina} {subcategoria}
    </>
  );
}
