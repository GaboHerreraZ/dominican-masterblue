import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <nav className="bg-gray-800 w-64 px-4 py-8">
        {/* Navigation content goes here */}
      </nav>
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default AdminLayout;
