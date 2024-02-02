// images
import TitleIcon1 from "@/images/components/dashboard/1/icons/1.svg";
import TitleIcon2 from "@/images/components/dashboard/1/icons/2.svg";
import TitleIcon3 from "@/images/components/dashboard/1/icons/3.svg";
import TitleIcon4 from "@/images/components/dashboard/1/icons/4.svg";

// dashboard info
import ProductImage1 from "@/images/components/dashboard/1/products-image/1.jpg";
import ProductImage2 from "@/images/components/dashboard/1/products-image/2.jpg";
import ProductImage3 from "@/images/components/dashboard/1/products-image/3.jpg";
import ProductImage4 from "@/images/components/dashboard/1/products-image/4.jpg";

export const dashboard_info = [
    {
        id: 0,
        title: "Today Revenue",
        title_icon: TitleIcon1,
        price: 2189,
        parentage: {
            number: 12,
            type: "increment",
        },
        chart_data: [
            { name: "2017", uv: 4000, pv: 2100, amt: 2300 },
            { name: "2018", uv: 3200, pv: 1498, amt: 2810 },
            { name: "2019", uv: 1000, pv: 3600, amt: 2290 },
            { name: "2020", uv: 4780, pv: 2908, amt: 2000 },
            { name: "2021", uv: 4890, pv: 4800, amt: 2181 },
            { name: "2022", uv: 2390, pv: 500, amt: 2500 },
            { name: "2023", uv: 1490, pv: 6300, amt: 2100 },
        ],
    },

    {
        id: 1,
        title: "Today Visitors",
        title_icon: TitleIcon2,
        price: 512,
        parentage: {
            number: 4,
            type: "increment",
        },
        chart_data: [
            { name: "2017", uv: 4000, pv: 2400, amt: 2400 },
            { name: "2018", uv: 3000, pv: 3398, amt: 2210 },
            { name: "2019", uv: 2000, pv: 4800, amt: 2290 },
            { name: "2020", uv: 2780, pv: 2908, amt: 2000 },
            { name: "2021", uv: 1890, pv: 4800, amt: 2181 },
            { name: "2022", uv: 2390, pv: 3800, amt: 2500 },
            { name: "2023", uv: 3490, pv: 5300, amt: 2100 },
        ],
    },

    {
        id: 2,
        title: "Today Transac",
        title_icon: TitleIcon3,
        price: 325,
        parentage: {
            number: 0.89,
            type: "decrement",
        },
        chart_data: [
            { name: "2017", uv: 4000, pv: 2400, amt: 2400 },
            { name: "2018", uv: 3000, pv: 3398, amt: 2210 },
            { name: "2019", uv: 2000, pv: 2800, amt: 2290 },
            { name: "2020", uv: 2780, pv: 8908, amt: 2000 },
            { name: "2021", uv: 1890, pv: 1800, amt: 2181 },
            { name: "2022", uv: 2390, pv: 2800, amt: 2500 },
            { name: "2023", uv: 3490, pv: 1300, amt: 2100 },
        ],
    },

    {
        id: 3,
        title: "Total Products",
        title_icon: TitleIcon4,
        price: 268,
        parentage: {
            number: 2,
            type: "increment",
        },
        chart_data: [
            { name: "2017", uv: 4000, pv: 2400, amt: 2400 },
            { name: "2018", uv: 3000, pv: 1398, amt: 2210 },
            { name: "2019", uv: 2000, pv: 3800, amt: 2290 },
            { name: "2020", uv: 2780, pv: 3100, amt: 2000 },
            { name: "2021", uv: 1890, pv: 4800, amt: 2181 },
            { name: "2022", uv: 2390, pv: 8000, amt: 2500 },
            { name: "2023", uv: 3490, pv: 9000, amt: 2100 },
        ],
    },
];

// category info

export const category_info = [
    {
        id: 0,
        list_color: "primary-light",
        product: {
            name: "Clothing",
            percentage: 25,
            category_products: "1,348",
            revenue: "3,020",
        },
    },
    {
        id: 1,
        list_color: "info",
        product: {
            name: "Lingerie & Nightwear",
            percentage: 35,
            category_products: "3,459",
            revenue: "2,280",
        },
    },

    {
        id: 2,
        list_color: "warning",
        product: {
            name: "Body Fit",
            percentage: 26,
            category_products: "2,754",
            revenue: "1,525",
        },
    },

    {
        id: 3,
        list_color: "secondary",
        product: {
            name: "Sportswear",
            percentage: 23,
            category_products: "2,754",
            revenue: "1,234",
        },
    },

    {
        id: 4,
        list_color: "danger",
        product: {
            name: "Accessories",
            percentage: 18,
            category_products: "348",
            revenue: "1,224",
        },
    },
];

// top selling products

export const top_selling_products = [
    {
        id: 0,
        product: {
            image: ProductImage1,
            name: "Sun Glaces",
            product_id: 134890,
            price: 223,
            status: "in-stock",
            sold: 206,
            total_earning: 8272,
        },
    },

    {
        id: 1,
        product: {
            image: ProductImage2,
            name: "Men's Smart Watch",
            product_id: 986245,
            price: 119,
            status: "low-stock",
            sold: 206,
            total_earning: 2726,
        },
    },
    {
        id: 2,
        product: {
            image: ProductImage3,
            name: "Woman's Shoes",
            product_id: 897275,
            price: 891,
            status: "in-stock",
            sold: 206,
            total_earning: 7992,
        },
    },

    {
        id: 3,
        product: {
            image: ProductImage4,
            name: "Classic Camera",
            product_id: 197497,
            price: 102,
            status: "in-stock",
            sold: 206,
            total_earning: 8271,
        },
    },
    {
        id: 0,
        product: {
            image: ProductImage1,
            name: "Sun Glaces",
            product_id: 134890,
            price: 223,
            status: "in-stock",
            sold: 206,
            total_earning: 8272,
        },
    },

    {
        id: 1,
        product: {
            image: ProductImage2,
            name: "Men's Smart Watch",
            product_id: 986245,
            price: 119,
            status: "low-stock",
            sold: 206,
            total_earning: 2726,
        },
    },
    {
        id: 2,
        product: {
            image: ProductImage3,
            name: "Woman's Shoes",
            product_id: 897275,
            price: 891,
            status: "in-stock",
            sold: 206,
            total_earning: 7992,
        },
    },

    {
        id: 3,
        product: {
            image: ProductImage4,
            name: "Classic Camera",
            product_id: 197497,
            price: 102,
            status: "in-stock",
            sold: 206,
            total_earning: 8271,
        },
    },
];
