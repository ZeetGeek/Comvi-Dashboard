// components
import LayoutBox from "@/components/global/layout/layout-box";
import LayoutTitle from "@/components/global/layout/layout-title";
import Select from "@/components/global/input-fields/select-option/select";
import Option from "@/components/global/input-fields/select-option/option";
import CategoryInfo from "./components/category-info";

import LineChart from "./chart";

// data
import { category_info } from "@/data/dashboard/1";

function SalesInfo() {
     return (
          <div className="container">
               <div className="row">
                    {/* sales analytics */}
                    <div className="w-1/2">
                         <LayoutBox className="p-[1.5rem] ">
                              {/* title and options */}
                              <div className="flex items-center justify-between">
                                   {/* title */}
                                   <LayoutTitle>Sales Analytics</LayoutTitle>

                                   {/* options */}
                                   <div className="w-[105px]">
                                        <Select>
                                             <Option value="Year">Year</Option>
                                             <Option value="Month">
                                                  Month
                                             </Option>
                                             <Option value="Week">Week</Option>
                                        </Select>
                                   </div>
                              </div>

                              {/* chart */}
                              <div className="mt-[1.375rem]">
                                   <LineChart />
                              </div>
                         </LayoutBox>
                    </div>

                    {/* sales by category */}
                    <div className="w-1/2">
                         <LayoutBox className="p-[1.5rem]">
                              {/* title and options */}
                              <div className="flex items-center justify-between">
                                   {/* title */}
                                   <LayoutTitle>Sales by Category</LayoutTitle>

                                   {/* options */}
                                   <div className="w-[105px]">
                                        <Select>
                                             <Option value="Year">Year</Option>
                                             <Option value="Month">
                                                  Month
                                             </Option>
                                             <Option value="Week">Week</Option>
                                        </Select>
                                   </div>
                              </div>
                              <div className="row items-center mt-[1rem]">
                                   {/* category chart and chart detail */}
                                   <div className="w-1/2">
                                        <div className="h-[294px] w-[294px] rounded-full bg-secondary/50"></div>
                                   </div>
                                   <div className="w-1/2">
                                        {/* category info */}
                                        <ul>
                                             {category_info.map((item) => (
                                                  <CategoryInfo
                                                       key={item.id}
                                                       {...item}
                                                  />
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
