import { Skeleton } from "@nextui-org/skeleton";

export const ProductSkeleton = () => {
  const array: number[] = [1, 2, 3, 4];

  return (
    <section className="grid grid-rows-4  md:grid-cols-4 gap-4">
      {array.map((item) => (
        <div key={item} className="grid gap-2">
          <Skeleton>
            <div className="h-[10px]    bg-default-300"></div>
          </Skeleton>
          <Skeleton>
            <div className="h-[250px]   bg-default-300"></div>
          </Skeleton>
          <Skeleton>
            <div className="h-[30px]    bg-default-300"></div>
          </Skeleton>
        </div>
      ))}
    </section>
  );
};
