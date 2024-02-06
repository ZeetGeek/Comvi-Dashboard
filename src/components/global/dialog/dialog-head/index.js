"use client";
import { useDialog } from "@/context/DialogContext.js";

const DialogHead = ({ children }) => {
    const { toggleDialog } = useDialog();

    return (
        <button
            className="text-lg font-semibold text-primary hover:text-primary-dark"
            onClick={toggleDialog}>
            {children}
        </button>
    );
};

export default DialogHead;
