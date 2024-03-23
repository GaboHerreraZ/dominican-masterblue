import "./global.css";
import { ReactNode } from "react";
import { Darker_Grotesque } from "next/font/google";
import { Loading } from "@/components";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#020617",
              color: "#C48B21",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
