"use client";

import { useContext, useEffect } from "react";
import { DialogContext } from "@/context/DialogContext.js";

const DialogBody = ({ children }) => {
    const { isDialogOpen, toggleDialog } = useContext(DialogContext);
    // Close dialog when clicking outside of it
    const handleOutsideClick = (e) => {
        if (e.target.id === "dialogBackdrop") {
            toggleDialog();
        }
    };

    useEffect(() => {
        if (isDialogOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isDialogOpen]);

    if (!isDialogOpen) return null;

    return (
        <div
            id="dialogBackdrop"
            className="fixed inset-0 z-50 overflow-auto bg-gray-600 bg-opacity-50 flex transition-opacity duration-300"
            onClick={handleOutsideClick}>
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg transition-transform duration-300 transform-gpu scale-95  group-hover:scale-100 group-hover:opacity-100">
                <button
                    className="absolute top-4 right-4 text-lg font-semibold"
                    onClick={toggleDialog}>
                    &times; {/* This is a simple 'X' close button */}
                </button>
                {children}
            </div>
        </div>
    );
};

export default DialogBody;
