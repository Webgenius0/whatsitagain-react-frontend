import React from "react";

export default function MatchStatisticsData() {
  const MatchResultData = {
    matchDuration: "34:27",
    totalKills: 40,
    teamAlphaKills: 22,
    teamBetaKills: 18,
    winnerTeam: "Alpha",
    mostKillsPlayer: "Dragon Slayer",
    mostKillsCount: 10,
    firstBloodPlayer: "#Shadow Ninja",
    mvpPlayer: "#Dragon Slayer",
  };

  return (
    <div className="w-full bg-black/30 rounded-2xl p-5">
      <h3 className="text-white text-lg font-semibold font-exo">
        Match Statistics
      </h3>

      <div className="w-full grid grid-cols-4 gap-6 my-8">
        <div className="w-full text-center">
          <h5 className="font-semibold self-stretch justify-center text-neutral-400 text-lg font-exo">
            Match Duration
          </h5>
          <h3 className="text-white text-lg font-exo mt-2">
            {MatchResultData.matchDuration}
          </h3>
        </div>

        <div className="w-full text-center">
          <h5 className="font-semibold self-stretch justify-center text-neutral-400 text-lg font-exo">
            Total Kills
          </h5>
          <h3 className="text-white text-lg font-exo mt-2">
            {MatchResultData.totalKills}
          </h3>
        </div>

        <div className="w-full text-center">
          <h5 className="font-semibold self-stretch justify-center text-neutral-400 text-lg font-exo">
            Team Alpha kills
          </h5>
          <h3 className="text-white text-lg font-exo mt-2">
            {MatchResultData.teamAlphaKills}
          </h3>
        </div>

        <div className="w-full text-center">
          <h5 className="font-semibold self-stretch justify-center text-neutral-400 text-lg font-exo">
            Team Beta kills
          </h5>
          <h3 className="text-white text-lg font-exo mt-2">
            {MatchResultData.teamBetaKills}
          </h3>
        </div>

        <div className="w-full text-center">
          <h5 className="font-semibold self-stretch justify-center text-neutral-400 text-lg font-exo">
            Most kill
          </h5>
          <h3 className="text-white text-lg font-exo mt-2">
            {MatchResultData.mostKillsPlayer} - {MatchResultData.mostKillsCount}
          </h3>
        </div>

        <div className="w-full text-center">
          <h5 className="font-semibold self-stretch justify-center text-neutral-400 text-lg font-exo">
            Winner team
          </h5>
          <h3 className="text-green-500 text-lg font-exo mt-2">
            {MatchResultData.winnerTeam}
          </h3>
        </div>

        <div className="w-full text-center">
          <h5 className="font-semibold self-stretch justify-center text-neutral-400 text-lg font-exo">
            1st blood
          </h5>
          <h3 className="text-white text-lg font-exo mt-2">
            {MatchResultData.firstBloodPlayer}
          </h3>
        </div>

        <div className="w-full text-center">
          <h5 className="font-semibold self-stretch justify-center text-neutral-400 text-lg font-exo">
            MVP
          </h5>
          <h3 className="text-yellow-500 text-lg font-exo mt-2">
            {MatchResultData.mvpPlayer}
          </h3>
        </div>
      </div>
    </div>
  );
}
