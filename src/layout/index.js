"use client";

// dependencies
import { usePathname } from "next/navigation";

// components
import Sidebar from "@/components/global/sidebar";
import Header from "@/components/global/header";

const Layout = ({ children, className }) => {
    const pathName = usePathname();

    return (
        <main className={` ${className} bg-background dark:bg-neutral-800`}>
            {pathName === "/" || pathName === "/sign-up" ? (
                <>{children}</>
            ) : (
                <>
                    <div className="p-32 flex">
                        {/* Sidebar */}
                        <Sidebar />

                        {/* Page content */}
                        <div className="flex-grow flex flex-col w-full ps-0 lg:ps-32 py-0 lg:py-18">
                            {/* Header */}
                            <Header />
                            {children}
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};

export default Layout;
