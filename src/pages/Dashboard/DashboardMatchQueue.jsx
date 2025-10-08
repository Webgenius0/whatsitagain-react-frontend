import React from "react";
import TargetDollerLogo from "@/assets/images/target-dollar.png";
import { Link } from "react-router-dom";

export default function DashboardMatchQueue() {
  return (
    <section className="w-full h-full relative z-1 bg-gradient-to-r from-indigo-950/50 to-indigo-700/50 p-8 flex items-center justify-center">
      <div className="w-full text-center">
        <h1 className="text-white text-6xl font-orbitron mb-6">
          Match Has Been Started
        </h1>

        <h6 className="text-center text-white text-2xl font-exo mb-6">
          Wait for match to finish , you will get the result
        </h6>

        <div className="w-full max-w-[400px] mx-auto mt-10">
          <Link
            to="/dashboard"
            className="w-full inline-block py-4 px-[60px] text-center rounded-full text-black text-base font-medium font-orbitron bg-[linear-gradient(90deg,#FFEA00_0%,#7A34DB_100%)] hover:shadow-[0px_0px_6px_0px_rgba(122,52,219,1.00)] duration-300 cursor-pointer"
          >
            Go back to Dashboard
          </Link>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center -z-1">
        <img src={TargetDollerLogo} alt="" className="size-[500px]" />
      </div>
    </section>
  );
}
