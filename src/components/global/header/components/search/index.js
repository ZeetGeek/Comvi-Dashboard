// dependencies
import Image from "next/image";

// components
import IconButton from "@/components/global/theme-buttons/icon-button";

// images
import searchIcon from "@/images/components/header/icons/search.svg";
function HeaderSearch() {
    return (
        <>
            <IconButton className="hidden md:flex">
                <Image
                    src={searchIcon}
                    height={22}
                    width={22}
                    alt="Search Icon"
                    className="filter-light-green"
                />
            </IconButton>
        </>
    );
}

export default HeaderSearch;
