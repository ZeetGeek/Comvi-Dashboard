import Sidebar from "@/components/global/sidebar";
import Header from "@/components/global/header";

const Layout = ({ children }) => {
    return (
        <div className="flex overflow-auto bg-background dark:bg-neutral-800 w-full p-32">
            {/* Sidebar */}
            <Sidebar />

            {/* Page content */}
            <main className="flex-grow flex flex-col w-full ps-0 lg:ps-32 py-0 lg:py-18">
                {/* Header */}
                <Header />
                {children}
            </main>
        </div>
    );
};

export default Layout;
