"use client";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { Edit } from "lucide-react";
import { api } from "@/trpc/react";
import { toast } from "sonner";

const EditButton = ({ id }: { id: number }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [input, setInput] = useState("");
  const getName = api.shopping.getItemByID.useQuery({ id: id });
  const updateName = api.shopping.updateItem.useMutation();
  const utils = api.useUtils();

  if (getName.isError) {
    toast.error(getName.error.message || "Something went wrong while fetching");
    setOpenEdit(false);
  }

  useEffect(() => {
    const setInputWithApiValue = () => {
      if (getName.data) {
        setInput(getName.data.name);
      }
    };
    setInputWithApiValue();
  }, [getName.data]);

  return (
    <>
      <button onClick={() => setOpenEdit(!openEdit)}>
        <Edit className="text-green-700" />
      </button>

      <Modal
        open={openEdit}
        setOpen={setOpenEdit}
        onContinue={() => {
          updateName.mutate(
            { id: id, name: input },
            {
              onSuccess: (data) => {
                toast.success("Item updated successfully");
                utils.shopping.getAllItems.invalidate();
                setInput("");
                setOpenEdit(false);
              },
              onError: (error) => {
                toast.error(
                  error.message ||
                    "Something went wrong while updating the name of item",
                );
              },
            },
          );
        }}
        className="min-h-40"
        disabled={updateName.isPending}
      >
        <div className="mt-2">
          <h1 className="text-lg font-semibold">Edit item {id} of the list:</h1>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="edit item of list"
            className="mt-2 w-full rounded-lg border-2 border-gray-400 px-2 py-2"
          />
        </div>
      </Modal>
    </>
  );
};

export default EditButton;
