import ActiveMatchesIconSVG from "@/assets/SVG/ActiveMatchesIconSVG";
import RankedSquadIconSVG from "@/assets/SVG/RankedSquadIconSVG";
import TimeClockIconSVG from "@/assets/SVG/TimeClockIconSVG";
import UserIconSVG from "@/assets/SVG/UserIconSVG";
import WalletBalanceIconSVG from "@/assets/SVG/WalletBalanceIconSVG";
import React from "react";
import { Link } from "react-router-dom";

export default function ActiveMatchesOverview() {
  // Match Data List
  const MatchDataList = [
    {
      matchTitle: "Gold + Ranked Showdown",
      matchSubtitle: "Ranked Squad",
      rankBadge: "Gold +",
      entryFee: 5,
      currency: "$",
      prizePool: 19.0,
      playersCount: "5/10",
      matchDuration: "15 min",
      joinButtonText: "Join Match",
      isFull: false,
    },
    {
      matchTitle: "Gold + Ranked Showdown",
      matchSubtitle: "Ranked Squad",
      rankBadge: "Gold +",
      entryFee: 5,
      currency: "$",
      prizePool: 19.0,
      playersCount: "5/10",
      matchDuration: "15 min",
      joinButtonText: "Join Match",
      isFull: true,
    },
    {
      matchTitle: "Gold + Ranked Showdown",
      matchSubtitle: "Ranked Squad",
      rankBadge: "Gold +",
      entryFee: 5,
      currency: "$",
      prizePool: 19.0,
      playersCount: "5/10",
      matchDuration: "15 min",
      joinButtonText: "Join Match",
      isFull: false,
    },
    {
      matchTitle: "Gold + Ranked Showdown",
      matchSubtitle: "Ranked Squad",
      rankBadge: "Gold +",
      entryFee: 5,
      currency: "$",
      prizePool: 19.0,
      playersCount: "5/10",
      matchDuration: "15 min",
      joinButtonText: "Join Match",
      isFull: true,
    },
    {
      matchTitle: "Gold + Ranked Showdown",
      matchSubtitle: "Ranked Squad",
      rankBadge: "Gold +",
      entryFee: 5,
      currency: "$",
      prizePool: 19.0,
      playersCount: "5/10",
      matchDuration: "15 min",
      joinButtonText: "Join Match",
      isFull: false,
    },
    {
      matchTitle: "Gold + Ranked Showdown",
      matchSubtitle: "Ranked Squad",
      rankBadge: "Gold +",
      entryFee: 5,
      currency: "$",
      prizePool: 19.0,
      playersCount: "5/10",
      matchDuration: "15 min",
      joinButtonText: "Join Match",
      isFull: false,
    },
  ];

  return (
    <section
      className="w-full p-8 rounded-2xl mt-5"
      style={{
        background:
          "linear-gradient(90deg, rgba(255, 234, 0, 0.20) 0%, rgba(122, 52, 219, 0.20) 100%)",
      }}
    >
      <div className="flex items-center gap-3">
        <span>
          <ActiveMatchesIconSVG />
        </span>
        <h1 className="text-white text-xl font-medium font-orbitron">
          Active Matches
        </h1>
      </div>

      <div className="w-full grid grid-cols-3 gap-8 mt-10">
        {MatchDataList?.map((match) => (
          <div className="w-full p-5 bg-black/10 rounded-2xl group hover:shadow-[0px_0px_6px_0px_rgba(122,52,219,1.00)] duration-300 gradient-border flex flex-col gap-6">
            <div className="w-full flex items-center justify-between gap-5">
              <h4 className="text-white text-lg font-semibold font-exo">
                {match?.matchTitle}
              </h4>

              <div>
                {match?.rankBadge && (
                  <p className="text-yellow-400 text-sm font-medium font-exo gradient-border px-5 py-2">
                    {match?.rankBadge}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full flex-col gap-5">
              <div className="w-full flex items-center justify-between gap-5">
                <div className="flex items-center gap-2">
                  <span className="size-6">
                    <WalletBalanceIconSVG />
                  </span>
                  <h4 className="text-yellow-400 text-lg font-medium font-exo">
                    {match?.currency}
                    {match?.entryFee} per player
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="size-5">
                    <UserIconSVG />
                  </span>

                  <h6 className="text-gray-50 text-base font-exo">
                    {match?.playersCount}
                  </h6>
                </div>
              </div>

              <h4 className="text-green-500 text-md font-medium font-exo">
                Winner gets: {match?.currency}
                {match?.prizePool}
              </h4>
            </div>

            <div className="w-full flex items-center justify-between gap-5">
              <div className="flex items-center gap-2">
                <span className="size-4">
                  <RankedSquadIconSVG />
                </span>
                <h4 className="text-white text-md font-medium font-exo">
                  {match?.matchSubtitle}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <span className="size-5">
                  <TimeClockIconSVG />
                </span>

                <h6 className="text-gray-50 text-base font-exo">
                  {match?.matchDuration}
                </h6>
              </div>
            </div>

            <div className="w-full">
              {match?.isFull ? (
                <div className="w-full inline-block py-4 px-[60px] text-center rounded-full bg-neutral-400 text-base font-medium font-orbitron">
                  Match Full
                </div>
              ) : (
                <Link
                  to="/dashboard/match-lobby"
                  className="w-full inline-block py-4 px-[60px] text-center rounded-full text-black text-base font-medium font-orbitron bg-[linear-gradient(90deg,#FFEA00_0%,#7A34DB_100%)] hover:shadow-[0px_0px_6px_0px_rgba(122,52,219,1.00)] duration-300 cursor-pointer"
                >
                  Join Match
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
