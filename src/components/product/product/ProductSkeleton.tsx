import { Skeleton } from "@nextui-org/skeleton";

export const ProductSkeleton = () => {
  const array: number[] = [1, 2, 3, 4];

  return (
    <section className="grid grid-cols-1 gap-4 mx-10  md:mx-20 my-10  md:grid-cols-4 justify-between">
      {array.map((item) => (
        <div key={item} className="grid gap-2">
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
