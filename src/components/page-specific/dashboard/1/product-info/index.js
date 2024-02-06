// dependencies
import Image from "next/image";
import TrendingProductImage from "@/images/components/dashboard/1/products-image/trending-product.png";

// components
import { LayoutBox } from "@/components/global/layout/boxes";
import { H5Title } from "@/components/global/layout/title";
import {
    Table,
    TableHead,
    TableBody,
    Tr,
    Th,
    Td,
} from "@/components/global/table";

import ShortingButton from "@/components/global/theme-buttons/shorting-button";
import Select from "@/components/global/form-fields/select-option/select";
import Option from "@/components/global/form-fields/select-option/option";
import Badge from "@/components/global/badge";

// images
import IncrementIcon from "@/images/components/dashboard/1/icons/increment.svg";

// data
import { top_selling_products } from "@/data/dashboard/1";

function ProductInfo() {
    return (
        <>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-32">
                    <div className="w-full xl:w-9/12 lg:w-7/12 md:w-8/12">
                        <LayoutBox className="p-24">
                            {/* title and options */}
                            <div className="flex items-center justify-between">
                                {/* title */}
                                <H5Title>Top Selling</H5Title>
                                {/* options */}
                                <div className="w-[105px]">
                                    <Select>
                                        <Option value="Sort By">Sort By</Option>
                                        <Option value="Price">Price</Option>
                                        <Option value="Sold">Sold</Option>
                                        <Option value="Earning">Earning</Option>
                                    </Select>
                                </div>
                            </div>

                            {/* products list */}
                            <div className="mt-[1rem]">
                                <Table>
                                    <TableHead>
                                        <Tr>
                                            <Th className=" dark:text-white w-[340px]">
                                                Product Name
                                            </Th>
                                            <Th className=" dark:text-white w-[190px]">
                                                <ShortingButton>
                                                    Price
                                                </ShortingButton>
                                            </Th>
                                            <Th className=" dark:text-white w-[180px]">
                                                Status
                                            </Th>
                                            <Th className=" dark:text-white w-[190px]">
                                                <ShortingButton>
                                                    Sold
                                                </ShortingButton>
                                            </Th>
                                            <Th className=" dark:text-white w-[120px]">
                                                <ShortingButton>
                                                    Total Earning
                                                </ShortingButton>
                                            </Th>
                                        </Tr>
                                    </TableHead>

                                    <div className="h-[296px] overflow-auto scrollbar-hide  flex justify-between">
                                        <TableBody className="w-full">
                                            {top_selling_products.map(
                                                (item) => (
                                                    <Tr
                                                        key={item.id}
                                                        className="duration-300 bg-transparent hover:bg-neutral-100 hover:dark:bg-neutral-800">
                                                        {/* product image , name and id */}
                                                        <Td className="w-[340px]">
                                                            <div className="flex items-center justify-start gap-8">
                                                                {/* image */}
                                                                <div className="h-[2.5rem] w-[2.5rem] rounded-8 overflow-hidden">
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
                                                                    <h6 className="font-semibold capitalize text-button text-dark dark:text-white">
                                                                        {
                                                                            item
                                                                                .product
                                                                                .name
                                                                        }
                                                                    </h6>
                                                                    <span className="font-medium uppercase text-vsm text-admin dark:text-neutral-500">
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
                                                            <span className="font-semibold capitalize text-button text-dark dark:text-white">
                                                                $
                                                                {
                                                                    item.product
                                                                        .price
                                                                }
                                                            </span>
                                                        </Td>
                                                        <Td className="w-[180px]">
                                                            {item.product
                                                                .status ===
                                                            "in-stock" ? (
                                                                <>
                                                                    <Badge color="primary-light">
                                                                        In Stock
                                                                    </Badge>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Badge color="warning">
                                                                        Low
                                                                        Stock
                                                                    </Badge>
                                                                </>
                                                            )}
                                                        </Td>
                                                        <Td className="w-[190px]">
                                                            <span className="font-semibold capitalize text-button text-dark dark:text-white">
                                                                {
                                                                    item.product
                                                                        .sold
                                                                }
                                                                pcs
                                                            </span>
                                                        </Td>
                                                        <Td className="w-[120px]">
                                                            <span className="font-semibold capitalize text-button text-dark dark:text-white">
                                                                $
                                                                {
                                                                    item.product
                                                                        .total_earning
                                                                }
                                                            </span>
                                                        </Td>
                                                    </Tr>
                                                )
                                            )}
                                        </TableBody>
                                    </div>
                                </Table>
                            </div>
                        </LayoutBox>
                    </div>

                    {/* trading product */}
                    <div className="w-full xl:w-3/12 lg:w-5/12 md:w-4/12">
                        <LayoutBox className="h-[400px] md:h-full">
                            <div
                                className={`product_bg_image_gl p-24 h-full bg-trending-product-image bg-center bg-cover relative`}
                                style={{
                                    borderRadius: "22px",
                                    backgroundImage: `url(${TrendingProductImage.src})`,
                                }}>
                                <div className="relative z-10 flex flex-col items-start justify-between h-full">
                                    <div>
                                        {/* title */}
                                        <H5Title className="dark:text-dark">
                                            Trending Now
                                        </H5Title>

                                        {/* product info */}
                                        <div className="flex items-center mt-3">
                                            {/* vc icon */}
                                            <Image
                                                src={IncrementIcon}
                                                height={20}
                                                width={21}
                                                alt="Increment Icon"
                                                className="filter-white"
                                            />

                                            {/* vs percentage */}
                                            <span
                                                className={`d-inline-block ms-8 me-6 text-primary-light font-semibold text-sm dark:text-white`}>
                                                +12%
                                            </span>

                                            <span className="inline-block text-sm font-normal lowercase text-admin dark:text-white">
                                                vc yesterday
                                            </span>

                                            {/* vc day */}
                                        </div>
                                    </div>

                                    {/* product name and price */}
                                    <div>
                                        <span className="block text-lg font-extrabold text-dark dark:text-white">
                                            Single Breasted Blazer
                                        </span>
                                        <span className="text-dark font-bold text-xl block mt-[10]  dark:text-white">
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
