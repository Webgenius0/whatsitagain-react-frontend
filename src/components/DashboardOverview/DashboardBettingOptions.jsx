import React from "react";
import SelectBox from "../Common/SelectBox";
import DollarIconSVG from "@/assets/SVG/DollarIconSVG";

export default function DashboardBettingOptions() {
  return (
    <div className="w-full p-8 bg-black/30 rounded-2xl flex flex-col justify-start items-start gap-8">
      <div>
        <h3 className="text-white text-xl font-semibold font-exo">
          Betting Option
        </h3>
      </div>

      <div className="w-full p-6 bg-gradient-to-r from-yellow-400/20 to-violet-700/20 rounded-2xl">
        <h3 className="text-white text-lg font-semibold font-exo mb-3">
          Which team will win the Match?
        </h3>

        <SelectBox title={"Select Team"} selectItems={["Team A", "Team B"]} />

        <div className="w-full flex items-stretch gap-5 mt-5">
          <input
            type="text"
            placeholder="Enter Amount"
            className="w-full py-4 px-6 rounded-full bg-black/30 focus-visible:outline-0 text-white text-base font-exo"
          ></input>

          <div className="w-[200px] py-[18px] px-6 rounded-full bg-gradient-to-r from-yellow-400 to-violet-700 flex items-center justify-center gap-2 text-black text-base font-semibold font-orbitron cursor-pointer hover:text-white duration-300">
            <div className="w-3.5">
              <DollarIconSVG />
            </div>{" "}
            Bet
          </div>
        </div>
      </div>

      <div className="w-full p-6 bg-gradient-to-r from-yellow-400/20 to-violet-700/20 rounded-2xl">
        <h3 className="text-white text-lg font-semibold font-exo mb-3">
          Who will Get the First kill?
        </h3>

        <SelectBox title={"Select Team"} selectItems={["Team A", "Team B"]} />

        <div className="w-full flex items-stretch gap-5 mt-5">
          <input
            type="text"
            placeholder="Enter Amount"
            className="w-full py-4 px-6 rounded-full bg-black/30 focus-visible:outline-0 text-white text-base font-exo"
          ></input>

          <div className="w-[200px] py-[18px] px-6 rounded-full bg-gradient-to-r from-yellow-400 to-violet-700 flex items-center justify-center gap-2 text-black text-base font-semibold font-orbitron cursor-pointer hover:text-white duration-300">
            <div className="w-3.5">
              <DollarIconSVG />
            </div>{" "}
            Bet
          </div>
        </div>
      </div>

      <div className="w-full p-6 bg-gradient-to-r from-yellow-400/20 to-violet-700/20 rounded-2xl">
        <h3 className="text-white text-lg font-semibold font-exo mb-3">
          Who will Get the MVP?
        </h3>

        <SelectBox title={"Select Team"} selectItems={["Team A", "Team B"]} />

        <div className="w-full flex items-stretch gap-5 mt-5">
          <input
            type="text"
            placeholder="Enter Amount"
            className="w-full py-4 px-6 rounded-full bg-black/30 focus-visible:outline-0 text-white text-base font-exo"
          ></input>

          <div className="w-[200px] py-[18px] px-6 rounded-full bg-gradient-to-r from-yellow-400 to-violet-700 flex items-center justify-center gap-2 text-black text-base font-semibold font-orbitron cursor-pointer hover:text-white duration-300">
            <div className="w-3.5">
              <DollarIconSVG />
            </div>{" "}
            Bet
          </div>
        </div>
      </div>

      <div className="w-full p-6 bg-gradient-to-r from-yellow-400/20 to-violet-700/20 rounded-2xl">
        <h3 className="text-white text-lg font-semibold font-exo mb-3">
          Who will Get the Most Kill?
        </h3>

        <SelectBox title={"Select Team"} selectItems={["Team A", "Team B"]} />

        <div className="w-full flex items-stretch gap-5 mt-5">
          <input
            type="text"
            placeholder="Enter Amount"
            className="w-full py-4 px-6 rounded-full bg-black/30 focus-visible:outline-0 text-white text-base font-exo"
          ></input>

          <div className="w-[200px] py-[18px] px-6 rounded-full bg-gradient-to-r from-yellow-400 to-violet-700 flex items-center justify-center gap-2 text-black text-base font-semibold font-orbitron cursor-pointer hover:text-white duration-300">
            <div className="w-3.5">
              <DollarIconSVG />
            </div>{" "}
            Bet
          </div>
        </div>
      </div>
    </div>
  );
}
