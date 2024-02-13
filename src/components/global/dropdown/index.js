"use client";
import React, { createContext, useState } from "react";
export const DropDownContext = createContext(null);


export const DropDown = ({ children, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropDownContext.Provider value={{ isOpen, toggleOpen }}>
            <div className={` ${className} relative`}>{children}</div>
        </DropDownContext.Provider>
    );
};

export const DropDownHeader = ({ children }) => {
    const { toggleOpen } = React.useContext(DropDownContext);

    return <button onClick={toggleOpen}>{children}</button>;
};

export const DropDownBody = ({ children }) => {
    const { isOpen } = React.useContext(DropDownContext);

    if (!isOpen) return null;

    return <div className="absolute right-0 top-[115%] z-50">{children}</div>;
};
