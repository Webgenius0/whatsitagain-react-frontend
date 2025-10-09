import WalletTable from "../WalletTable";

export default function TransactionTab() {
  return (
    <div>
      <div className="py-[24px] bg-black/10 border-b border-b-[#222E48]">
        <h3 className="text-center text-[20px] font-semibold leading-[26px] font-exo">
          Recent Transaction
        </h3>
      </div>
      <div>
        <WalletTable />
      </div>
    </div>
  );
}
