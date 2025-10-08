import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Avatar from "@/assets/images/avatar.png";
import { Link, useLocation } from "react-router-dom";
import DropdownArrowSVG from "@/assets/SVG/DropdownArrowSVG";

export default function DashboardTopbar() {
  // Getting the page name
  const PageName = useLocation().pathname.split("/").pop();

  return (
    <div className="w-full h-full shadow shadow-[#8F67C7] flex items-center justify-between px-8">
      <div>
        <h2 className="text-white text-3xl font-semibold font-exo capitalize">
          {PageName.split("-").join(" ")}
        </h2>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 cursor-pointer focus:outline-none">
            <div className="size-12 cursor-pointer">
              <img
                src={Avatar}
                alt={"Avatar"}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="text-left">
              <p className="text-base font-semibold leading-none text-white">
                Somor Mk
              </p>
              <p>
                <span className="text-sm font-medium leading-none text-zinc-400 capitalize">
                  Admin
                </span>
              </p>
            </div>

            <div>
              <DropdownArrowSVG />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className={
              "!w-[300px] p-6 bg-[#222222D9]/85 backdrop-blur-[10px] z-999 border-0"
            }
          >
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  to="/dashboard"
                  className="text-zinc-400 text-base font-medium capitalize hover:text-white duration-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-zinc-400 text-base font-medium capitalize hover:text-white duration-300"
                >
                  Show Screen Time
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-zinc-400 text-base font-medium capitalize hover:text-white duration-300"
                >
                  Account Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-zinc-400 text-base font-medium capitalize hover:text-white duration-300"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
