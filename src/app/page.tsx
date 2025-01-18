import React from "react";
import NewButtton from "@/Components/NewButtton";
import TableData from "@/Components/TableData";

const page = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <h1 className="mt-10 text-center text-2xl font-semibold">
        Shopping List
      </h1>

      <div className="mt-10 grid grid-cols-4 items-center justify-center">
        <div className="border-2 border-black/40 bg-black px-4 py-2 text-white">
          Serial Number
        </div>
        <div className="col-span-2 border-2 border-black/40 border-x-white bg-black px-4 py-2 text-white">
          Shopping Item
        </div>
        <div className="border-2 border-black/40 bg-black px-4 py-2 text-white">
          <NewButtton />
        </div>
      </div>

      <TableData />
    </section>
  );
};

export default page;
