"use client";
import { useProductBreadCrumbStore } from "@/store";
import { IoHome } from "react-icons/io5";
import { RxSlash } from "react-icons/rx";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Breadcrumb = () => {
  const home = useProductBreadCrumbStore((state) => state.home);
  const path = useProductBreadCrumbStore((state) => state.path);

  const [client, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, [client]);

  return (
    <>
      {client && home && (
        <div className="flex justify-start items-center px-20 text-gray-400 my-4">
          <Link href={home}>
            <IoHome />
          </Link>
          <RxSlash />
          <span>{path}</span>
        </div>
      )}
    </>
  );
};
