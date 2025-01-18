"use client";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import Modal from "./Modal";

const DeleteButton = ({ id }: { id: number }) => {
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <>
      <button onClick={() => setOpenDelete(!openDelete)}>
        <Trash2 className="text-red-500" />
      </button>

      <Modal
        open={openDelete}
        setOpen={setOpenDelete}
        onContinue={() => {
          console.log("Hello");
        }}
        className="min-h-44"
      >
        <h1 className="mt-2 font-medium">
          This change is irreversible. Are you sure you want to delete this item{" "}
          {id}
        </h1>
      </Modal>
    </>
  );
};

export default DeleteButton;
