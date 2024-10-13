"use client";
import * as React from "react";
import { useState } from "react";
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
import { Trash2, Pencil } from 'lucide-react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";



import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


// Sample data
const data = [
    {
        id: "a1b2c3d4",
        uploadedby: "Emily Johnson",
        UploadDate: "2024-09-10 ",
        FileName: "Business_Plan.pdf",
        action: "01/01",
    },
    {
        id: "b2c3d4e5",
        uploadedby: "Sophia Brown",
        UploadDate: "2024-09-10 ",
        FileName: "Seed Funding",
        action: "15/02",
    },
    {
        id: "c3d4e5f6",
        uploadedby: "Michael Smith",
        UploadDate: "2024-09-10 ",
        FileName: "Business_Plan.pdf",
        action: "22/03",
    },
    {
        id: "d4e5f6g7",
        uploadedby: "Emily Johnson",
        UploadDate: "2024-09-10",
        FileName: "Marketing_Strategy.pdf",
        action: "10/04",
    },
    {
        id: "e5f6g7h8",
        uploadedby: "Jessica White",
        UploadDate: "2024-09-10",
        FileName: "Technical_Documentation.pdf",
        action: "18/05",
    },
    {
        id: "f6g7h8i9",
        uploadedby: "adamm mistry",
        UploadDate: "2024-08-20",
        FileName: "Development_Roadmap.pdf",
        action: "03/06",
    },
    {
        id: "g7h8i9j0",
        uploadedby: "Emily Johnson",
        UploadDate: "2024-02-1",
        FileName: "Partnership_Proposal.pdf",
        action: "20/07",
    },

];



export const columns = [


    {
        accessorKey: "FileName",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="  text-left  p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
            >
                FileName
                <ArrowUpDown className="ml-3 h-4 w-4 text-[#696969]" />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase ">{row.getValue("FileName")}</div>,
    },

    {
        accessorKey: "UploadDate",
        header: ({ column }) => (
            <Button
                variant="ghost"

                className="  text-left  p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
            >
                Upload Date

            </Button>
        ),
        cell: ({ row }) => <div className="capitalize   ">{row.getValue("UploadDate")}</div>,
    },
    {
        accessorKey: "uploadedby",
        header: ({ column }) => (
            <Button
                variant="ghost"

                className="  text-left  p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
            >
                Uploaded By

            </Button>
        ),
        cell: ({ row }) => <div>{row.getValue("uploadedby")}</div>,
    },


    {
        accessorKey: "action",
        header: ({ column }) => (
            <Button
                variant="ghost"

                className="p-0 text-lg font-bold text-[#1b1b1b] hover:bg-white pb-2"
            >
                Action

            </Button>
        ),
        cell: ({ row }) => (
            <div className="text-left h-8 ml-6 flex gap-2">
                <button onClick={() => handleEdit(row.original.id)}>
                    <Pencil className="h-4 w-4 text-blue-500 hover:text-blue-700" />
                </button>
                <button onClick={() => handleDelete(row.original.id)}>
                    <Trash2  className="h-4 w-4 text-red-500 hover:text-red-700" />
                </button>
            </div>
        ),
        // Sorting function for dates in dd/mm format (remains unchanged)
        sortingFn: (rowA, rowB, columnId) => {
            const [dayA, monthA] = rowA.getValue(columnId).split("/").map(Number);
            const [dayB, monthB] = rowB.getValue(columnId).split("/").map(Number);
            const dateA = new Date(2024, monthA - 1, dayA);
            const dateB = new Date(2024, monthB - 1, dayB);
            return dateA.getTime() - dateB.getTime();
        },
    }


];





export default function filetable() {
    const [opendelete, setopendelete] = useState(false)
    const [selectButton, setSelectButton] = useState(1);
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





        <div className="my-auto ">
            <div className="rounded-lg border  h-[300px] w-[830px] max-sm:w-[250px]  sm:max-md:w-[400px] md:max-xl:w-[500px]  mt-6 mx-auto  overflow-y-scroll custom-scrollbar ">
                <Table className="max-xl:w-[100px]" >
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
                                        <TableCell key={cell.id} className={cell.column.id === "action" ? "text-right" : ""}>
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
        </div>
    )
}


