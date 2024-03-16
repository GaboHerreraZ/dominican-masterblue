interface Props {
  params: {
    lng: string;
  };
}

export default function StoreHomePage({ params: { lng } }: Props) {
  console.log(lng);

  return <>StoreHomePage</>;
}
