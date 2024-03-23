interface Props {
  params: {
    lng: string;
  };
}

export default function StoreHomePage({ params: { lng } }: Props) {
  return <div>StoreHomePage {lng}</div>;
}
