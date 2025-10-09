import GradientSwardIconSVG from "@/assets/SVG/GradientSwardIconSVG";
import React from "react";
import PlayerImage from "@/assets/images/team-member-1.png";

export default function PlayerPerformanceList() {
  // Player Performance Data
  const PlayerPerformanceData = [
    {
      team: {
        name: "Team Alpha",
        player: [
          {
            playerName: "Dragon Slayer99",
            role: "Top Lane",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
          {
            playerName: "Jungle king",
            role: "Jungle",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
          {
            playerName: "MidlaneMaster",
            role: "Mid Lane",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
          {
            playerName: "Orion365",
            role: "Gold Lane",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
          {
            playerName: "Hayabus19",
            role: "Exp Lane",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
        ],
      },
    },
    {
      team: {
        name: "Team Beta",
        player: [
          {
            playerName: "Toplanemixer",
            role: "Top Lane",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
          {
            playerName: "Shadow Ninja",
            role: "Jungle",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
          {
            playerName: "A I Z E N",
            role: "Mid Lane",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
          {
            playerName: "RealPlayer",
            role: "Gold Lane",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
          {
            playerName: "Uranusking",
            role: "Exp",
            kda: "10/2/6",
            damage: "18.2k dmg",
          },
        ],
      },
    },
  ];

  return (
    <div className="w-full bg-black/30 rounded-2xl p-5">
      <h3 className="text-white text-lg font-semibold font-exo">
        Player Performance
      </h3>

      <div className="w-full grid grid-cols-2 gap-6 my-8">
        {PlayerPerformanceData?.map((item, index) => (
          <div>
            <h3 className="text-white text-lg font-semibold font-exo flex items-center gap-4">
              <div className="w-6">
                <GradientSwardIconSVG />
              </div>

              {item?.team?.name}
            </h3>

            <div className="w-full flex flex-col gap-6 mt-6">
              {item?.team?.player?.map((item, index) => (
                <div
                  className="w-full p-6 bg-black/30 rounded-2xl flex items-center justify-between"
                  key={index}
                >
                  <div className="flex items-center gap-3">
                    <div className="size-[60px] rounded-full">
                      <img
                        src={PlayerImage}
                        alt="Player Image"
                        className="w-full max-w-full rounded-full"
                      />
                    </div>

                    <div>
                      <h5 className="text-white text-base font-semibold font-exo">
                        {item?.playerName}
                      </h5>
                      <h5 className="text-gray-400 text-sm font-semibold font-exo mt-2">
                        {item?.role}
                      </h5>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[#FFEA00] text-base font-semibold font-exo">
                      {item?.kda}
                    </h5>
                    <h5 className="text-gray-400 text-sm font-semibold font-exo mt-2">
                      {item?.damage}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
