// dependencies
import Image from "next/image";

// components
import LineChart from "@/components/global/dashboard/info-box/chart";
import LayoutBox from "@/components/global/layout/layout-box";

// images

import IncrementIcon from "@/images/components/dashboard/1/icons/increment.svg";
import DecrementIcon from "@/images/components/dashboard/1/icons/decrement.svg";

function InfoBox({ title, title_icon, price, chart_data, parentage }) {
     return (
          <>
               <LayoutBox className="shadow-layout-box py-[1.75rem] px-[1.5rem] ">
                    <div>
                         {/* title and icon */}
                         <div className="flex items-center gap-[0.5rem]">
                              <div className="h-[1.25rem] w-[1.25rem] bg-info flex items-center justify-center rounded-[5px]">
                                   {/* icon */}
                                   <Image
                                        src={title_icon}
                                        height={14}
                                        width={14}
                                        alt="title icon"
                                   />
                              </div>
                              <span className="uppercase text-button font-semibold text-admin">
                                   {title}
                              </span>
                         </div>
                         {/* info */}
                         <div className="flex justify-between">
                              {/* number */}
                              <h4 className="text-dark font-extrabold text-display-1 mt-[0.8125rem]">
                                   ${price}
                              </h4>

                              {/* chart */}
                              <div className="flex items-center">
                                   <LineChart
                                        chart_data={chart_data}
                                        type={parentage.type}
                                   />
                              </div>
                         </div>
                    </div>
                    <div className="flex items-center mt-[0.375rem]">
                         {/* vc info */}
                         {/* vc icon */}

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
                              className={`d-inline-block ms-[0.5rem] me-[0.375rem]  ${parentage.type === "increment" ? "text-primary-light" : "text-danger"} font-semibold text-sm`}
                         >
                              {parentage.type === "increment" ? "+" : "-"}
                              {parentage.number}%
                         </span>

                         <span className="inline-block lowercase text-sm text-admin font-normal">
                              vc yesterday
                         </span>

                         {/* vc day */}
                    </div>
               </LayoutBox>
          </>
     );
}

export default InfoBox;
