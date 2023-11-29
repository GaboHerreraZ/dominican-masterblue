"use client";
import { ReactNode, useState } from "react";
import { Sidebar } from "@/app/components/dashboard/sidebar";
import { Button } from "@nextui-org/button";
import { BarsIcon } from "@/app/utils/iconsUtils";
import { BreadcrumbsPage } from "@/app/components/dashboard/breadcrumbs/breadcrumbs";

export const DashBoardLayout = ({
  children,
  lng,
}: {
  children: ReactNode;
  lng: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="flex">
        <div
          className={`top-0 left-0 right-0 md:hidden fixed h-12 ${
            show ? "hidden" : "block"
          }`}
        >
          <Button
            variant="light"
            color="primary"
            onClick={() => setShow((val) => !val)}
          >
            <BarsIcon size={40} />
          </Button>
        </div>
        <Sidebar lng={lng} show={show} setter={setShow} />
        <main className="w-full min-h-screen">
          <BreadcrumbsPage lng={lng} />
          {children}
        </main>
      </div>
    </div>
  );
};
