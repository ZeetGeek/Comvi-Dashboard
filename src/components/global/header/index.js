// components
import SidebarToggle from "@/components/global/header/components/sidebar-toggle";
import { H4Title } from "@/components/global/layout/title";
import HeaderSearch from "@/components/global/header/components/search";
import DarkMode from "@/components/global/header/components/dark-mode";
import HeaderNotification from "@/components/global/header/components/notification";
import ShoppingCart from "@/components/global/header/components/shopping-cart";
import HeaderProfile from "@/components/global/header/components/profile";

function Header() {
    return (
        <header>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[7px] md:gap-18 ">
                    {/* sidebar toggle */}
                    <SidebarToggle />

                    {/* page title */}
                    <H4Title>Dashboard</H4Title>
                </div>
                <div className="flex items-center gap-[5px] md:gap-0">
                    <div className="flex items-center sm:gap-24 gap-[10px]">
                        {/* header search */}
                        <HeaderSearch />

                        {/* dark mode */}
                        <DarkMode />

                        {/* header notification */}
                        <HeaderNotification className={"hidden md:flex"} />

                        {/* shopping cart */}
                        <ShoppingCart />
                    </div>

                    {/* divider */}
                    <div className="hidden md:block h-[3.43rem] w-[1px] bg-primary-lightest ms-[1.87rem] me-[1.67rem]"></div>

                    {/* profile */}
                    <HeaderProfile />
                </div>
            </div>
        </header>
    );
}

export default Header;
