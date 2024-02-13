// dependencies
import Image from "next/image";

// components
import IconButton from "@/components/global/theme-buttons/icon-button";
import {
    DropDown,
    DropDownHeader,
    DropDownBody,
} from "@/components/global/dropdown";

// images
import NotificationIcon from "@/images/components/header/icons/notification.svg";

function HeaderNotification({ className }) {
    return (
        <>
            <DropDown className={className}>
                <DropDownHeader>
                    <IconButton type="not-button">
                        <Image
                            src={NotificationIcon}
                            height={20}
                            width={20}
                            alt="Notification Icon"
                            className="filter-light-green"
                        />
                    </IconButton>
                </DropDownHeader>
                <DropDownBody>
                    <div className="bg-white rounded-sm p-3 w-[200px] shadow-lg">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo temporibus, eos facere ex voluptates
                            ab sit ut tempora vitae quis?
                        </p>
                    </div>
                </DropDownBody>
            </DropDown>
        </>
    );
}

export default HeaderNotification;
