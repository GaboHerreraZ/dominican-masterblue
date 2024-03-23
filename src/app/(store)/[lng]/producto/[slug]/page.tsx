interface Props {
  params: {
    lng: string;
    slug: string;
  };
}

export default function ProductPage({ params: { lng, slug } }: Props) {
  return (
    <>
      {lng}- {slug}
    </>
  );
}
