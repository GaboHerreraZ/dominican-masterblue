"use client";
import { ReactNode, useState } from "react";
import { Sidebar } from "@/app/components/dashboard/sidebar";
import { Button } from "@nextui-org/button";
import { BarsIcon } from "@/app/utils/iconsUtils";

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
        <main className="grid p-15 w-full min-h-screen">{children}</main>
      </div>
    </div>
  );
};
