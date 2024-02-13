// dependencies
import Image from "next/image";

// components
import DashboardInfoLineChart from "@/components/global/dashboard/info-box/chart";
import { LayoutBox } from "@/components/global/layout/boxes";
import { H3Title } from "@/components/global/layout/title";

// images

import IncrementIcon from "@/images/components/dashboard/1/icons/increment.svg";
import DecrementIcon from "@/images/components/dashboard/1/icons/decrement.svg";

function InfoBox({ title, title_icon, price, chart_data, parentage }) {
    return (
        <>
            <LayoutBox className="px-24 shadow-layout-box py-28 w-full ">
                <div>
                    {/* title and icon */}
                    <div className="flex items-center gap-8">
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
                        <H3Title className="dark:text-primary-light mt-[0.8125rem] ">
                            ${price}
                        </H3Title>

                        {/* chart */}
                        <div className="w-full">
                            <DashboardInfoLineChart
                                chart_data={chart_data}
                                type={parentage.type}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-6">
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
                        className={`d-inline-block ms-8 me-6  ${parentage.type === "increment" ? "text-primary-light" : "text-danger"} font-semibold text-sm`}>
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
