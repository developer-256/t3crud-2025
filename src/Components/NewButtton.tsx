"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { PlusCircle } from "lucide-react";

const NewButtton = () => {
  const [openNew, setOpenNew] = useState(false);

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
          console.log("Hello");
        }}
        className="min-h-44"
      >
        <div className="mt-2">
          <h1 className="text-lg font-semibold text-black">
            Add new item in the list:
          </h1>

          <input
            placeholder="add item in list"
            className="mt-2 w-full rounded-lg border-2 border-gray-400 px-2 py-2"
          />
        </div>
      </Modal>
    </>
  );
};

export default NewButtton;
