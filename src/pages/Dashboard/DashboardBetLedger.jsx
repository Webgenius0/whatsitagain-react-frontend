import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";

const matches = [
  {
    date: "Aug 14, 2025",
    match: "Gold Ranked Showdown",
    market: "Match Winner - Team Alpha",
    stake: 25,
    odds: 1.8,
    profitLoss: 20,
    status: "Won Bet",
    color: "green",
  },
  {
    date: "Aug 13, 2025",
    match: "Gold Ranked Showdown",
    market: "Match Winner - Team Alpha",
    stake: 30,
    odds: 2.5,
    profitLoss: -15,
    status: "Lost",
    color: "red",
  },
  {
    date: "Aug 14, 2025",
    match: "Gold Ranked Showdown",
    market: "Match Winner - Team Alpha",
    stake: 25,
    odds: 1.8,
    profitLoss: 20,
    status: "Completed",
    color: "green",
  },
  {
    date: "Aug 13, 2025",
    match: "Gold Ranked Showdown",
    market: "Match Winner - Team Alpha",
    stake: 30,
    odds: 2.5,
    profitLoss: -15,
    status: "Lost",
    color: "red",
  },
  {
    date: "Aug 14, 2025",
    match: "Gold Ranked Showdown",
    market: "Match Winner - Team Alpha",
    stake: 25,
    odds: 1.8,
    profitLoss: 20,
    status: "Completed",
    color: "green",
  },
];

const columns = [
  {
    accessorKey: "date",
    header: "Date",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "match",
    header: "Match",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "market",
    header: "Market",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "stake",
    header: "Stake",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "odds",
    header: "Ods",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "profitLoss",
    header: "Profit/Loss",
    cell: (info) => {
      const { profitLoss, status } = info.row.original;
      return (
        <p
          className={`${
            status.toLowerCase() === "lost"
              ? "text-[#FD728D]"
              : "text-[#FFD700]"
          }`}
        >
          {profitLoss}
        </p>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const status = info.getValue();

      return (
        <p
          className={`text-center w-[120px] rounded-3xl ${
            status.toLowerCase() === "lost"
              ? "bg-[#FF000080]  p-2 text-white"
              : "bg-[#00ff00]/30 p-3 text-[#00ff00]"
          }`}
        >
          {status}
        </p>
      );
    },
  },
];
export default function DashboardBetLedger() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  });
  const tableInstance = useReactTable({
    columns,
    data: matches,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const totalPage = tableInstance.getPageCount();
  const currentPage = tableInstance.getState().pagination.pageIndex;
  const pagePerdata = tableInstance.getRowModel()?.rows;

  return (
    <div className="p-8 text-white">
      <div>
        <div className="p-6 bg-[#4F3BB5]/20 rounded-t-xl text-white w-full text-center text-xl font-semibold leading-[26px]">
          {" "}
          Betting Leadger
        </div>
        <Table>
          <TableHeader>
            {tableInstance?.getHeaderGroups().map((headerGroup, idx) => (
              <TableRow key={idx}>
                {headerGroup?.headers?.map((header, idx) => (
                  <TableHead
                    key={idx}
                    className="w-[100px] text-[#A0A0A0] uppercase"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {tableInstance?.getRowModel().rows?.map((row, idx) => (
              <TableRow key={idx}>
                {row?.getVisibleCells().map((cell, idx) => (
                  <TableCell key={idx} className="font-medium">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* pagination */}
        <div className="w-full mt-6">
          {totalPage > 1 && (
            <div className="flex items-end justify-between">
              <div>
                <p>
                  Showing {pagePerdata?.length} of {matches?.length || "0"}{" "}
                  entities
                </p>
              </div>

              <div className=" w-fit border rounded-md">
                <button
                  type="button"
                  onClick={() => tableInstance.previousPage()}
                  disabled={!tableInstance.getCanPreviousPage()}
                  className="border-r py-2 w-[130px] rounded-l-md cursor-pointer"
                >
                  Previous
                </button>
                {Array.from({ length: totalPage }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`border-x py-2.5 px-4 ${
                      currentPage == idx && "bg-black text-white border"
                    }`}
                  >
                    {idx + 1}
                  </span>
                ))}
                <button
                  type="button"
                  onClick={() => tableInstance.nextPage()}
                  disabled={!tableInstance.getCanNextPage()}
                  className="border-l py-2 w-[130px] rounded-r-md cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
