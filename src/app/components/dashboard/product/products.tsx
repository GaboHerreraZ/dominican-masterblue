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
import { useCallback, Key } from "react";
import { DeleteIcon, EditIcon } from "@/app/utils/iconsUtils";
import { Tooltip } from "@nextui-org/tooltip";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useProductStore } from "@/store/useProductStore";

export const ProductsTable = ({
  products,
  lng,
}: {
  products: Product[];
  lng: string;
}) => {
  const listColumns: any[] = columns[lng];

  const translations = useProductStore((state) => state.translations);

  const renderCell = useCallback((product: Product, columnKey: Key) => {
    const cellValue = product[columnKey as keyof Product];

    switch (columnKey) {
      case "spanishName":
        return <>{cellValue}</>;
      case "englishName":
        return <>{cellValue}</>;
      case "price":
        return <>{cellValue}</>;
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
            <Tooltip content="Edit product" placement="left">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link href={`/dashboard/productos/${product.id}`}>
                  <EditIcon />
                </Link>
              </span>
            </Tooltip>
            <Tooltip placement="right" color="danger" content="Delete product">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <section className="mt-10 p-5 md:p-10">
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
          {(item) => (
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
