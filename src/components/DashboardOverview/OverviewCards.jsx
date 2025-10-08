import MatchPlayedIconSVG from "@/assets/SVG/MatchPlayedIconSVG";
import ReferalEarningIconSVG from "@/assets/SVG/ReferalEarningIconSVG";
import TotalEarningIconSVG from "@/assets/SVG/TotalEarningIconSVG";
import WalletBalanceIconSVG from "@/assets/SVG/WalletBalanceIconSVG";
import React from "react";

export default function OverviewCards() {
  // Card Data
  const CardDataList = [
    {
      title: "Wallet Balance",
      icon: <WalletBalanceIconSVG />,
      amount: "$720",
    },
    {
      title: "Matches Played",
      icon: <MatchPlayedIconSVG />,
      amount: "120",
    },
    {
      title: "Total Earnings",
      icon: <TotalEarningIconSVG />,
      amount: "$1,250.00",
    },
    {
      title: "Referral Earnings",
      icon: <ReferalEarningIconSVG />,
      amount: "$186.25",
    },
  ];

  return (
    <section className="w-full grid grid-cols-4 gap-5 mt-8">
      {CardDataList?.map((card) => (
        <div className="w-full p-5 rounded-2xl navlink-active group hover:shadow-[0px_0px_6px_0px_rgba(122,52,219,1.00)] duration-300 gradient-border">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-lg font-semibold font-exo">
              {card?.title}
            </h3>

            <div>
              <div className="size-10 border border-white/40 backdrop-blur-[10px] flex items-center justify-center rounded-xl">
                <div className="size-6">{card?.icon}</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-white text-3xl font-semibold font-exo">
              {card?.amount}
            </h4>
          </div>
        </div>
      ))}
    </section>
  );
}
