"use client";

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
export type Payment = {
  id: string;
  name: string;
  jumlahKaki: string;
  JenisHewan: "pending" | "processing" | "success" | "failed";
  // JenisHewan: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "rowNumber",
    header: "No",
    cell: ({ row }) => {
      return <div className="">{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const status = row.getValue("name") as string;

      return (
        <div
          className={cn(
            `p-1 rounded-md w-max text-xs`,
            status === "pending" && "bg-yellow-500/40",
            status === "Singa" && "bg-green-500/40",
            status === "processing" && "bg-amber-800/40",
            status === "failed" && "bg-red-500/40"
          )}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "jumlahKaki",
    header: "jumlah Kaki",
    cell: ({ row }) => {
      const getData = row.getValue("jumlahKaki") as number;
      console.log(getData, `cuks`);
      return (
        <div className="text-blue-500 hover:underline hover:cursor-pointer">
          {getData}
        </div>
      );
    },
  },
  {
    accessorKey: "JenisHewan",
    header: "Jenis Hewan",
  },
];
