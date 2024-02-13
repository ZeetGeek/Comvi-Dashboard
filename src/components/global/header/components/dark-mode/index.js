"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";

// components
import IconButton from "@/components/global/theme-buttons/icon-button";

// images
import sunIcon from "@/images/components/header/icons/sun.svg";
import moonIcon from "@/images/components/header/icons/moon.svg";



function DarkMode() {
    // dark mode logic
   
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(isDarkMode);
        document.body.classList.toggle("dark", isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode);
        document.body.classList.toggle("dark", newDarkMode);
    };

    return (
        <IconButton onClick={toggleDarkMode}>
            <Image
                src={darkMode ? moonIcon : sunIcon}
                height={24}
                width={24}
                alt={darkMode ? "Moon Icon" : " Sun Icon"}
                className="filter-light-green"
            />
        </IconButton>
    );
}

export default DarkMode;
