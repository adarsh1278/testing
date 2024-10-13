"use client"
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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data
const data = [
    {
      id: "a1b2c3d4",
      description: "Initial funding for Tech Innovators Inc.",
      Addedby: "John Doe",
      activity: "Funding Round 1",
      addedOn: "01/01",
    },
    {
      id: "b2c3d4e5",
      description: "Seed investment for Green Energy Solutions",
      Addedby: "Jane Smith",
      activity: "Seed Funding",
      addedOn: "15/02",
    },
    {
      id: "c3d4e5f6",
      description: "Grant received for HealthTech Labs",
      Addedby: "Emily Johnson",
      activity: "Grant Award",
      addedOn: "22/03",
    },
    {
      id: "d4e5f6g7",
      description: "Series A funding for FinTech Innovations",
      Addedby: "Michael Brown",
      activity: "Series A Funding",
      addedOn: "10/04",
    },
    {
      id: "e5f6g7h8",
      description: "Investment in AI for Agriculture",
      Addedby: "Sarah White",
      activity: "Investment",
      addedOn: "18/05",
    },
    {
      id: "f6g7h8i9",
      description: "Technology grant for EdTech Solutions",
      Addedby: "David Green",
      activity: "Technology Grant",
      addedOn: "03/06",
    },
    {
      id: "g7h8i9j0",
      description: "Accelerator program acceptance for BioTech Ventures",
      Addedby: "Sophia Clark",
      activity: "Accelerator Program",
      addedOn: "20/07",
    },
    {
      id: "h8i9j0k1",
      description: "Investment in renewable energy startup",
      Addedby: "Chris Lewis",
      activity: "Renewable Energy Investment",
      addedOn: "12/08",
    },
    {
      id: "i9j0k1l2",
      description: "Funding for new software platform development",
      Addedby: "Olivia Martinez",
      activity: "Software Development Funding",
      addedOn: "25/09",
    },
    {
      id: "j0k1l2m3",
      description: "Funding for biotech research project",
      Addedby: "Liam Davis",
      activity: "Biotech Research Funding",
      addedOn: "30/10",
    },
    {
      id: "k1l2m3n4",
      description: "Grant for startup ecosystem development",
      Addedby: "Isabella Wilson",
      activity: "Ecosystem Development Grant",
      addedOn: "05/11",
    },
    {
      id: "l2m3n4o5",
      description: "Series B funding for Tech Solutions",
      Addedby: "James Taylor",
      activity: "Series B Funding",
      addedOn: "17/12",
    },
    {
      id: "m3n4o5p6",
      description: "Funding for AI research and development",
      Addedby: "Ava Anderson",
      activity: "AI Research Funding",
      addedOn: "22/01",
    },
    {
      id: "n4o5p6q7",
      description: "Investment in next-gen robotics startup",
      Addedby: "Mia Thomas",
      activity: "Robotics Investment",
      addedOn: "15/02",
    },
  ];

  

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
    accessorKey: "activity",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="  text-left  p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
      >
        Activity
        <ArrowUpDown className="ml-3 h-4 w-4 text-[#696969]" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase ">{row.getValue("activity")}</div>,
  },
  
  {
    accessorKey: "Addedby",
    header: ({ column }) => (
      <Button
        variant="ghost"
        
        className="  text-left  p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
      >
        Addedby
       
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize   ">{row.getValue("Addedby")}</div>,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <Button
        variant="ghost"
        
        className="  text-left  p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
      >
        Description
       
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    accessorKey: "addedOn",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className=" p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
      >
        Added On
        <ArrowUpDown className="ml-3 h-4 w-4  text-[#696969] " />
      </Button>
    ),
    cell: ({ row }) => <div className=" text-left  h-8 ml-6">{row.getValue("addedOn")}</div>,
    // Sorting function for dates in dd/mm format
    sortingFn: (rowA, rowB, columnId) => {
      const [dayA, monthA] = rowA.getValue(columnId).split("/").map(Number);
      const [dayB, monthB] = rowB.getValue(columnId).split("/").map(Number);
      const dateA = new Date(2024, monthA - 1, dayA);
      const dateB = new Date(2024, monthB - 1, dayB);
      return dateA.getTime() - dateB.getTime();
    },
  },
  
];

// DataTable component
export function DataTableDemo() {
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
    <div className="w-full p-2 h-full m-0   mt-4 rounded-md   border border-[#e5e5e5] ">
        
      <div className="  justify-start py-4  flex flex-col ">
        <div className="  text-2xl font-semibold mr-[6%] mb-2">Recent Activities :</div>
        <div className=" flex flex-col w-full sm:flex-row  sm:justify-start    justify-between items-center">
        <Input
          placeholder="Filter activities..."
          value={(table.getColumn("activity")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("activity")?.setFilterValue(event.target.value)
          }
          className="max-w-sm  h-[40px] sm:h-[48px]"
        /> 
        <div className=" mt-[10px]  sm:mt-0  sm:flex sm:flex-row  sm:justify-end w-full  ">
       


           {/* trash button  */}
         <button className=" h-[40px]  pt-[8px] w-[110px] sm:h-[50px] ml-2 sm:ml-0  mr-5  sm:pt-[13px] hover:bg-[#1E3A8A]   hover:text-white  border-gray-300  bg-white  rounded-2xl  drop-shadow-md">
         <div className=" w-full h-full flex flex-row   justify-evenly px-3 ">
           <Trash2/>
           <div className=" ml-2">Delete</div>
         </div>
         </button>
           {/* Addmore  */}
           <button className=" h-[40px] pt-[8px]  sm:w-[140px] sm:h-[50px]       bg-[#1E3A8A]  text-white  ml-4 mr-0 sm:mr-5 sm:pt-[13px] border-gray-300    rounded-2xl  drop-shadow-md">
         <div className=" w-full h-full flex flex-row   justify-evenly px-3">
           <Plus className="  "/>
           <div className=" ml-1  ">Add More</div>
         </div>
         </button>

       
        </div>


        </div>

        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
       {/* Scrollable Table Container */}
       <div className="rounded-lg border    h-[450px] overflow-y-scroll custom-scrollbar">
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
                    <TableCell key={cell.id} className={cell.column.id === "addedOn" ? "text-right" : ""}>
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