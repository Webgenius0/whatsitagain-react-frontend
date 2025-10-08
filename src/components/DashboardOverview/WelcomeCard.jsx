import CreateIconSVG from "@/assets/SVG/CreateIconSVG";
import FireIconSVG from "@/assets/SVG/FireIconSVG";
import GamingIconSVG from "@/assets/SVG/GamingIconSVG";
import InviteIconSVG from "@/assets/SVG/InviteIconSVG";
import React from "react";
import { Link } from "react-router-dom";
// import WelcomeCardBg from "@/assets/images/welcome-card-bg.png";

export default function WelcomeCard() {
  return (
    <section className="w-full welcome-card-bg pt-20 pb-12 px-10 rounded-3xl shadow-[0px_0px_16px_0px_rgba(122,52,219,1.00)] relative">
      <div>
        <h1 className="text-white text-3xl font-medium font-orbitron">
          Welcome Back, Alex!
        </h1>
        <h4 className="text-white text-xl font-medium font-exo mt-5">
          Ready to dominate the competition? Your riot stats are looking strong!
        </h4>

        <div className="flex items-center gap-5 mt-11">
          <div className="flex items-center gap-2 p-3 rounded-2xl border border-white/40 backdrop-blur-[10px] bg-black/20">
            <GamingIconSVG />{" "}
            <p className="text-white text-2xl font-medium font-exo">
              Win Streak 7
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-2xl border border-white/40 backdrop-blur-[10px] bg-black/20">
            <FireIconSVG />{" "}
            <p className="text-white text-2xl font-medium font-exo">
              Rank: Diamond II
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-5">
        <Link
          to={"#"}
          className="inline-flex items-center gap-1.5 bg-white px-[18px] py-3 rounded-full text-primary text-base font-medium font-orbitron hover:opacity-70 duration-300"
        >
          <span>
            <InviteIconSVG />
          </span>
          Invite Friends
        </Link>

        <Link
          to={"#"}
          className="inline-flex items-center gap-1.5 bg-[#FFEA00] px-[18px] py-3 rounded-full text-black text-base font-medium font-orbitron hover:opacity-70 duration-300"
        >
          <span>
            <CreateIconSVG />
          </span>
          Create Match
        </Link>
      </div>
    </section>
  );
}
