"use client";

// dependencies
import { useContext } from "react";
import { usePathname } from "next/navigation";

// components
import Sidebar from "@/components/global/sidebar";
import Header from "@/components/global/header";
import CartSidebar from "@/components/global/cart-sidebar";

// context
import { ActiveContext } from "@/context/ActiveContext.js";

const Layout = ({ children, className }) => {
    const pathName = usePathname();

    const { isActive } = useContext(ActiveContext);
    const { toggleActive } = useContext(ActiveContext);

    // const sliderClass = isActive ? "" : style.active;

    return (
        <main className={` ${className} bg-background dark:bg-neutral-800`}>
            {pathName === "/auth/sign-up" || pathName === "/auth/sign-in" ? (
                <>{children}</>
            ) : (
                <>
                    <div className="p-32 flex">
                        {/* Sidebar */}
                        <aside
                            className={`${isActive ? "w-[auto] lg:w-[25%] xl:w-[20%] 2xl:w-[15.9%]" : " w-[auto] lg:w-[8%] xl:w-[6%] 2xl:w-[4.3%]"} `}>
                            <Sidebar />
                        </aside>

                        {/* Page content */}
                        <div
                            className={`flex-grow flex flex-col ps-0 lg:ps-32 py-0 lg:py-18 ${isActive ? "w-full lg:w-[75%] xl:w-[80%] 2xl:w-[84.1%]" : "w-full lg:w-[92%] xl:w-[90%] 2xl:w-[95.7%]"} `}>
                            {/* Header */}
                            <Header />
                            <div className="pt-18">{children}</div>
                        </div>

                        {/* cart sidebar */}
                        <aside>{/* <CartSidebar /> */}</aside>
                    </div>
                </>
            )}
        </main>
    );
};

export default Layout;
