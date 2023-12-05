"use client";

import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders(${data?.length})`}
        description="Manage Orders for your store"
      />

      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrderClient;
