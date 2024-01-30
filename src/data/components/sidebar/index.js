// menu links icon
import DashboardIcon from "@/images/components/sidebar/menu-links-icons/1.svg";
import ProductIcon from "@/images/components/sidebar/menu-links-icons/2.svg";
import OrderIcon from "@/images/components/sidebar/menu-links-icons/3.svg";
import SaleIcon from "@/images/components/sidebar/menu-links-icons/4.svg";
import ReviewIcon from "@/images/components/sidebar/menu-links-icons/5.svg";

// others links
import SettingsIcon from "@/images/components/sidebar/other-links-icons/1.svg";
import LogoutIcon from "@/images/components/sidebar/other-links-icons/2.svg";

export const menuLinks = [
	{
		id: 0,
		icon: {
			src: DashboardIcon,
			alt: "dashboard icon",
		},
		text: "Dashboard",
		navigate: "/",
		notification: 2,
		submenu: false,
	},

	{
		id: 1,
		icon: {
			src: ProductIcon,
			alt: "product icon",
		},
		text: "Products",
		navigate: false,
		notification: false,
		submenu: true,
		submenu_links: [
			{
				text: "Product Page",
				navigate: "/product-page",
				title: "Product Page",
			},

			{
				text: "Create Product",
				navigate: "/create-product",
				title: "Create Product",
			},
		],
	},

	{
		id: 2,
		icon: {
			src: OrderIcon,
			alt: "order icon",
		},
		text: "Orders",
		navigate: false,
		notification: false,
		submenu: true,
		submenu_links: [
			{
				text: "Order Details",
				navigate: "/order-details",
				title: "Order Details",
			},

			{
				text: "Invoice",
				navigate: "/invoice",
				title: "Invoice",
			},
		],
	},

	{
		id: 3,
		icon: {
			src: SaleIcon,
			alt: "sale icon",
		},
		text: "Sales",
		navigate: "/sales",
		notification: false,
		submenu: false,
	},

	{
		id: 4,
		icon: {
			src: ReviewIcon,
			alt: "review icon",
		},
		text: "Reviews",
		navigate: "/reviews",
		notification: false,
		submenu: false,
	},
];

export const otherLinks = [
	{
		id: 0,
		icon: {
			src: SettingsIcon,
			alt: "settings icon",
		},
		navigate: "/settings",
		text: "Settings",
		notification: false,
		submenu: false,
	},
	{
		id: 1,
		icon: {
			src: LogoutIcon,
			alt: "logout icon",
		},
		navigate: "/log-out",
		text: "Logout",
		notification: false,
		submenu: false,
	},
];
