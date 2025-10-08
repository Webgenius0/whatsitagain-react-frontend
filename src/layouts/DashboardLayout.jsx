import DashboardSidebar from "@/shared/DashboardSidebar";
import DashboardTOpbar from "@/shared/DashboardTopbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <main className="w-full h-screen flex">
      <div className="w-[250px] h-screen">
        <DashboardSidebar />
      </div>

      <div className="w-[calc(100%-250px)] h-screen bg-[#291F51]">
        <div className="w-full h-20">
          <DashboardTOpbar />
        </div>

        <div className="w-full h-[calc(100vh-80px)] overflow-y-scroll custom-scrollbar">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
