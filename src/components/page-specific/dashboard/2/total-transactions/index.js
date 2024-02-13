// dependencies
import Image from "next/image";

// components
import { H3Title } from "@/components/global/layout/title";
import { LayoutBox } from "@/components/global/layout/boxes";
import Select from "@/components/global/form-fields/select-option/select";
import Option from "@/components/global/form-fields/select-option/option";

// images
import TitleIcon3 from "@/images/components/dashboard/1/icons/3.svg";
import IncrementIcon from "@/images/components/dashboard/1/icons/increment.svg";

function TotalTransactions() {
    return (
        <LayoutBox className="p-24 h-full">
            {/* options and category total transactions*/}
            <div className="flex items-center justify-between">
                {/* total transaction */}
                <div>
                    <div>
                        {/* title and icon */}
                        <div className="flex items-center gap-8">
                            <div className="h-20 w-20 bg-info flex items-center justify-center rounded-[5px]">
                                {/* icon */}
                                <Image
                                    src={TitleIcon3}
                                    height={14}
                                    width={14}
                                    alt="title icon"
                                />
                            </div>
                            <span className="font-semibold uppercase text-button text-admin dark:text-neutral-500">
                                Our Total Transactions
                            </span>
                        </div>
                        {/* info */}
                        <div className="flex justify-between gap-[1rem]">
                            {/* number */}
                            <H3Title className="dark:text-primary-light my-[3px] ">
                                $12,189
                            </H3Title>
                        </div>
                    </div>
                    <div className="inline-block">
                        <div className="flex items-center border border-primary-light bg-primary-light/5 py-8 px-16 rounded-vsm">
                            {/* vc info */}
                            <Image
                                src={IncrementIcon}
                                height={20}
                                width={21}
                                alt="Increment Icon"
                            />
                            {/* vs percentage */}
                            <span
                                className={`d-inline-block ms-8 me-6 text-primary-light font-semibold text-sm`}>
                                +12%
                            </span>

                            <span className="inline-block text-sm font-normal lowercase text-admin dark:text-neutral-500">
                                vc yesterday
                            </span>

                            {/* vc day */}
                        </div>
                    </div>
                </div>
                {/* category total transaction */}
                <div className="flex flex-col items-end">
                    {/* options */}
                    <div className="w-[105px]">
                        <Select>
                            <Option value="Year">Year</Option>
                            <Option value="Month">Month</Option>
                            <Option value="Week">Week</Option>
                        </Select>
                    </div>

                    {/* category */}
                    <div className="bg-neutral-200 h-[80px] rounded-lg w-[445px] mt-[17px]"></div>
                </div>
            </div>
        </LayoutBox>
    );
}

export default TotalTransactions;
