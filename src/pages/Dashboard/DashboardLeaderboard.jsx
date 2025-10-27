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

import img from '../../assets/images/player.png'

const leaderboard = [
  {
    rank: 1,
    player: "ProGamer",
    tier: "Diamond II",
    points: 12545,
    competition: 18,
    winrate: "87%",
    image: img,
  },
  {
    rank: 2,
    player: "ProGamer",
    tier: "Diamond II",
    points: 12545,
    competition: 16,
    winrate: "85%",
    image: img,
  },
  {
    rank: 3,
    player: "ProGamer",
    tier: "Diamond II",
    points: 12545,
    competition: 12,
    winrate: "83%",
    image: img,
  },
  {
    rank: 4,
    player: "ProGamer",
    tier: "Diamond II",
    points: 12545,
    competition: 10,
    winrate: "82%",
    image: img,
  },
  {
    rank: 5,
    player: "ProGamer",
    tier: "Diamond II",
    points: 12545,
    competition: 9,
    winrate: "80%",
    image: img, 
  },
];

const columns = [
  {
    accessorKey: "rank",
    header: "Rank",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "player",
    header: "Player",
    cell: (info) => {
      const {player, tier, image} = info.row.original;

      return <div className="flex items-center gap-2">
        <img src={image} alt="" />

        <div>
          <p className="font-semibold">{player}</p>
          <p className="font-semibold text-[#FFEA00]">{tier}</p>
        </div>
      </div>
    },
  },
  {
    accessorKey: "points",
    header: "Points",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "competition",
    header: "competition",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "winrate",
    header: "Winrate",
    cell: (info) => info.getValue(),
  },
];

export default function DashboardLeaderboard() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  });
  const tableInstance = useReactTable({
    columns,
    data: leaderboard,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const totalPage = tableInstance.getPageCount();
  const currentPage = tableInstance.getState().pagination.pageIndex;

  return (
    <div className="p-8 text-white">
      <div>
        <div className="p-6 bg-[#4F3BB5]/20 rounded-t-xl text-white w-full text-center text-xl font-semibold leading-[26px]">
          {" "}
          Track the top competitors and their rankings
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
        <div className="w-full mt-6 text-white">
          {totalPage > 1 && (
            <div className=" w-full flex items-center justify-between">
              <div>
                <p>Showing 3 of 5 entities</p>
              </div>

              <div className="mt-6 w-fit border rounded-md">
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
