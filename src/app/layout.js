// dependencies
import { Manrope } from "next/font/google";
import "../styles/globals.scss";
import "../styles/dark-mode.scss";

// layout
import Layout from "@/layout";

const manrope = Manrope({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-manrope",
});

export const metadata = {
    title: "Comvi - Your Ultimate E-commerce Management Dashboard",
    description: "Comvi: Your all-in-one e-commerce management solution. Simplify inventory, analyze sales, and enhance customer experience. Take control today.",
};

// context
import { ActiveProvider } from "@/context/ActiveContext.js";

// toastify container
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${manrope.className} font-manrope`}>
                <ActiveProvider>
                    <Layout>
                        {children}
                        <ToastContainer />
                    </Layout>
                </ActiveProvider>
            </body>
        </html>
    );
}
