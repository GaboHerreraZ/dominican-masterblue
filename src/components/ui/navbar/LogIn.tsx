import { getUser } from "@/actions";
import Link from "next/link";

export const LogIn = async ({ label }: { label: string }) => {
  const { id, role } = await getUser();

  return (
    <>
      {!id && !role && (
        <Link
          className="hidden md:flex lg:flex  absolute top-3 right-4 py-4 "
          href="/auth/login"
        >
          <span className="border-[1px] text-white font-bold hover:text-gold border-gold px-2 rounded hover:bg-black/5  transition-all duration-500">
            {label}
          </span>
        </Link>
      )}
    </>
  );
};
