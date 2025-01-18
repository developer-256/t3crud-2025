import React, { Dispatch, ReactNode, SetStateAction } from "react";

const Modal = ({
  children,
  open,
  setOpen,
  onContinue,
  className,
  disabled,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onContinue: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  if (open)
    return (
      <section className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/50 backdrop-blur-sm">
        <div
          className={`flex min-h-64 w-[500px] flex-col rounded-lg border-2 bg-white px-3 py-2.5 shadow-xl ${className}`}
        >
          <div className="w-full flex-1">{children}</div>

          <div className="flex items-center justify-end gap-3">
            <button
              disabled={disabled}
              onClick={() => setOpen(!open)}
              className={`rounded-lg bg-red-500 px-4 py-1.5 text-white shadow-md ${disabled && "opacity-50"}`}
            >
              Cancel
            </button>
            <button
              disabled={disabled}
              onClick={onContinue}
              className={`rounded-lg bg-green-500 px-4 py-1.5 text-white shadow-md ${disabled && "opacity-50"}`}
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    );
};

export default Modal;
