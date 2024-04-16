import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full ">
      <div className="relative h-[700px]  ">
        <Image
          src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/publicImage/home/home2.jpg?t=2024-04-15T21%3A14%3A50.686Z"
          fill
          style={{ objectFit: "cover" }}
          alt="Dominican master blue home"
        />
        <div className="w-full h-full relative bg-gradient-to-r from-100% from-white to-0%  to-transparent"></div>
      </div>
    </div>
  );
};
