"use client";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import Modal from "./Modal";
import { api } from "@/trpc/react";
import { toast } from "sonner";

const DeleteButton = ({ id }: { id: number }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const deleteItem = api.shopping.deleteItem.useMutation();
  const utils = api.useUtils();

  return (
    <>
      <button onClick={() => setOpenDelete(!openDelete)}>
        <Trash2 className="text-red-500" />
      </button>

      <Modal
        open={openDelete}
        setOpen={setOpenDelete}
        onContinue={() => {
          deleteItem.mutate(
            { id: id },
            {
              onSuccess: (data) => {
                utils.shopping.getAllItems.invalidate();
                toast.success("Successfully deleted Item");
                setOpenDelete(false);
              },
              onError: (error) => {
                toast.error(
                  error.message || "Something went wrong while deleting item",
                );
                setOpenDelete(false);
              },
            },
          );
        }}
        className="min-h-40"
        disabled={deleteItem.isPending}
      >
        <h1 className="mt-2 font-medium">
          This change is irreversible. Are you sure you want to delete this
          item?
        </h1>
      </Modal>
    </>
  );
};

export default DeleteButton;
