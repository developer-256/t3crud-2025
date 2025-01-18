"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { Edit } from "lucide-react";

const EditButton = ({ id }: { id: number }) => {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <>
      <button onClick={() => setOpenEdit(!openEdit)}>
        <Edit className="text-green-700" />
      </button>
      <Modal
        open={openEdit}
        setOpen={setOpenEdit}
        onContinue={() => {
          console.log("Hello");
        }}
        className="min-h-44"
      >
        <div className="mt-2">
          <h1 className="text-lg font-semibold">Edit item {id} of the list:</h1>

          <input
            placeholder="edit item of list"
            className="mt-2 w-full rounded-lg border-2 border-gray-400 px-2 py-2"
          />
        </div>
      </Modal>
    </>
  );
};

export default EditButton;
