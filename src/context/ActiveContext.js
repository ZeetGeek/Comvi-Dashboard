"use client";

import React, { createContext, useState } from "react";

export const ActiveContext = createContext({
    isActive: false,
    toggleActive: () => {},
});

export const ActiveProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive((current) => !current);
    };

    return (
        <ActiveContext.Provider value={{ isActive, toggleActive }}>
            {children}
        </ActiveContext.Provider>
    );
};
