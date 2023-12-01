"use client";
import { Product } from "@/domain/model/product";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

import { columns } from "@/app/components/dashboard/product/const";
import { Key } from "react";
import { EditIcon } from "@/app/utils/iconsUtils";
import { Tooltip } from "@nextui-org/tooltip";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ProductTranslations } from "@/app/models/productTranslations";
import Image from "next/image";
import noImage from "../../../../../public/img/png/no-image.png";
import { useProductStore } from "@/store/useProductStore";
import useSWR from "swr";

export const ProductsTable = ({
  lng,
  translations,
}: {
  lng: string;
  translations: ProductTranslations;
}) => {
  const findAll = useProductStore((state) => state.findAll);
  const { data: products } = useSWR<Product[]>("productTable", findAll);

  if (!products) return;

  const listColumns: any[] = columns[lng];

  const renderCell = (product: Product, columnKey: Key) => {
    const cellValue = product[columnKey as keyof Product];

    switch (columnKey) {
      case "mainImage":
        return (
          <Image
            aria-label={product.spanishName}
            priority={true}
            alt={product.id}
            src={product.urlImage || noImage}
            width={80}
            height={80}
          />
        );
      case "youTubeLink":
        return (
          <span className="underline italic text-small">
            {product.youTubeLink ? (
              <Link href={product.youTubeLink} target="_blank">
                {translations.seeVideo}
              </Link>
            ) : (
              "----"
            )}
          </span>
        );
      case "spanishName":
        return <>{cellValue}</>;
      case "englishName":
        return <>{cellValue}</>;
      case "price":
        return (
          <span className="font-bold text-master-900/70 ">
            ${product.price}
          </span>
        );
      case "state":
        return (
          <Chip
            className="capitalize"
            color={cellValue ? "success" : "danger"}
            size="sm"
            variant="flat"
          >
            {cellValue ? translations.active : translations.inactive}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content={translations.editProductTooltip} placement="left">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link
                  prefetch={true}
                  href={`/dashboard/productos/${product.id}`}
                >
                  <EditIcon />
                </Link>
              </span>
            </Tooltip>
          </div>
        );
      default:
        return <>{cellValue}</>;
    }
  };

  return (
    <section className="p-5 mt-5 md:px-5 md:py-0">
      <header className="flex w-full justify-between">
        <h4 className="text-3xl text-master-900/70 pb-5 uppercase font-bold">
          {translations.title}
        </h4>
        <Button color="primary" radius="none" variant="bordered" size="sm">
          <Link href={"/dashboard/productos/nuevo"}>
            {translations.newProduct}
          </Link>
        </Button>
      </header>
      <Table radius="none" aria-label="table products">
        <TableHeader columns={listColumns}>
          {(column: any) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={products}>
          {(item: Product) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};
