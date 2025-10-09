import CrossIconSVG from "@/assets/SVG/CrossIconSVG";
import WalletBalanceIconSVG from "@/assets/SVG/WalletBalanceIconSVG";
import React, { useState } from "react";

export default function BetResultCard() {
  const [winTeamVisibility, setWinTeamVisibility] = useState(true);
  const [mostKilledVisibility, setMostKilledVisibility] = useState(true);

  return (
    <div className="sticky top-0 w-full p-8 bg-black/30 rounded-2xl flex flex-col justify-start items-start gap-2.5">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-white text-xl font-semibold font-exo">
          Bet Result
        </h3>

        <p className="text-gray-400 text-base font-semibold font-exo">
          2 Selection
        </p>
      </div>

      {winTeamVisibility && (
        <div className="w-full bg-gradient-to-r from-yellow-400/25 to-violet-700/25 rounded-2xl px-8 py-5 mt-5 flex flex-col gap-4 relative">
          <h3 className="text-white text-lg font-medium font-exo flex items-center gap-2 mt-2">
            Gold Ranked Showdown
            <div className="size-1.5 rounded-full bg-white"></div>
            Winner
          </h3>

          <h3 className="text-white text-lg font-medium font-exo flex items-center justify-between">
            Team Alpha <span className="text-[#00FF00]">Win</span>
          </h3>

          <h3 className="text-white text-lg font-medium font-exo flex items-center justify-between">
            Bet - $1.75 <span className="text-[#00FF00]">+$1.75</span>
          </h3>

          <div
            onClick={() => setWinTeamVisibility(false)}
            className="absolute top-5 right-5 size-6 cursor-pointer"
          >
            <CrossIconSVG />
          </div>
        </div>
      )}

      {mostKilledVisibility && (
        <div className="w-full bg-gradient-to-r from-yellow-400/25 to-violet-700/25 rounded-2xl px-8 py-5 mt-5 flex flex-col gap-4 relative">
          <h3 className="text-white text-lg font-medium font-exo flex items-center gap-2 mt-2">
            Gold Ranked Showdown
            <div className="size-1.5 rounded-full bg-white"></div>
            Most Kill
          </h3>

          <h3 className="text-white text-lg font-medium font-exo flex items-center justify-between">
            $DragonSlayer <span className="text-[#FF4A6C]">Loss</span>
          </h3>

          <h3 className="text-white text-lg font-medium font-exo flex items-center justify-between">
            Bet - $2.50 <span className="text-[#FF4A6C]">+$1.75</span>
          </h3>

          <div
            onClick={() => setMostKilledVisibility(false)}
            className="absolute top-5 right-5 size-6 cursor-pointer"
          >
            <CrossIconSVG />
          </div>
        </div>
      )}

      <div className="w-full bg-gradient-to-r from-yellow-400/25 to-violet-700/25 rounded-2xl p-8 mt-5 relative flex flex-col gap-4">
        <h3 className="text-white text-lg font-medium font-exo flex items-center justify-between">
          Net Result{" "}
          <span className="text-[#FFEA00] text-lg font-medium font-exo mt-2 flex items-center gap-2">
            <div className="w-6">
              <WalletBalanceIconSVG />
            </div>
            - $0.75
          </span>
        </h3>
      </div>
    </div>
  );
}
