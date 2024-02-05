// dependencies
import Image from "next/image";

// components
import DashboardInfoLineChart from "@/components/global/dashboard/info-box/chart";
import LayoutBox from "@/components/global/layout/layout-box";

// images

import IncrementIcon from "@/images/components/dashboard/1/icons/increment.svg";
import DecrementIcon from "@/images/components/dashboard/1/icons/decrement.svg";

function InfoBox({ title, title_icon, price, chart_data, parentage }) {
    return (
        <>
            <LayoutBox className="px-24 shadow-layout-box py-28 ">
                <div>
                    {/* title and icon */}
                    <div className="flex items-center gap-[0.5rem]">
                        <div className="h-20 w-20 bg-info flex items-center justify-center rounded-[5px]">
                            {/* icon */}
                            <Image
                                src={title_icon}
                                height={14}
                                width={14}
                                alt="title icon"
                            />
                        </div>
                        <span className="font-semibold uppercase text-button text-admin dark:text-neutral-500">
                            {title}
                        </span>
                    </div>
                    {/* info */}
                    <div className="flex justify-between gap-[1rem]">
                        {/* number */}
                        <h4 className="text-dark dark:text-primary-light font-extrabold text-display-1 mt-[0.8125rem] ">
                            ${price}
                        </h4>

                        {/* chart */}
                        <div className="w-full" >
                            <DashboardInfoLineChart
                                chart_data={chart_data}
                                type={parentage.type}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-[0.375rem]">
                    {/* vc info */}
                    {parentage.type === "increment" ? (
                        <>
                            <Image
                                src={IncrementIcon}
                                height={20}
                                width={21}
                                alt="Increment Icon"
                            />
                        </>
                    ) : (
                        <>
                            <Image
                                src={DecrementIcon}
                                height={20}
                                width={21}
                                alt="Decrement Icon"
                            />
                        </>
                    )}

                    {/* vs percentage */}
                    <span
                        className={`d-inline-block ms-[0.5rem] me-[0.375rem]  ${parentage.type === "increment" ? "text-primary-light" : "text-danger"} font-semibold text-sm`}>
                        {parentage.type === "increment" ? "+" : "-"}
                        {parentage.number}%
                    </span>

                    <span className="inline-block text-sm font-normal lowercase text-admin dark:text-neutral-500">
                        vc yesterday
                    </span>

                    {/* vc day */}
                </div>
            </LayoutBox>
        </>
    );
}

export default InfoBox;
