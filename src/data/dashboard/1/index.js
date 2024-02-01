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
          chart_data: [20, 30, 20, 50, 30, 70, 80, 70, 90, 80, 100, 95],
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
          chart_data: [50, 20, 60, 80, 60, 90, 30, 100, 80, 40, 50, 60],
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
          chart_data: [70, 40, 100, 20, 80, 40, 70, 60, 30, 80, 20, 30],
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
          chart_data: [10, 40, 90, 20, 50, 60, 90, 30, 100, 20, 70, 30],
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
