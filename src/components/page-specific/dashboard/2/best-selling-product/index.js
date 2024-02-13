"use client";

// components
import { LayoutBox } from "@/components/global/layout/boxes";
import { H5Title } from "@/components/global/layout/title";
import Select from "@/components/global/form-fields/select-option/select";
import Option from "@/components/global/form-fields/select-option/option";
import ProductBox from "@/components/global/product/product-box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// data
import { product_data } from "@/data/product";

function BestSellingProduct() {
    return (
        <LayoutBox className="p-24 h-full">
            {/* title and options */}
            <div className="flex items-center justify-between">
                {/* title */}
                <H5Title>Best Selling Product</H5Title>

                {/* options */}
                <div className="w-[105px]">
                    <Select>
                        <Option value="Year">Year</Option>
                        <Option value="Month">Month</Option>
                        <Option value="Week">Week</Option>
                    </Select>
                </div>
            </div>

            {/* products carousel */}
            <div className=" mt-16 flex items-center gap-32">
                {/* product box */}
                <Swiper
                    spaceBetween={16}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}>
                    {product_data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div key={item.id} className="w-full">
                                <ProductBox {...item} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </LayoutBox>
    );
}

export default BestSellingProduct;
