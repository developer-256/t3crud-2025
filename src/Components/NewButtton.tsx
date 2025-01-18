"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { PlusCircle } from "lucide-react";
import { api } from "@/trpc/react";
import { toast } from "sonner";

const NewButtton = () => {
  const [openNew, setOpenNew] = useState(false);
  const [input, setInput] = useState("");
  const create = api.shopping.createItem.useMutation();
  const utils = api.useUtils();

  return (
    <>
      <button
        className="flex items-center gap-2 text-yellow-500"
        onClick={() => setOpenNew(!openNew)}
      >
        Add New
        <PlusCircle />
      </button>

      <Modal
        open={openNew}
        setOpen={setOpenNew}
        onContinue={() => {
          create.mutate(
            { name: input },
            {
              onSuccess: (data) => {
                toast.success("New Item successfully created");
                console.log(data);
                setInput("");
                utils.shopping.getAllItems.invalidate();
                setOpenNew(!openNew);
              },
              onError: (error) => {
                toast.error(
                  error.message ||
                    "Something went wrong while creating the item",
                );
                setOpenNew(!openNew);
              },
            },
          );
        }}
        className="min-h-40"
        disabled={create.isPending}
      >
        <div className="mt-2">
          <h1 className="text-lg font-semibold text-black">
            Add new item in the list:
          </h1>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="add item in list"
            className="mt-2 w-full rounded-lg border-2 border-gray-400 px-2 py-2 text-black"
          />
        </div>
      </Modal>
    </>
  );
};

export default NewButtton;
