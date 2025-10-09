import React, { useState } from "react";
import DepositTab from "./walletTabComponents/DepositTab";
import WithDrawTab from "./walletTabComponents/WithDrawTab";
import TransactionTab from "./walletTabComponents/TransactionTab";

const TabData = [
  { id: 0, data: "Deposit" },
  { id: 1, data: "Withdraw" },
  { id: 2, data: "Transaction" },
];

export default function WalletTab() {
  // State
  const [activeTab, setActiveTab] = useState(0);

  // handler
  const handleOnTabChange = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <div className="border-b border-b-[#637381] flex gap-[20px] items-center">
        {TabData.map((tab) => (
          <h3
            key={tab.id}
            onClick={() => handleOnTabChange(tab.id)}
            className={`text-[#F9FAFB] text-[20px] font-semibold leading-[26px] px-[30px] w-max py-5 relative cursor-pointer
              ${
                activeTab === tab.id
                  ? 'after:absolute after:content-[""] after:w-full after:h-[3px] nr-customBorder after:bottom-[-2px] after:left-0'
                  : ""
              }`}
          >
            {tab.data}
          </h3>
        ))}
      </div>

      {/* Example tab content */}
      <div className="mt-6 text-[#F9FAFB]">
        {activeTab === 0 && <DepositTab />}

        {activeTab === 1 && <WithDrawTab />}

        {activeTab === 2 && <TransactionTab />}
      </div>
    </div>
  );
}
