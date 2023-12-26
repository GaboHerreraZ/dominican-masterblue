"use client";
import { ReactNode, useState } from "react";
import { Button } from "@nextui-org/button";
import { IoMenu } from "react-icons/io5";

import { BreadcrumbsPage } from "@/components/dashboard/breadcrumbs/Breadcrumbs";
import { Sidebar } from "@/components/dashboard/menu/Sidebar";
import { DashboardTranslations } from "@/models/dashboardTranslations";

interface Props {
  children: ReactNode;
  lng: string;
  translations: DashboardTranslations;
}

export const DashBoardLayout = ({ children, lng, translations }: Props) => {
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
            <IoMenu size={40} />
          </Button>
        </div>
        <Sidebar
          show={show}
          setter={setShow}
          lng={lng}
          translations={translations}
        />
        <main className="w-full min-h-screen">
          <BreadcrumbsPage />
          {children}
        </main>
      </div>
    </div>
  );
};
