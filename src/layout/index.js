import Sidebar from "@/components/global/sidebar";
import Header from "@/components/global/header";

const Layout = ({ children }) => {
    return (
        <div className="flex overflow-auto bg-background dark:bg-neutral-800 w-full p-[2rem]">
            {/* Sidebar */}
            <aside>
                <Sidebar />
            </aside>

            {/* Page content */}
            <main className="flex-grow  flex flex-col pt-[1.125rem] pb-[1rem] pl-[2rem]">
                {/* Header */}
                <Header />
                {children}
            </main>
        </div>
    );
};

export default Layout;
