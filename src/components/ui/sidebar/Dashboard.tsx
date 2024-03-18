import { SideBar } from "./Sidebar";
import { TopMenu } from "./TopMenu";

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative">
        <SideBar />
        <TopMenu>{children}</TopMenu>
      </div>
    </>
  );
};
