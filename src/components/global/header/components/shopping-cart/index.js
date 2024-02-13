// dependencies
import Image from "next/image";

// components
import IconButton from "@/components/global/theme-buttons/icon-button";

// images
import cartIcon from "@/images/components/header/icons/cart.svg";

export default function ShoppingCart() {
    return (
        <>
            <IconButton>
                <Image
                    src={cartIcon}
                    height={20}
                    width={24}
                    alt="Cart Icon"
                    className="filter-light-green"
                />
            </IconButton>
        </>
    );
}
