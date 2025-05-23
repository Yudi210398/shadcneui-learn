"use client";

import { getData } from "@/util/data";
import { columns } from "./column";
import { DataTable } from "./data-table";
import { useHttp } from "@/lib/http-hooks";
import { useEffect, useState } from "react";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const PaymentsPage = () => {
  // const data = await getData();
  const [data, setData] = useState([]);
  const { sendReq, errorValidate, pesanVerify, setErrorValidate } = useHttp();

  useEffect(() => {
    // const fetchData = await sendReq("http://localhost:3001/animal/page");

    const fetchData = async () => {
      try {
        const hasil = await sendReq(
          "http://localhost:3001/animal/page?page=1&limit=15"
        );

        setData(hasil || []);
      } catch (err: unknown) {
        console.log(err);
      }
    };
    fetchData();
  }, [sendReq]);
  console.log(data, pesanVerify);
  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
