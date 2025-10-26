import React from "react";
import UserSvg from "@/assets/SVG/UserSvg";
import StarSvg from "@/assets/SVG/StarSvg";
import CopySvg from "@/assets/SVG/CopySvg";
import ShareSvg from "@/assets/SVG/ShareSvg";

const referralData = [
  {
    title: "Invited",
    value: 8,
    unit: "Users",
    icon: <UserSvg />,
  },
  {
    title: "Earned Commission",
    value: 120,
    currency: "USD",
    icon: <StarSvg />,
  },
];

const referralProgram = {
  title: "Referral Program",
  description: "Refer code to your friend and earn commission",
  referralCode: "H9X1234",
  actions: [
    { label: "Copy Link", type: "copy" },
    { label: "Share", type: "share" },
  ],
};

export default function DashboardReferralProgram() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[820px] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {referralData?.map((data, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-r from-[#FFD700]/40 to-[#7A34DB]/30 rounded-2xl text-white flex justify-between"
            >
              <div className="flex flex-col gap-6">
                <p className="text-sm font-medium">{data?.title}</p>
                <p className="text-[#FFD700] text-2xl font-semibold">
                  {data?.value} {data?.unit}
                </p>
              </div>

              <div>
                <div className="bg-[#000]/30 p-2 rounded-[8px] w-fit">
                  <p className="w-6 h-6">{data?.icon}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 text-white bg-gradient-to-r from-[#FFD700]/40 to-[#7A34DB]/30 border border-t-[#FFD700] border-l-[#FFD700] border-b-[#7A34DB] border-r-[#7A34DB] rounded-2xl">
          <p className="text-[32px] font-semibold leading-[38px] ">
            Referral Program 🎁
          </p>
          <p className="text-base leading-6 mt-2">
            Refer code to your friend and earn commission
          </p>

          <div className="mt-6 ">
            <p className="text-lg font-medium leading-7">Referral Code</p>
            <div className="p-4 rounded-2xl bg-black/30 my-4 flex items-center w-full justify-between">
              <p className="">{referralProgram?.referralCode}</p>
              <button className="cursor-pointer p-2 border border-transparent rounded-full hover:border-[#ffd700] duration-300">
                <p className="w-5 h-5">
                  <CopySvg />
                </p>
              </button>
            </div>

            <div className="mt-9 flex items-center gap-6 mb-3">
              <button
                type="button"
                className="w-full border border-[#FFD700] rounded-full p-4 flex items-center gap-3 justify-center cursor-pointer hover:bg-gradient-to-r from-[#FFD700]/40 to-[#7A34DB]/30 duration-300 ease-in-out"
              >
                <p className="w-4 h-4">
                  <CopySvg />
                </p>
                <p>Copy Link</p>
              </button>

              <button
                type="button"
                className="w-full border-[#7A34DB] cursor-pointer border hover:border-[#FFD700] rounded-full p-4 flex items-center gap-3 justify-center bg-gradient-to-r from-[#FFD700] to-[#7A34DB] duration-300 ease-in-out text-black"
              >
                <p className="w-4 h-4">
                  <ShareSvg />
                </p>
                <p>Share</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
