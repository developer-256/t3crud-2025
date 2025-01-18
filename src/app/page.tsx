import React from "react";
import { Edit, PlusCircle, Trash2 } from "lucide-react";
import NewButtton from "@/Components/NewButtton";
import DeleteButton from "@/Components/DeleteButton";
import EditButton from "@/Components/EditButton";

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

      {Array.from({ length: 5 }).map((Item, idx) => {
        return (
          <div
            key={idx}
            className="grid grid-cols-4 items-center justify-center"
          >
            <div className="border-2 border-black/40 px-4 py-2">{idx + 1}.</div>
            <div className="col-span-2 cursor-pointer border-2 border-black/40 px-4 py-2 line-through decoration-red-500">
              Shopping Item # {idx + 1}
            </div>
            <div className="flex items-center gap-4 border-2 border-black/40 px-4 py-2">
              <DeleteButton id={idx} />

              <EditButton id={idx} />
            </div>
          </div>
        );
      })}
      {/* <div className="m-2 font-semibold text-red-500">
        No Item in the list yet
      </div> */}
    </section>
  );
};

export default page;
