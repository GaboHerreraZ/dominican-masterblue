export default function DashBoard({
  params: { lng },
}: {
  params: { lng: string };
}) {
  console.log("lng", lng);
  return <>Página principal dashboard</>;
}
