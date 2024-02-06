"use client";
// dependencies
import Image from "next/image";
import React, { useContext } from "react";

// components
import SidebarTitle from "./components/sidebar-title";
import SidebarLink from "./components/sidebar-link";
import Button from "@/components/global/theme-buttons/button";
import IconButton from "@/components/global/theme-buttons/icon-button";

// images
import logoIcon from "@/images/logo/Logo-icon.svg";
import advertiseImage from "@/images/components/sidebar/advertise-image.png";
import closeIcon from "@/images/components/sidebar/close.svg";

// data
import { menuLinks } from "@/data/sidebar";
import { otherLinks } from "@/data/sidebar";

// style
import style from "./sidebar.module.scss";

// context
import { ActiveContext } from "@/context/ActiveContext.js";

function Sidebar() {
    const { isActive } = useContext(ActiveContext);
    const { toggleActive } = useContext(ActiveContext);

    const sliderClass = isActive ? "" : style.active;

    return (
        <>
            <div
                className={` ${style.sidebar} ${sliderClass} shadow-2xl shadow-primary-light/50 lg:shadow-none h-full bg-primary dark:bg-neutral-900 overflow-auto flex-shrink-0 w-full rounded-lg`}>
                <div className="flex flex-col justify-between h-full">
                    {/* sidebar menu links and other links */}
                    <div>
                        {/* logo and close icon */}
                        <div
                            className={`${style.logo} px-24 pt-24 pb-32 flex items-center justify-between`}>
                            <button
                                onClick={toggleActive}
                                className="flex items-center gap-[0.56rem]"
                                name="comvi logo">
                                <Image
                                    src={logoIcon}
                                    height={40}
                                    width={40}
                                    alt="comvi logo icon"
                                />
                                <span className="text-5xl font-bold text-white">
                                    Comvi
                                </span>
                            </button>

                            <IconButton
                                name="close sidebar button"
                                onClick={toggleActive}
                                className="hover:bg-white/10 lg:hidden">
                                <Image
                                    src={closeIcon}
                                    height={24}
                                    width={24}
                                    alt="close icon"
                                />
                            </IconButton>
                        </div>

                        {/* menu links */}
                        <div>
                            <div
                                className={`${style.sidebarTitle} px-24 pb-24`}>
                                {/* title */}
                                <SidebarTitle>Menu</SidebarTitle>
                            </div>
                            {/* menu links */}
                            <div>
                                <ul>
                                    {menuLinks.map((item) => (
                                        <SidebarLink
                                            key={item.id}
                                            icon={item.icon}
                                            text={item.text}
                                            navigate={item.navigate}
                                            notification={item.notification}
                                            submenu={item.submenu}
                                            submenu_links={item.submenu_links}
                                            className={
                                                style.menu_icon_and_notification
                                            }
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* divider */}
                        <div className="px-24  pt-28  pb-[2.5rem]">
                            <div className="w-full h-[1px] bg-slider-divider"></div>
                        </div>

                        {/* other links */}
                        <div>
                            <div
                                className={`${style.sidebarTitle} px-24 pb-24`}>
                                {/* title */}
                                <SidebarTitle>Other</SidebarTitle>
                            </div>
                            {/* other links */}
                            <div>
                                <ul>
                                    {otherLinks.map((item) => (
                                        <SidebarLink
                                            key={item.id}
                                            icon={item.icon}
                                            text={item.text}
                                            navigate={item.navigate}
                                            notification={item.notification}
                                            submenu={item.submenu}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* sidebar advertise */}
                    <div
                        className={` ${style.advertise_banner} px-24 pb-24 mt-[3.125rem]`}>
                        <div className="relative p-24 overflow-hidden rounded-md bg-slider-add-bg">
                            {/* advertise title */}
                            <div className="mb-[8rem] relative z-[2]">
                                <h5 className="text-3xl font-bold text-white capitalize ">
                                    Improve Your Sales Efficiency
                                </h5>
                            </div>

                            {/* advertise image */}
                            <div className="absolute -bottom-[28px] -left-[20px] z-[1] ">
                                <Image
                                    src={advertiseImage}
                                    height={239}
                                    width={256}
                                    alt={"advertise image"}
                                />
                            </div>

                            {/* advertise button */}
                            <div className="relative z-[2]">
                                <Button
                                    className="w-full"
                                    size="medium"
                                    color="warning"
                                    name="start now">
                                    Start Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
