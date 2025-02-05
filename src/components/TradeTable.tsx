"use client";
import { Input } from "@/components/ui/input";
import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "@/lib/utils";

export type Trade = {
  orderId: string;
  createdTime: string;
  symbol: string;
  type: "buy" | "sell";
  volume: string;
  pips: string;
  openPrice: string;
  current: string;
  stopLoss: string;
  takeProfit: string;
  commission: string;
  swap: string;
  profit: string;
  action: "open" | "close";
};

const data: Trade[] = [
  {
    orderId: "#2198667",
    createdTime: "21/12/24 10:21:18",
    symbol: "BTC/USD",
    type: "buy",
    volume: "0.1 Lots",
    pips: "$0.01",
    openPrice: "97,310.86",
    current: "97,923.43",
    stopLoss: "Stop Loss",
    takeProfit: "Take Profit",
    commission: "$0.00",
    swap: "$0.00",
    profit: "$61.25",
    action : "close",
  },
  {
    orderId: "#2198667",
    createdTime: "21/12/24 10:21:18",
    symbol: "GBP/USD",
    type: "buy",
    volume: "1 Lots",
    pips: "$10.00",
    openPrice: "1.2644",
    current: "1.26321",
    stopLoss: "Stop Loss",
    takeProfit: "Take Profit",
    commission: "$0.00",
    swap: "$0.00",
    profit: "-$123.00",
    action : "close",
  },
  {
    orderId: "#2198667",
    createdTime: "21/12/24 10:21:18",
    symbol: "EUR/USD",
    type: "sell",
    volume: "1 Lots",
    pips: "$10.00",
    openPrice: "1.05359",
    current: "1.05189",
    stopLoss: "Stop Loss",
    takeProfit: "Take Profit",
    commission: "$0.00",
    swap: "$0.00",
    profit: "$170.00",
    action : "close",
  },
];

export const columns: ColumnDef<Trade>[] = [
  {
    accessorKey: "orderId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order ID
          <FaChevronDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase"> {row.getValue("orderId")}</div>
    ),
  },
  { accessorKey: "createdTime", header: "Created Time" },
  { accessorKey: "symbol", header: "Symbol" },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <FaChevronDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div
          className={cn('flex items-center justify-center rounded-xl py-1 px-2 capitalize',{
            "bg-tableBgGreen text-tableTextGreen": row.getValue("type") === "buy",
            "bg-tableBgRed text-tableTextRed": row.getValue("type") === "sell",
          })}
        >
          {row.getValue("type")}
        </div>
      );
    },
  },
  { accessorKey: "volume", header: "Volume" },
  { accessorKey: "pips", header: "Pips" },
  { accessorKey: "openPrice", header: "Open Price" },
  { accessorKey: "current", header: "Current" },
  { accessorKey: "stopLoss", header: "Stop Loss" },
  { accessorKey: "takeProfit", header: "Take Profit" },
  { accessorKey: "commission", header: "Commission" },
  { accessorKey: "swap", header: "Swap" },
  { accessorKey: "profit", header: "Profit" },
  { accessorKey: "action", header: "Action" },
];

export default function TradeTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <div className="p-2 flex items-center justift-start overflow-hidden">
          <Button className="text-black bg-gray-100">Open Trades(3)</Button>
          <Button className="text-[#838F9E]">Pending Trades</Button>
          <Button className="text-[#838F9E]">Trade history</Button>
          <Input className="w-56 h-8 bg-white" placeholder="Search.." />
        </div>
        <Table className="overflow-hidden">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
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
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex justify-end items-center space-x-4 p-4">
          <p className="text-green">$ 169.5</p>
          <Button className="bg-red">Close All</Button>
        </div>
      </div>
    </div>
  );
}
