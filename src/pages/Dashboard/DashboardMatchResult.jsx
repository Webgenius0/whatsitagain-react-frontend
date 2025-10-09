import GradientSwardIconSVG from "@/assets/SVG/GradientSwardIconSVG";
import TrophyIconSVG from "@/assets/SVG/TrophyIconSVG";
import BetResultCard from "@/components/DashboardOverview/BetResultCard";
import DashboardBetSumurry from "@/components/DashboardOverview/DashboardBetSumurry";
import MatchStatisticsData from "@/components/DashboardOverview/MatchStatisticsData";
import PlayerPerformanceList from "@/components/DashboardOverview/PlayerPerformanceList";
import React from "react";

export default function DashboardMatchResult() {
  return (
    <div className="p-8">
      <div className="w-full p-8 bg-black/30 rounded-2xl flex flex-col justify-center gap-7">
        <h2 className="flex items-center justify-center gap-4 text-center text-white text-3xl font-semibold font-exo">
          <div className="w-8">
            <TrophyIconSVG />
          </div>
          Match Complete
        </h2>

        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-2 text-white text-base font-exo">
            <div className="w-5">
              <GradientSwardIconSVG />
            </div>
            Team Alpha - <span className="text-[#FFEA00] text-xl">22</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-white text-base font-exo">
            <div className="w-5">
              <GradientSwardIconSVG />
            </div>
            Team Beta - <span className="text-rose-400 text-xl">18</span>
          </div>
        </div>

        <div className="w-max px-5 py-3 rounded-full gradient-border inline-flex items-center justify-center gap-2 mx-auto text-[#FFEA00] text-base font-semibold font-exo">
          Team Alpha Wins
        </div>
      </div>

      <div className="w-full mt-8 flex gap-8">
        <div className="w-8/12 flex flex-col gap-8">
          <MatchStatisticsData />
          <PlayerPerformanceList />
        </div>

        <div className="w-4/12">
          <BetResultCard />
        </div>
      </div>
    </div>
  );
}
