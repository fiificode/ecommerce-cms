"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BillboardColumn } from "./columns";
import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";

interface CellActionsProps {
  data: BillboardColumn;
}

export const CellAction: React.FC<CellActionsProps> = ({ data }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="w-8 h-8 p-0">
          <span className="sr-only">Open</span>
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Copy className="mr-2 w-4 h-4" />
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit className="mr-2 w-4 h-4" />
          Update
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className="mr-2 w-4 h-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
