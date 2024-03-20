import "./global.css";
import { ReactNode } from "react";
import { Darker_Grotesque } from "next/font/google";
import { Loading } from "@/components";

export const darker = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700"],
});

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body className={darker.className}>
        <Loading />
        {children}
      </body>
    </html>
  );
}
