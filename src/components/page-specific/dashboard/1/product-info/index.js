// dependencies
import Image from "next/image";
import TrendingProductImage from "@/images/components/dashboard/1/products-image/trending-product.jpg";

// components
import LayoutBox from "@/components/global/layout/layout-box";
import LayoutTitle from "@/components/global/layout/layout-title";
import {
     Table,
     TableHead,
     TableBody,
     Tr,
     Th,
     Td,
} from "@/components/global/table";

import ShortingButton from "@/components/global/theme-buttons/shorting-button";
import Select from "@/components/global/input-fields/select-option/select";
import Option from "@/components/global/input-fields/select-option/option";

// images
import IncrementIcon from "@/images/components/dashboard/1/icons/increment.svg";

// data
import { top_selling_products } from "@/data/dashboard/1";

// style
import style from "./product-info.module.scss";

function ProductInfo() {
     return (
          <>
               <div className="container">
                    <div className="row">
                         <div className=" w-9/12 ">
                              <LayoutBox className="p-[1.5rem]">
                                   {/* title and options */}
                                   <div className="flex items-center justify-between">
                                        {/* title */}
                                        <LayoutTitle>Top Selling</LayoutTitle>
                                        {/* options */}
                                        <div className="w-[105px]">
                                             <Select>
                                                  <Option value="Sort By">
                                                       Sort By
                                                  </Option>
                                                  <Option value="Price">
                                                       Price
                                                  </Option>
                                                  <Option value="Sold">
                                                       Sold
                                                  </Option>
                                                  <Option value="Earning">
                                                       Earning
                                                  </Option>
                                             </Select>
                                        </div>
                                   </div>

                                   {/* products list */}
                                   <div className="mt-[1rem] h-[301px] overflow-auto scrollbar-hide">
                                        <Table>
                                             <TableHead>
                                                  <Tr>
                                                       <Th className="w-[340px]">
                                                            Product Name
                                                       </Th>
                                                       <Th className="w-[190px]">
                                                            <ShortingButton>
                                                                 Price
                                                            </ShortingButton>
                                                       </Th>
                                                       <Th className="w-[180px]">
                                                            Status
                                                       </Th>
                                                       <Th className="w-[190px]">
                                                            <ShortingButton>
                                                                 Sold
                                                            </ShortingButton>
                                                       </Th>
                                                       <Th>
                                                            <ShortingButton>
                                                                 Total Earning
                                                            </ShortingButton>
                                                       </Th>
                                                  </Tr>
                                             </TableHead>
                                             <TableBody>
                                                  {top_selling_products.map(
                                                       (item) => (
                                                            <Tr key={item.id}>
                                                                 {/* product image , name and id */}
                                                                 <Td className="w-[340px]">
                                                                      <div className="flex items-center justify-start gap-[0.5rem]">
                                                                           {/* image */}
                                                                           <div className="h-[2.5rem] w-[2.5rem] rounded-[0.5rem] bg-red-100 overflow-hidden">
                                                                                <Image
                                                                                     className="object-cover h-full"
                                                                                     src={
                                                                                          item
                                                                                               .product
                                                                                               .image
                                                                                     }
                                                                                     height={
                                                                                          40
                                                                                     }
                                                                                     width={
                                                                                          40
                                                                                     }
                                                                                     alt={
                                                                                          item
                                                                                               .product
                                                                                               .name
                                                                                     }
                                                                                />
                                                                           </div>

                                                                           {/* product name and id */}
                                                                           <div>
                                                                                <h6 className="text-button text-dark font-semibold capitalize ">
                                                                                     {
                                                                                          item
                                                                                               .product
                                                                                               .name
                                                                                     }
                                                                                </h6>
                                                                                <span className="uppercase text-vsm text-admin font-medium">
                                                                                     Product
                                                                                     ID:
                                                                                     {
                                                                                          item
                                                                                               .product
                                                                                               .product_id
                                                                                     }
                                                                                </span>
                                                                           </div>
                                                                      </div>
                                                                 </Td>
                                                                 <Td className="w-[190px]">
                                                                      <span className="text-button text-dark font-semibold capitalize ">
                                                                           $
                                                                           {
                                                                                item
                                                                                     .product
                                                                                     .price
                                                                           }
                                                                      </span>
                                                                 </Td>
                                                                 <Td className="w-[180px]">
                                                                      {
                                                                           item
                                                                                .product
                                                                                .status
                                                                      }
                                                                 </Td>
                                                                 <Td className="w-[190px]">
                                                                      <span className="text-button text-dark font-semibold capitalize ">
                                                                           {
                                                                                item
                                                                                     .product
                                                                                     .sold
                                                                           }
                                                                           pcs
                                                                      </span>
                                                                 </Td>
                                                                 <Td>
                                                                      <span className="text-button text-dark font-semibold capitalize ">
                                                                           $
                                                                           {
                                                                                item
                                                                                     .product
                                                                                     .total_earning
                                                                           }
                                                                      </span>
                                                                 </Td>
                                                            </Tr>
                                                       )
                                                  )}
                                             </TableBody>
                                        </Table>
                                   </div>
                              </LayoutBox>
                         </div>

                         {/* trading product */}
                         <div className="w-3/12">
                              <LayoutBox className="h-full">
                                   <div
                                        className={` ${style.product_bg_image} p-[1.5rem] h-full bg-trending-product-image bg-center bg-cover relative`}
                                        style={{
                                             backgroundImage: `url(${TrendingProductImage.src})`,
                                        }}
                                   >
                                        <div className="relative z-10 flex flex-col items-start justify-between h-full">
                                             <div>
                                                  {/* title */}
                                                  <LayoutTitle>
                                                       Trending Now
                                                  </LayoutTitle>

                                                  {/* product info */}
                                                  <div className="flex items-center mt-3 bg-white rounded-vsm border-[1px] border-primary-lightest py-[0.5rem] px-[0.75rem]">
                                                       {/* vc info */}
                                                       {/* vc icon */}

                                                       <Image
                                                            src={IncrementIcon}
                                                            height={20}
                                                            width={21}
                                                            alt="Increment Icon"
                                                       />

                                                       {/* vs percentage */}
                                                       <span
                                                            className={`d-inline-block ms-[0.5rem] me-[0.375rem] text-primary-light font-semibold text-sm`}
                                                       >
                                                            +12%
                                                       </span>

                                                       <span className="inline-block lowercase text-sm text-admin font-normal">
                                                            vc yesterday
                                                       </span>

                                                       {/* vc day */}
                                                  </div>
                                             </div>

                                             {/* product name and price */}
                                             <div>
                                                  <span className="text-dark font-extrabold text-lg block">
                                                       Single Breasted Blazer
                                                  </span>
                                                  <span className="text-dark font-bold text-xl block mt-[0.625rem]">
                                                       $1499.99
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              </LayoutBox>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default ProductInfo;
