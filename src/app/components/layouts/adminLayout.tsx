import { ReactNode } from "react";

export const AdminLayout = ({
  children,
  lng,
}: {
  children: ReactNode;
  lng: string;
}) => {
  return <>{children}</>;
};
