import React from "react";
import Logo from "@/assets/images/logo.png";
import { NavLink } from "react-router-dom";
import {
  Home,
  Wallet,
  DollarSign,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

export default function DashboardSidebar() {
  // Sidebar Nav Items
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={20} /> },
    { name: "Wallet", path: "/dashboard/wallet", icon: <Wallet size={20} /> },
    {
      name: "Bet Ledger",
      path: "/dashboard/bet-ledger",
      icon: <DollarSign size={20} />,
    },
    {
      name: "Referral",
      path: "/dashboard/referral",
      icon: <Users size={20} />,
    },
    {
      name: "Leaderboard",
      path: "/dashboard/leaderboard",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="w-full h-full sidebar-gradient flex flex-col gap-10 text-white py-12 border-r border-[#8F67C7]">
      <div className="w-full px-6 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-full h-auto object-contain" />
      </div>

      <div>
        {navItems?.map((item) => (
          <NavLink
            key={item?.path}
            to={item?.path}
            className={({ isActive }) =>
              `w-full h-[60px] flex items-center gap-4 px-10 transition-all duration-200 relative
              ${
                isActive
                  ? "navlink-active text-white font-semibold navlink-active-tag"
                  : "text-purple-300 hover:text-yellow-400"
              }`
            }
            end
          >
            {item?.icon}
            <span className="font-exo">{item?.name}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
