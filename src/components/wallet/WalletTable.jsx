import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
//   ColumnDef,
  flexRender,
} from '@tanstack/react-table';

export default function WalletTable() {

    const data = useMemo(
    () => [
      {
        date: 'Aug 14',
        type: 'Deposit',
        description: 'Deposit - Credit Card Deposit',
        amount: '$100.00',
        status: 'Completed',
      },
      {
        date: 'Aug 13',
        type: 'Bet',
        description: 'Bet - Sy5 Ranked - Team Alpha vs Team Beta',
        amount: '-$50.00',
        status: 'Went bet',
      },
      {
        date: 'Aug 14',
        type: 'Bet',
        description: 'Bet - Bet Winnings - Team Alpha Victory',
        amount: '-$75.00',
        status: 'Lose',
      },
      {
        date: 'Aug 13',
        type: 'Withdrawal',
        description: 'Withdrawal - Sy5 Ranked - Team Alpha vs Team Beta',
        amount: '-$200.00',
        status: 'Processing',
      },
      {
        date: 'Aug 14',
        type: 'Deposit',
        description: 'Deposit - Credit Card Deposit',
        amount: '$100.00',
        status: 'Completed',
      },
    ],
    []
  );

  // Define columns
  const columns = useMemo(
    () => [
      {
        accessorKey: 'date',
        header: 'DATE',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'type',
        header: 'Type',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'description',
        header: 'DESCRIPTION',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'amount',
        header: 'AMOUNT',
        cell: (info) => {
          const amount = info.getValue() ;
          const isNegative = amount.startsWith('-');
          return (
            <span className={isNegative ? 'text-[#FD728D]' : 'text-[#FFD700]'}>
              {amount}
            </span>
          );
        },
      },
      {
        accessorKey: 'status',
        header: 'STATUS',
        cell: (info) => {
          const status = info.getValue() ;
          const getStatusColor = (status) => {
            switch (status.toLowerCase()) {
              case 'completed':
                return 'text-green-600';
              case 'processing':
                return 'text-yellow-600';
              case 'lose':
                return 'text-red-600';
              case 'went bet':
                return 'text-blue-600';
              default:
                return 'text-gray-600';
            }
          };
          return <span className={`${getStatusColor(status)} py-2 px-1 rounded-full`}>{status}</span>;
        },
      },
    ],
    []
  );

  // Initialize the table
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });


//   const { documentReview, isDocumentReviewPending, isDocumentReviewLoading } =
//     useDocumentReview();
//   const [sorting, setSorting] = useState([]);
//   const [columnFilters, setColumnFilters] = useState([]);
//   const [columnVisibility, setColumnVisibility] = useState({});
//   const [rowSelection, setRowSelection] = useState({});

//   const table = useReactTable({
//     data: documentReview,
//     columns,
//     initialState: {
//       pagination: {
//         pageSize: 5,
//       },
//     },

    // onSortingChange: setSorting,
    // onColumnFiltersChange: setColumnFilters,
    // getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    // getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    // onColumnVisibilityChange: setColumnVisibility,
    // onRowSelectionChange: setRowSelection,
    // state: {
    //   sorting,
    //   columnFilters,
    //   columnVisibility,
    //   rowSelection,
    // },
//   });

  return (
    <div className=" rounded-lg shadow-sm">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className='bg-black/20'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="text-[#A0A0A0]">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-left py-3 px-4 text-sm font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="odd:bg-white/10 even:bg-black/10">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-4 px-4 text-[16px] leading-6 font-exo text-[#FFF]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-between mt-4 px-4">
        <div className="text-sm text-gray-600">
          Showing {data.length} of {data.length} entries
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
}
