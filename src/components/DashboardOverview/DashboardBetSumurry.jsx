import CrossIconSVG from "@/assets/SVG/CrossIconSVG";
import ExclemotoryIconSVG from "@/assets/SVG/ExclemotoryIconSVG";
import WalletBalanceIconSVG from "@/assets/SVG/WalletBalanceIconSVG";
import React, { useState } from "react";

export default function DashboardBetSumurry() {
  const [winTeamVisibility, setWinTeamVisibility] = useState(true);
  const [mostKilledVisibility, setMostKilledVisibility] = useState(true);

  return (
    <div className="w-full p-8 bg-black/30 rounded-2xl flex flex-col justify-start items-start gap-2.5">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-white text-xl font-semibold font-exo">
          Bet Summery
        </h3>

        <p className="text-gray-400 text-base font-semibold font-exo">
          2 Selection
        </p>
      </div>

      {winTeamVisibility && (
        <div className="w-full bg-gradient-to-r from-yellow-400/25 to-violet-700/25 rounded-2xl p-8 mt-5 relative">
          <h3 className="text-white text-lg font-medium font-exo">
            Win team - Team Alpha
          </h3>

          <h3 className="text-white text-base font-medium font-exo flex items-center gap-2 mt-2">
            Gold Ranked Showdown
            <div className="size-1.5 rounded-full bg-white"></div>
            Winner
          </h3>

          <h3 className="text-[#FFEA00] text-lg font-medium font-exo mt-5 flex items-center gap-2">
            <div className="w-5">
              <WalletBalanceIconSVG />
            </div>
            Bet - $1.75
          </h3>

          <div
            onClick={() => setWinTeamVisibility(false)}
            className="absolute top-5 right-5 size-5 cursor-pointer"
          >
            <CrossIconSVG />
          </div>
        </div>
      )}

      {mostKilledVisibility && (
        <div className="w-full bg-gradient-to-r from-yellow-400/25 to-violet-700/25 rounded-2xl p-8 mt-5 relative">
          <h3 className="text-white text-lg font-medium font-exo">
            Most Kill - ShadowNinja
          </h3>

          <h3 className="text-white text-base font-medium font-exo flex items-center gap-2 mt-2">
            Gold Ranked Showdown
            <div className="size-1.5 rounded-full bg-white"></div>
            Most kill
          </h3>

          <h3 className="text-[#FFEA00] text-lg font-medium font-exo mt-5 flex items-center gap-2">
            <div className="w-5">
              <WalletBalanceIconSVG />
            </div>
            Bet - $1.75
          </h3>

          <div
            onClick={() => setMostKilledVisibility(false)}
            className="absolute top-5 right-5 size-5 cursor-pointer"
          >
            <CrossIconSVG />
          </div>
        </div>
      )}

      <div className="w-full bg-gradient-to-r from-yellow-400/25 to-violet-700/25 rounded-2xl p-8 mt-5 relative flex flex-col gap-4">
        <h3 className="text-white text-lg font-medium font-exo flex items-center justify-between">
          Total Bet: <span>$2.50</span>
        </h3>

        <h3 className="text-white text-lg font-medium font-exo flex items-center justify-between">
          Platform fee: <span>$5.00</span>
        </h3>

        <div className="w-full h-[1px] bg-white"></div>

        <h3 className="text-white text-lg font-medium font-exo flex items-center justify-between">
          Potential Payout <span>$7.50</span>
        </h3>

        <h3 className="text-[#C4CDD5] text-base font-medium font-exo mt-2 flex items-center gap-2">
          <div className="w-5">
            <ExclemotoryIconSVG />
          </div>
          Platform fee 5%
        </h3>
      </div>
    </div>
  );
}
