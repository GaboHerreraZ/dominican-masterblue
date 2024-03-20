import Link from "next/link";

export const LogIn = ({ label }: { label: string }) => {
  return (
    <Link className="absolute top-0 right-4 py-4 " href="/auth/login">
      <span className="border-[1px] border-gray-200 px-2 rounded hover:bg-black/5  transition-all duration-500">
        {label}
      </span>
    </Link>
  );
};
