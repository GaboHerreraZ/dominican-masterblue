import { Us } from "@/app/components/us/us";

export default function AboutUsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return <Us lng={lng} />;
}
