// components
import DashboardInfo from "@/components/page-specific/dashboard/2/dashboard-info";
import SalesAnalytics from "@/components/page-specific/dashboard/2/sales-analytics";
import BestSellingProduct from "@/components/page-specific/dashboard/2/best-selling-product";
import TotalTransactions from "@/components/page-specific/dashboard/2/total-transactions";
import ProductReview from "@/components/page-specific/dashboard/2/product-review";
import OrderStatus from "@/components/page-specific/dashboard/2/order-status";
import VisitByTime from "@/components/page-specific/dashboard/2/visit-by-time";

export default function DashboardTwo() {
    return (
        <>
            {/* dashboard info and sales analytics */}
            <section className="dashboard-info-sales-analytics">
                <div className="container">
                    <div className="flex flex-col xl:flex-row gap-32">
                        <div className="w-full">
                            <div className="flex flex-col gap-32">
                                <DashboardInfo />
                                <SalesAnalytics />
                            </div>
                        </div>

                        {/* best selling product and total transactions */}
                        <div className="w-full">
                            <div className="flex flex-col gap-32">
                                <BestSellingProduct />
                                <TotalTransactions />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* product review, order status, visitor by time */}
            <section className="product-review-order-status-visitors">
                <div className="container">
                    <div className="grid gap-32 md:grid-cols-2 2xl:grid-cols-3 mt-32">
                        <div>
                            <ProductReview />
                        </div>
                        <div>
                            <OrderStatus />
                        </div>
                        <div className="col-span-1 md:col-span-2 2xl:col-span-1">
                            <VisitByTime />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
