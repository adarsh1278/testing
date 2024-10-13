"use client";
import * as React from "react";
import { useState } from "react";
import { Trash2 } from 'lucide-react';
import { Plus } from 'lucide-react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the columns
export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "startupName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
      >
        Startup Name
        <ArrowUpDown className="ml-3 h-4 w-4 text-[#696969]" />
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("startupName")}</div>,
  },
  {
    accessorKey: "addedBy",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-left p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
      >
        Added By
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("addedBy")}</div>,
  },
  {
    accessorKey: "evaluationDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
      >
        Evaluation Date
        <ArrowUpDown className="ml-3 h-4 w-4 text-[#696969]" />
      </Button>
    ),
    cell: ({ row }) => <div className="text-left h-8 ml-6">{row.getValue("evaluationDate")}</div>,
    sortingFn: (rowA, rowB, columnId) => {
      const [dayA, monthA] = rowA.getValue(columnId).split("/").map(Number);
      const [dayB, monthB] = rowB.getValue(columnId).split("/").map(Number);
      const dateA = new Date(2024, monthA - 1, dayA);
      const dateB = new Date(2024, monthB - 1, dayB);
      return dateA.getTime() - dateB.getTime();
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-left p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
      >
        Status
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-left p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
      >
        Action
      </Button>
    ),
    cell: ({ row }) => (
      <Link href={`/program/programs/schemes/${row.original.id}`} className="text-blue-500 underline">
        View 
      </Link>
    ),
  },
];

// DataTable component
export function RevieStartupTable({ data , params }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full p-2 h-full m-0 mt-4 rounded-md border border-[#e5e5e5]">
      <div className="justify-start py-4 flex flex-col">
        <div className="text-2xl font-semibold mr-[6%] mb-2">Review Startups:</div>
        <div className="flex flex-col w-full sm:flex-row sm:justify-start justify-between items-center">
          <Input
            placeholder="Filter startups..."
            value={(table.getColumn("startupName")?.getFilterValue()) ?? ""}
            onChange={(event) =>
              table.getColumn("startupName")?.setFilterValue(event.target.value)
            }
            className="max-w-sm h-[40px] sm:h-[48px]"
          />
          <div className="mt-[10px] sm:mt-0 sm:flex sm:flex-row sm:justify-end w-full">
            <button className="h-[40px] pt-[8px] w-[110px] sm:h-[50px] ml-2 sm:ml-0 mr-5 sm:pt-[13px] hover:bg-[#1E3A8A] hover:text-white border-gray-300 bg-white rounded-2xl drop-shadow-md">
              <div className="w-full h-full flex flex-row justify-evenly px-3">
                <Trash2 />
                <div className="ml-2">Delete</div>
              </div>
            </button>
            <button className="h-[40px] pt-[8px] sm:w-[140px] sm:h-[50px] bg-[#1E3A8A] text-white ml-4 mr-0 sm:mr-5 sm:pt-[13px] border-gray-300 rounded-2xl drop-shadow-md">
              <div className="w-full h-full flex flex-row justify-evenly px-3">
                <Plus className="" />
                <div className="ml-1">Add More</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border h-[450px] overflow-y-scroll custom-scrollbar">
        <Table className="rounded-xl">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className={cell.column.id === "evaluationDate" ? "text-right" : ""}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
