import WalletCommonBalanceCard from "@/components/wallet/WalletCommonBalanceCard";
import WalletTab from "@/components/wallet/WalletTab";

export default function DashboardWallet() {
  return (
    <div className="p-8">
      <div>
        <h3 className="text-white font-exo text-[20px] leading-[30px]">
          Manage your deposits, withdrawals, and transaction history
        </h3>
        <div className="mt-8">
          <WalletCommonBalanceCard />
        </div>
      </div>
      <div className="mt-8">
        <WalletTab />
      </div>
    </div>
  );
}
