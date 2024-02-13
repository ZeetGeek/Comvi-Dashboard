"use client";

// components
import { LayoutBox } from "@/components/global/layout/boxes";
import { H5Title } from "@/components/global/layout/title";
import Select from "@/components/global/form-fields/select-option/select";
import Option from "@/components/global/form-fields/select-option/option";
import CategoryInfo from "./components/category-info";

import SalesLineChart from "./chart/sales-line-chart";
import SalesCategoryChart from "./chart/sales-pie-chart";

// data
import { category_info } from "@/data/dashboard/1";

function SalesInfo() {
    return (
        <div className="container">
            <div className="grid gap-32 2xl:grid-cols-2 xl:grid-cols-3">
                {/* sales analytics */}
                <div>
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

                        {/* chart */}
                        <div className="mt-[1.375rem]">
                            <SalesLineChart height={290} />
                        </div>
                    </LayoutBox>
                </div>

                {/* sales by category */}
                <div className="2xl:col-span-1 xl:col-span-2 ">
                    <LayoutBox className="p-24 h-full">
                        {/* title and options */}
                        <div className="flex items-center justify-between ">
                            {/* title */}
                            <H5Title>Sales by Category</H5Title>

                            {/* options */}
                             <div className="w-[105px]">
                                <Select>
                                    <Option value="Year">Year</Option>
                                    <Option value="Month">Month</Option>
                                    <Option value="Week">Week</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center mt-[1rem] gap-32">
                            {/* category chart and chart detail */}
                            <div className="w-full xl:w-1/2 sm:w-1/2">
                                <div className="relative max-w-[294px] w-full mx-auto xl:m-0">
                                    <SalesCategoryChart />

                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        <h3 className="font-extrabold text-dark text-display-1 dark:text-white">
                                            $6,8K
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2 sm:w-1/2">
                                {/* category info */}
                                <ul>
                                    {category_info.map((item) => (
                                        <CategoryInfo key={item.id} {...item} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </LayoutBox>
                </div>
            </div>
        </div>
    );
}

export default SalesInfo;
