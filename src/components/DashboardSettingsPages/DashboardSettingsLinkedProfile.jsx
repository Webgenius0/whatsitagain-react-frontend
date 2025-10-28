import ChevronBackSvg from "@/assets/SVG/ChevronBackSvg";
import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/riot.png";

export default function DashboardSettingsLinkedProfile() {
  const navigate = useNavigate();
  return (
    <div className="p-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="py-4 px-3 rounded-full cursor-pointer hover:scale-105 duration-300 mb-5 "
      >
        <p className="w-6 h-4">
          <ChevronBackSvg />
        </p>
      </button>

      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[740px] h-auto p-8 bg-gradient-to-r from-[#FFD700]/40 to-[#7A34DB]/30 rounded-2xl text-white">
          <div>
            <p className="text-xl md:text-2xl lg:text-[32px] font-medium leading-9 mb-1">
              Linked Profile
            </p>
            <p className="text-sm md:text-base text-text mt-1">
              Check your linked account
            </p>
          </div>

          <div className="w-full bg-[#0000004D] p-6 rounded-2xl flex items-center justify-between mt-5">
            <div className="flex gap-3">
              <div className="w-[50px] h-[50px] rounded-full border border-white overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="text-base">
                <p className="font-medium leading-relaxed">Riot Games</p>
                <p className="text-[#FFEA00] leading-relaxed">
                  #AlexMorgan2311
                </p>
              </div>
            </div>

            <button className="w-[120px] bg-gradient-to-r from-[#FFEA00] to-[#7A34DB] border border-[#FFEA00] p-4 text-center rounded-full text-black text-sm font-semibold cursor-pointer hover:to-[#FFEA00] duration-700">
              Connected
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
