"use client";

// dependencies
import { useState, useContext, useEffect } from "react";
import Image from "next/image";

// components
import IconButton from "@/components/global/theme-buttons/icon-button";
import { H4Title } from "@/components/global/layout/title";

// images
import sidebarOpenIcon from "@/images/components/header/icons/open.svg";
import sidebarCloseIcon from "@/images/components/header/icons/close.svg";
import searchIcon from "@/images/components/header/icons/search.svg";
import notificationIcon from "@/images/components/header/icons/notification.svg";
import sunIcon from "@/images/components/header/icons/sun.svg";
import moonIcon from "@/images/components/header/icons/moon.svg";
import cartIcon from "@/images/components/header/icons/cart.svg";
import avatar from "@/images/components/header/avatar.jpg";

// context
import { ActiveContext } from "@/context/ActiveContext.js";

function Header() {
    const { toggleActive, isActive } = useContext(ActiveContext);
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
        <header>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[7px] md:gap-18 ">
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
                    <H4Title>Dashboard</H4Title>
                </div>
                <div className="flex items-center gap-[5px] md:gap-0">
                    <div className="flex items-center gap-24">
                        <IconButton className="hidden md:flex">
                            <Image
                                src={searchIcon}
                                height={22}
                                width={22}
                                alt="Search Icon"
                                className="filter-light-green"
                            />
                        </IconButton>
                        <IconButton className="relative hidden md:flex">
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
                        <IconButton className="relative hidden md:flex">
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
                    <div className="hidden md:block h-[3.43rem] w-[1px] bg-primary-lightest ms-[1.87rem] me-[1.67rem]"></div>
                    <button className="flex items-center gap-10  duration-300 bg-transparent hover:bg-primary/10 hover:dark:bg-white/10 md:py-[5px] py-[10px] px-[10px] rounded-vsm">
                        <div className="h-[2.5rem] w-[2.5rem] rounded-full border-[1px] border-color-avatar-border">
                            <Image
                                src={avatar}
                                height={40}
                                width={40}
                                alt="Avatar"
                                className="object-cover rounded-full"
                            />
                        </div>
                        <div className=" hidden md:flex flex-col items-start">
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
