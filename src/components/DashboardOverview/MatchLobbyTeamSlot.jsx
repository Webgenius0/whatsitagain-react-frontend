import React from "react";
import TeamMemberImage from "@/assets/images/team-member-1.png";
import PlayerAddPlusIconSVG from "@/assets/SVG/PlayerAddPlusIconSVG";
import ArrowBlackIconSVG from "@/assets/SVG/ArrowBlackIconSVG";
import { Link } from "react-router-dom";

export default function MatchLobbyTeamSlot() {
  // Dummy Data For Team
  const TeamData = [
    {
      team: {
        name: "Team Alpha",
        players: [
          {
            id: 1,
            username: "ProGamer",
            rank: "Diamond II",
            status: "ready",
            isPlaceholder: false,
          },
          {
            id: 2,
            username: "ProGamer",
            rank: "Diamond II",
            status: "ready",
            isPlaceholder: false,
          },
          {
            id: 3,
            username: "ProGamer",
            rank: "Diamond II",
            status: "ready",
            isPlaceholder: false,
          },
          {
            id: 4,
            username: "Empty",
            rank: null,
            status: "waiting",
            isPlaceholder: true,
          },
          {
            id: 5,
            username: "Empty",
            rank: null,
            status: "waiting",
            isPlaceholder: true,
          },
        ],
        totalPlayers: 3,
        maxPlayers: 5,
        slotsAvailable: 2,
      },
    },
    {
      team: {
        name: "Team Beta",
        players: [
          {
            id: 1,
            username: "ProGamer",
            rank: "Diamond II",
            status: "ready",
            isPlaceholder: false,
          },
          {
            id: 2,
            username: "ProGamer",
            rank: "Diamond II",
            status: "ready",
            isPlaceholder: false,
          },
          {
            id: 3,
            username: "ProGamer",
            rank: null,
            status: "waiting",
            isPlaceholder: true,
          },
          {
            id: 4,
            username: "Empty",
            rank: null,
            status: "waiting",
            isPlaceholder: true,
          },
          {
            id: 5,
            username: "Empty",
            rank: null,
            status: "waiting",
            isPlaceholder: true,
          },
        ],
        totalPlayers: 3,
        maxPlayers: 5,
        slotsAvailable: 2,
      },
    },
  ];

  return (
    <section className="w-full mt-10">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-white text-2xl font-semibold font-exo">
          Match Lobby Team Slot
        </h2>
        <h2 className="text-white text-2xl font-semibold font-exo">5 v 5</h2>
      </div>

      {TeamData?.map((team, index) => (
        <div
          className="w-full mt-6 p-8 bg-black/30 rounded-2xl inline-flex flex-col justify-start items-start gap-2.5"
          key={index}
        >
          <div className="w-full flex items-center justify-between">
            <h2 className="text-white text-2xl font-semibold font-exo">
              {team?.team?.name}
            </h2>
            <div>
              <p className="text-white text-sm font-medium font-exo gradient-border px-6 py-2">
                {team?.team?.slotsAvailable}/{team?.team?.maxPlayers} Slots
                filled
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-5 gap-[50px] mt-8">
            {team?.team?.players?.map((player, index) => (
              <>
                {player?.status == "ready" ? (
                  <div
                    className="w-full p-5 rounded-2xl bg-indigo-950 group hover:shadow-[0px_0px_6px_0px_rgba(122,52,219,1.00)] duration-300 shadow-[0px_0px_4px_0px_rgba(103,20,219,1.00)] text-center"
                    key={index}
                  >
                    <div className="size-20 mx-auto">
                      <img
                        src={TeamMemberImage}
                        alt="Team Member Image"
                        className="rounded-full"
                      />
                    </div>

                    <div>
                      <p className="text-white text-sm font-medium font-exo mt-5">
                        {player?.username}
                      </p>
                      <p className="text-yellow-400 text-sm font-medium font-exo">
                        {player?.rank}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    className="w-full p-5 rounded-2xl bg-[#443B67] group hover:shadow-[0px_0px_6px_0px_rgba(122,52,219,1.00)] duration-300 text-center"
                    key={index}
                  >
                    <div className="size-20 bg-[#6A6675] mx-auto rounded-full flex items-center justify-center cursor-pointer">
                      <div className="size-8">
                        <PlayerAddPlusIconSVG />
                      </div>
                    </div>

                    <div>
                      <p className="text-white text-sm font-medium font-exo mt-5">
                        Waiting for player
                      </p>
                      <p className="text-yellow-400 text-sm font-medium font-exo">
                        Empty
                      </p>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      ))}

      <div className="w-full flex items-center justify-end mt-10">
        <Link
          to="/dashboard/bet"
          className="w-full max-w-[350px] text-black text-2xl font-bold font-orbitron flex items-center justify-center gap-3 py-2 px-5 rounded-full text-center cursor-pointer group"
          style={{
            background: "linear-gradient(90deg, #FFEA00 0%, #7A34DB 100%)",
          }}
        >
          Bet Now{" "}
          <div className="size-5 group-hover:rotate-45 duration-300">
            <ArrowBlackIconSVG />
          </div>
        </Link>
      </div>
    </section>
  );
}
