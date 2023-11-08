"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  console.log("pedales");
  return <NextUIProvider>{children}</NextUIProvider>;
}
