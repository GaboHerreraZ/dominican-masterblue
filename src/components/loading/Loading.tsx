import { Skeleton } from "@nextui-org/skeleton";
export const Loading = () => {
  return (
    <section className="z-50 p-10 top-0 h-screen ">
      <Skeleton className=" w-1/2">
        <div className="h-5 mt-5   bg-default-300"></div>
      </Skeleton>

      <div className="grid grid-flow-col mt-5 w-full gap-2">
        <Skeleton>
          <div className="h-16  bg-default-200"></div>
        </Skeleton>
        <Skeleton>
          <div className="h-16  bg-default-200"></div>
        </Skeleton>
      </div>
      <div className="space-y-3 mt-5">
        <Skeleton className="w-full ">
          <div className="h-12  w-full bg-default-200"></div>
        </Skeleton>

        <Skeleton className="w-full ">
          <div className="h-3  w-4/5  bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-full ">
          <div className="h-3   bg-default-200"></div>
        </Skeleton>
      </div>
    </section>
  );
};
