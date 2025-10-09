import BackButtonIconSVG from "@/assets/SVG/BackButtonIconSVG";
import RankedSquadIconSVG from "@/assets/SVG/RankedSquadIconSVG";
import WalletBalanceIconSVG from "@/assets/SVG/WalletBalanceIconSVG";
import DashboardBetSumurry from "@/components/DashboardOverview/DashboardBetSumurry";
import DashboardBettingOptions from "@/components/DashboardOverview/DashboardBettingOptions";
import React from "react";

export default function DashboardBet() {
  return (
    <div className="p-8">
      <div className="w-full">
        <div onClick={() => history.back()} className="w-[30px] cursor-pointer">
          <BackButtonIconSVG />
        </div>
      </div>

      <div className="w-full flex items-start gap-8 mt-10">
        {/* Left Part */}
        <div className="w-9/12 flex flex-col gap-8">
          <div className="p-8 bg-black/30 rounded-2xl flex items-center justify-between gap-2.5">
            <div className="">
              <h3 className="text-white text-3xl font-semibold font-exo">
                Place Your Bet
              </h3>
              <h5 className="text-white text-base font-exo mt-2">
                Room #101 – Gold Ranked Showdown
              </h5>
            </div>

            <div className="text-[#FFEA00] px-5 py-2 rounded-full gradient-border">
              Bet closes in 2m 15s
            </div>
          </div>

          <div className="p-8 bg-black/30 rounded-2xl flex items-center justify-between gap-2.5">
            <div className="">
              <h3 className="text-[#FFEA00] text-base font-semibold font-exo">
                Platform fee $5.00 dollar
              </h3>
              <h5 className="text-white text-base font-exo mt-2 flex items-center gap-2">
                <div className="w-[24px]">
                  <RankedSquadIconSVG />
                </div>
                Team Alpha vs Team Beta
              </h5>
            </div>

            <div className="text-green-500 px-5 py-2 rounded-full gradient-border flex items-center gap-2">
              <div className="w-[24px]">
                <WalletBalanceIconSVG />
              </div>
              Winner gets: $19.00
            </div>
          </div>

          <DashboardBettingOptions />
        </div>

        {/* Right Part */}
        <div className="sticky top-0 w-3/12 p-8 bg-black/30 rounded-2xl flex flex-col justify-start items-start gap-2.5">
          <DashboardBetSumurry />
        </div>
      </div>
    </div>
  );
}
