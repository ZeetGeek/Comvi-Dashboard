"use client";

// components
import { LayoutBox } from "@/components/global/layout/boxes";
import { H5Title } from "@/components/global/layout/title";
import Select from "@/components/global/form-fields/select-option/select";
import Option from "@/components/global/form-fields/select-option/option";

// chart
import SalesLineChart from "@/components/page-specific/dashboard/1/sales-info/chart/sales-line-chart";

function SalesAnalytics() {
    return (
        <LayoutBox className="p-24 h-full">
            {/* title and options */}
            <div className="flex items-center justify-between">
                {/* title */}
                <H5Title>Sales Analytics</H5Title>

                {/* options */}
                <div className="w-[105px]">
                    <Select>
                        <Option value="Year">Year</Option>
                        <Option value="Month">Month</Option>
                        <Option value="Week">Week</Option>
                    </Select>
                </div>
            </div>

            {/* Line Chart */}
            <div className="mt-[50px]">
                <SalesLineChart height={256} />
            </div>
        </LayoutBox>
    );
}

export default SalesAnalytics;
