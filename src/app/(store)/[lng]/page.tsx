interface Props {
  params: {
    lng: string;
  };
}

export default function StoreHomePage({ params: { lng } }: Props) {
  console.log(lng);

  return <div className="h-[1500px]">StoreHomePage</div>;
}
