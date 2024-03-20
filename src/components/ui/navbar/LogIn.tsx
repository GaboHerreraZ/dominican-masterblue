import Link from "next/link";

export const LogIn = ({ label }: { label: string }) => {
  return (
    <Link
      className="hidden md:flex lg:flex  absolute top-3 right-4 py-4 "
      href="/auth/login"
    >
      <span className="border-[1px] border-gold px-2 rounded hover:bg-black/5  transition-all duration-500">
        {label}
      </span>
    </Link>
  );
};
