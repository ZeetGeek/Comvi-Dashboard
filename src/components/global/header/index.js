"use client";

import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import IconButton from "@/components/global/theme-buttons/icon-button";
import { ActiveContext } from "@/context/ActiveContext.js";

import sidebarOpenIcon from "@/images/components/header/icons/open.svg";
import sidebarCloseIcon from "@/images/components/header/icons/close.svg";
import searchIcon from "@/images/components/header/icons/search.svg";
import notificationIcon from "@/images/components/header/icons/notification.svg";
import sunIcon from "@/images/components/header/icons/sun.svg";
import moonIcon from "@/images/components/header/icons/moon.svg";
import cartIcon from "@/images/components/header/icons/cart.svg";
import avatar from "@/images/components/header/avatar.jpg";

function Header() {
    const { toggleActive, isActive } = useContext(ActiveContext);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved dark mode preference
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(isDarkMode);
        // Apply the dark class to the body tag
        document.body.classList.toggle("dark", isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        // Store dark mode preference
        localStorage.setItem("darkMode", newDarkMode);
        // Apply the dark class to the body tag
        document.body.classList.toggle("dark", newDarkMode);
    };

    return (
        <header>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[1.1875rem]">
                    <IconButton onClick={toggleActive}>
                        <Image
                            src={isActive ? sidebarOpenIcon : sidebarCloseIcon}
                            height={24}
                            width={21}
                            className="filter-light-green"
                            alt={
                                isActive
                                    ? "Sidebar Open Icon"
                                    : "Sidebar Close Icon"
                            }
                        />
                    </IconButton>
                    <span className="text-6xl font-bold text-dark dark:text-white">
                        Dashboard
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center gap-[1.5rem]">
                        <IconButton>
                            <Image
                                src={searchIcon}
                                height={22}
                                width={22}
                                alt="Search Icon"
                                className="filter-light-green"
                            />
                        </IconButton>
                        <IconButton className="relative">
                            <Image
                                src={notificationIcon}
                                height={21}
                                width={22}
                                alt="Notification Icon"
                                className="filter-light-green"
                            />
                            <div className="absolute right-[1px] top-[1px] rounded-full flex items-center justify-center bg-danger h-[1rem] w-[1rem]">
                                <span className="text-white text-vsm">1</span>
                            </div>
                        </IconButton>
                        <IconButton onClick={toggleDarkMode}>
                            <Image
                                src={darkMode ? moonIcon : sunIcon}
                                height={24}
                                width={24}
                                alt={darkMode ? "Moon Icon" : " Sun Icon"}
                                 className="filter-light-green"
                            />
                        </IconButton>
                        <IconButton className="relative">
                            <Image
                                src={cartIcon}
                                height={20}
                                width={24}
                                alt="Cart Icon"
                                 className="filter-light-green"
                            />
                            <div className="absolute right-[0] top-[0] rounded-full flex items-center justify-center bg-primary-light h-[1rem] w-[1rem]">
                                <span className="text-white text-vsm">3</span>
                            </div>
                        </IconButton>
                    </div>
                    <div className="h-[3.43rem] w-[1px] bg-primary-lightest ms-[1.87rem] me-[1.67rem]" />
                    <button className="flex items-center gap-[0.625rem]  duration-300 bg-transparent hover:bg-primary/10 hover:dark:bg-white/10 py-[5px] px-[10px] rounded-vsm">
                        <div className="h-[2.5rem] w-[2.5rem] rounded-full border-[1px] border-color-avatar-border">
                            <Image
                                src={avatar}
                                height={40}
                                width={40}
                                alt="Avatar"
                                className="object-cover rounded-full"
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="font-bold capitalize text-dark text-md dark:text-white">
                                Gladys Kanyinda
                            </span>
                            <span className="font-normal capitalize text-vsm text-admin dark:text-neutral-300">
                                Admin
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
