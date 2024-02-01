// components
import DashboardInfo from "@/components/page-specific/dashboard/1/dashboard-info";
import SalesInfo from "@/components/page-specific/dashboard/1/sales-info";
import ProductInfo from "@/components/page-specific/dashboard/1/product-info";

export default function DashboardOne() {
     return (
          <>
               {/* dashboard info */}
               <section id="dashboard-info">
                    <div className="mb-[2rem] mt-[1.125rem]">
                         <DashboardInfo />
                    </div>
               </section>

               {/* sales analytics and category */}
               <section id="sales-info">
                    <div className="mb-[2rem]">
                         <SalesInfo />
                    </div>
               </section>

               {/* product selling and trending product info */}
               <section id="product-info">
                    <div>
                         <ProductInfo />
                    </div>
               </section>
          </>
     );
}
