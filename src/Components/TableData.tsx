"use client";
import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { api } from "@/trpc/react";
import { toast } from "sonner";

const TableData = () => {
  const shoppingItems = api.shopping.getAllItems.useQuery();

  if (shoppingItems.isError) {
    toast.error("Something went wrong while fetching data");
    return (
      <div className="m-2 font-semibold text-red-500">
        No Items found in the list
      </div>
    );
  }

  if (shoppingItems.isLoading) {
    toast.error("Something went wrong while fetching data");
    return <div className="m-2 font-semibold text-red-500">Loading</div>;
  }

  if (shoppingItems.isSuccess)
    return (
      <>
        {shoppingItems.data.length === 0 && (
          <div className="m-2 font-semibold text-red-500">
            No Item in the list yet
          </div>
        )}
        {shoppingItems.data.length !== 0 &&
          shoppingItems.data.map((Item, idx) => {
            return (
              <div
                key={idx}
                className="grid grid-cols-4 items-center justify-center"
              >
                <div className="border-2 border-black/40 px-4 py-2">
                  {idx + 1}.
                </div>
                {/* line-through */}
                <div className="col-span-2 cursor-pointer border-2 border-black/40 px-4 py-2 decoration-red-500">
                  {Item.name}
                </div>

                <div className="flex items-center gap-4 border-2 border-black/40 px-4 py-2">
                  <DeleteButton id={Item.id} />

                  <EditButton id={Item.id} />
                </div>
              </div>
            );
          })}
      </>
    );
};

export default TableData;
