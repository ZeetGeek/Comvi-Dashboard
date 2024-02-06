"use client"
// context/DialogContext.js
import React, { createContext, useState, useContext } from "react";

export const DialogContext = createContext({
    isDialogOpen: false,
    toggleDialog: () => {},
});

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({ children }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    return (
        <DialogContext.Provider value={{ isDialogOpen, toggleDialog }}>
            {children}
        </DialogContext.Provider>
    );
};
