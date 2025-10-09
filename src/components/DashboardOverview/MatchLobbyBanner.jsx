import CreateIconSVG from "@/assets/SVG/CreateIconSVG";
import InviteIconSVG from "@/assets/SVG/InviteIconSVG";
import RankedSquadIconSVG from "@/assets/SVG/RankedSquadIconSVG";
import TimeClockIconSVG from "@/assets/SVG/TimeClockIconSVG";
import WalletBalanceIconSVG from "@/assets/SVG/WalletBalanceIconSVG";
import React from "react";
import { Link } from "react-router-dom";

export default function MatchLobbyBanner() {
  return (
    <section className="w-full welcome-card-bg pt-20 pb-12 px-10 rounded-3xl shadow-[0px_0px_16px_0px_rgba(122,52,219,1.00)] relative">
      <div>
        <h1 className="text-white text-3xl font-medium font-orbitron">
          Gold + Ranked Showdown
        </h1>
        <h4 className="text-white text-xl font-medium font-exo mt-5 flex items-center gap-5">
          Rank Requirement
          <div>
            <p className="text-yellow-400 text-sm font-medium font-exo gradient-border px-5 py-1.5">
              Gold +
            </p>
          </div>
        </h4>
        <h6 className="text-white text-base font-medium font-exo mt-5">
          Platform fee $5.00 dollar
        </h6>

        <div className="flex items-center gap-5 mt-11">
          <div className="flex items-center gap-2 p-3 rounded-2xl border border-white/40 backdrop-blur-[10px] bg-black/20">
            <div className="w-[24px]">
              <RankedSquadIconSVG />
            </div>{" "}
            <p className="text-white text-2xl font-medium font-exo">
              Ranked Squad
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-2xl border border-white/40 backdrop-blur-[10px] bg-black/20">
            <div className="w-[24px]">
              <WalletBalanceIconSVG />
            </div>{" "}
            <p className="text-green-500 text-2xl font-medium font-exo">
              Winner gets: $19.00
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-2xl border border-white/40 backdrop-blur-[10px] bg-black/20">
            <div className="w-[22px]">
              <TimeClockIconSVG />
            </div>{" "}
            <p className="text-white text-2xl font-medium font-exo">15 min</p>
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
          to={"/dashboard/create-match"}
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
