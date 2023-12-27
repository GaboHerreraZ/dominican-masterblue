import { Skeleton } from "@nextui-org/skeleton";

export const ProductDetailSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 my-10 gap-4 px-10 sm:px-40  w-full">
      <div className="sm:px-10">
        <Skeleton>
          <div className="h-[400px]   bg-default-300"></div>
        </Skeleton>
        <div className="hidden  sm:grid sm:grid-cols-4 sm:gap-1 mt-4 sm:h-14 sm:w-full">
          <Skeleton>
            <div className="h-[80px]   bg-default-300"></div>
          </Skeleton>
          <Skeleton>
            <div className="h-[80px]   bg-default-300"></div>
          </Skeleton>
          <Skeleton>
            <div className="h-[80px]   bg-default-300"></div>
          </Skeleton>

          <Skeleton>
            <div className="h-[80px]   bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
      <div className="sm:px-10">
        <Skeleton>
          <div className="h-[20px] bg-default-300"></div>
        </Skeleton>
        <Skeleton className="mt-2">
          <div className="h-[20px]  bg-default-300"></div>
        </Skeleton>
        <Skeleton className="mt-2">
          <div className="h-[400px]   bg-default-300"></div>
        </Skeleton>
        <Skeleton className="mt-2">
          <div className="h-[10px]  bg-default-300"></div>
        </Skeleton>
      </div>
    </div>
  );
};
