"use client";
import { MdEditSquare } from "react-icons/md";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { Chip } from "@nextui-org/chip";

import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/models/productTranslations";
import Image from "next/image";
import Link from "next/link";
import noImage from "../../../../public/img/png/no-image.png";
import { columns } from "./const";

interface Props {
  products: Product[];
  translations: ProductTranslations;
  lng: string;
}

export const ProductsTable = ({ products, translations, lng }: Props) => {
  const listColumns: any[] = columns[lng];
  return (
    <>
      <Table
        classNames={{
          th: "first:rounded-none last:rounded-none text-white bg-master-secondary",
        }}
        radius="none"
        aria-label="table products"
      >
        <TableHeader>
          {listColumns.map((column: any, idx) => (
            <TableColumn
              key={idx}
              align={column.slug === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {products.map((product, idx) => (
            <TableRow key={idx}>
              <TableCell key={1}>
                <Image
                  aria-label={product.spanishName}
                  priority={true}
                  alt={product.id}
                  src={product.urlImage || noImage}
                  width={80}
                  height={80}
                />
              </TableCell>
              <TableCell key={2}>{product.slug}</TableCell>
              <TableCell key={3}>{product.spanishName}</TableCell>
              <TableCell key={4}>{product.englishName}</TableCell>
              <TableCell key={5}> {product.quantity}</TableCell>

              <TableCell key={6}>
                <span className="font-bold text-master-900/70 ">
                  ${product.price}
                </span>
              </TableCell>
              <TableCell> {product.category}</TableCell>

              <TableCell key={7}>
                <Chip
                  className="capitalize"
                  color={product.state ? "success" : "danger"}
                  size="sm"
                  variant="flat"
                >
                  {product.state
                    ? translations?.active
                    : translations?.inactive}
                </Chip>
              </TableCell>
              <TableCell key={8}>
                {product.youTubeLink ? (
                  <span className="underline italic text-small">
                    <Link href={product.youTubeLink} target="_blank">
                      {translations?.seeVideo}
                    </Link>
                  </span>
                ) : (
                  <></>
                )}
              </TableCell>
              <TableCell key={9}>
                <div className="relative flex items-center gap-2">
                  <Tooltip
                    content={translations?.editProductTooltip}
                    placement="left"
                  >
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <Link
                        prefetch={true}
                        href={`/dashboard/productos/${product.slug}`}
                        className="text-master-900/70"
                      >
                        <MdEditSquare size={20} />
                      </Link>
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
