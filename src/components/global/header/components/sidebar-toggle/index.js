"use client";

// dependencies
import Image from "next/image";
import { useContext } from "react";

// components
import IconButton from "@/components/global/theme-buttons/icon-button";

// images
import sidebarOpenIcon from "@/images/components/header/icons/open.svg";
import sidebarCloseIcon from "@/images/components/header/icons/close.svg";

// context
import { ActiveContext } from "@/context/ActiveContext.js";

export default function SidebarToggle() {
    const { toggleActive, isActive } = useContext(ActiveContext);
    return (
        <>
            <IconButton onClick={toggleActive}>
                <Image
                    src={isActive ? sidebarOpenIcon : sidebarCloseIcon}
                    height={24}
                    width={21}
                    className="filter-light-green"
                    alt={isActive ? "Sidebar Open Icon" : "Sidebar Close Icon"}
                />
            </IconButton>
        </>
    );
}
