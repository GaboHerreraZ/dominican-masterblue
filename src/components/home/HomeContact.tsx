import Image from "next/image";
import Link from "next/link";

export const HomeContact = () => {
  return (
    <section className="flex flex-col md:flex-row  relative w-100 h-[500px] md:h-[400px] my-10 z-10 justify-center m-auto container">
      <div className="relative w-full h-full md:grid md:w-1/2">
        <Image
          src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/projectsImages/projects/2.webp"
          alt="Logo Dominican Masterblue"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative w-full h-full md:grid md:w-1/2">
        <Image
          src="https://llfscfhwhopxywvxgwcz.supabase.co/storage/v1/object/public/projectsImages/projects/27.webp"
          alt="Logo Dominican Masterblue"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="w-full absolute top-0 md:w-[40%] h-full flex items-center z-20">
        <div className="flex absolute border-l-8 border-gold  p-5 flex-col z-20  bg-white/70 justify-center  mx-auto container shadow-lg ">
          <h1 className="text-3xl intersect:animate-fade-down intersect:animate-duration-700 w-full  font-bold text-gold ">
            Make Your Dream Home a Reality!
          </h1>
          <p className="mt-2 text-2xl intersect:animate-fade-down intersect:animate-duration-1000">
            Transform your dreams into reality. Contact us today and turn your
            home into an extraordinary space!
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="bg-gold/75 px-3 py-2  hover:bg-white/75 hover:text-gold   text-white text-lg transition-all duration-700 ease-in-out"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 *
 *
 *
 *
 */
