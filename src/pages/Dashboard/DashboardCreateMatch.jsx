import ArrowBlackIconSVG from "@/assets/SVG/ArrowBlackIconSVG";
import ArrowYelloIconSVG from "@/assets/SVG/ArrowYelloIconSVG";
import CreateNewMatchIconSVG from "@/assets/SVG/CreateNewMatchIconSVG";
import FundWillBeIconSVG from "@/assets/SVG/FundWillBeIconSVG";
import MatchModeInputIconSVG from "@/assets/SVG/MatchModeInputIconSVG";
import MatchTimeInputIconSVG from "@/assets/SVG/MatchTimeInputIconSVG";
import MaxPlayerInputIconSVG from "@/assets/SVG/MaxPlayerInputIconSVG";
import WinningAmountIconSVG from "@/assets/SVG/WinningAmountIconSVG";
import SelectBox from "@/components/Common/SelectBox";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function DashboardCreateMatch() {
  // Common States
  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Match Created Successfully");
    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  return (
    <section className="w-full h-full relative z-1 bg-gradient-to-r from-indigo-950/80 to-indigo-700/80 p-8 flex items-center justify-center">
      <div className="w-full h-auto max-h-full max-w-[1000px] p-[60px] text-center bg-gradient-to-l from-yellow-400/20 to-violet-700/20 rounded-2xl overflow-y-scroll custom-scrollbar">
        <div className="w-full flex items-center justify-center gap-5">
          <div className="w-[30px]">
            <CreateNewMatchIconSVG />
          </div>

          <h2 className="text-white text-3xl font-semibold font-exo">
            Create a New Match
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6 mt-8"
        >
          <div className="w-full text-left flex flex-col gap-3">
            <label className="text-white text-xl font-semibold font-exo">
              Match Title
            </label>

            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Enter Match title"
              className={`h-14 px-6 py-4 bg-black/30 rounded-[20px] text-white text-base font-exo ${
                errors.title ? "border border-red-500" : ""
              }`}
            />
          </div>

          <div className="w-full grid grid-cols-2 gap-6">
            <div className="w-full text-left flex flex-col gap-3">
              <label className="text-white text-xl font-semibold font-exo flex items-center gap-2">
                <div className="w-[20px]">
                  <MatchModeInputIconSVG />
                </div>{" "}
                Match Mode
              </label>

              <SelectBox title={"Select Mode"} selectItems={["Squad", "Duo"]} />
            </div>

            <div className="w-full text-left flex flex-col gap-3">
              <label className="text-white text-xl font-semibold font-exo flex items-center gap-2">
                <div className="w-[20px]">
                  <MaxPlayerInputIconSVG />
                </div>{" "}
                Max Player
              </label>

              <SelectBox title={"Select Mode"} selectItems={["2", "3", "4"]} />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-6">
            <div className="w-full text-left flex flex-col gap-3">
              <label className="text-white text-xl font-semibold font-exo">
                Team A
              </label>

              <input
                {...register("teamA", { required: true })}
                type="text"
                placeholder="Enter team A name"
                className={`h-14 px-6 py-4 bg-black/30 rounded-[20px] text-white text-base font-exo ${
                  errors.teamA ? "border border-red-500" : ""
                }`}
              />
            </div>

            <div className="w-full text-left flex flex-col gap-3">
              <label className="text-white text-xl font-semibold font-exo">
                Team B
              </label>

              <input
                {...register("teamB", { required: true })}
                type="text"
                placeholder="Enter team B name"
                className={`h-14 px-6 py-4 bg-black/30 rounded-[20px] text-white text-base font-exo ${
                  errors.teamB ? "border border-red-500" : ""
                }`}
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-6">
            <div className="w-full text-left flex flex-col gap-3">
              <label className="text-white text-xl font-semibold font-exo flex items-center gap-2">
                <div className="w-[20px]">
                  <WinningAmountIconSVG />
                </div>{" "}
                Winning Amount
              </label>

              <input
                {...register("winningAmount", { required: true })}
                type="text"
                placeholder="1.00-10.00"
                className={`h-14 px-6 py-4 bg-black/30 rounded-[20px] text-white text-base font-exo ${
                  errors.winningAmount ? "border border-red-500" : ""
                }`}
              />
            </div>

            <div className="w-full text-left flex flex-col gap-3">
              <label className="text-white text-xl font-semibold font-exo flex items-center gap-2">
                <div className="w-[20px]">
                  <MatchTimeInputIconSVG />
                </div>{" "}
                Match time
              </label>

              <input
                {...register("matchTime", { required: true })}
                type="text"
                placeholder="1.00-10.00"
                className={`h-14 px-6 py-4 bg-black/30 rounded-[20px] text-white text-base font-exo ${
                  errors.matchTime ? "border border-red-500" : ""
                }`}
              />
            </div>

            <div className="w-full flex items-center gap-3">
              <div className="w-[18px]">
                <FundWillBeIconSVG />
              </div>
              <p className="text-white text-base font-exo">
                Funds will be held until the match completion
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-6">
            <div className="w-full text-left flex flex-col gap-3">
              <label className="text-white text-xl font-semibold font-exo">
                Select requirement
              </label>

              <SelectBox
                title={"Select requirement"}
                selectItems={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
              />
            </div>
          </div>

          <div className="w-full px-7 py-5 bg-black/30 rounded-[20px] flex flex-col gap-3">
            <div
              className="max-w-max px-4 py-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, #FFEA00 0%, #7A34DB 100%)",
              }}
            >
              <p className="text-neutral-800 text-base font-semibold font-exo">
                Total Prize pool $0.00
              </p>
            </div>

            <ul className="w-full flex flex-col justify-start items-start gap-2.5 list-disc list-inside mt-2">
              <li className="text-white text-base font-exo">
                Platform fee (5%) $0.00
              </li>
              <li className="text-white text-base font-exo">
                Winner Recieves $0.00
              </li>
            </ul>
          </div>

          <div className="w-full flex items-center justify-center gap-5">
            <Link
              to="/dashboard"
              className="w-full h-14 px-6 py-4 rounded-full gradient-border text-yellow-300 text-base font-medium font-orbitron cursor-pointer flex items-center justify-center gap-5 group"
            >
              Cancle{" "}
              <div className="w-[14px] group-hover:rotate-45 duration-300">
                <ArrowYelloIconSVG />
              </div>
            </Link>

            <button
              type="submit"
              className="w-full h-14 px-6 py-4 rounded-full text-black text-base font-medium font-orbitron cursor-pointer flex items-center justify-center gap-5 group"
              style={{
                background: "linear-gradient(90deg, #FFEA00 0%, #7A34DB 100%)",
              }}
            >
              Create Match{" "}
              <div className="w-[14px] group-hover:rotate-45 duration-300">
                <ArrowBlackIconSVG />
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
