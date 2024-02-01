import Sidebar from "@/components/global/sidebar";
import Header from "@/components/global/header";

const Layout = ({ children }) => {
     return (
          <div className="flex overflow-auto bg-background w-full p-[2rem]">
               {/* Sidebar */}
               <aside className="flex-shrink-0 w-[296px] rounded-lg overflow-hidden">
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
