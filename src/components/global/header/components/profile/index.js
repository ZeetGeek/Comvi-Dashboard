// dependencies
import Image from "next/image";

// components
import {
    DropDown,
    DropDownHeader,
    DropDownBody,
} from "@/components/global/dropdown";

// images
import avatar from "@/images/components/header/avatar.jpg";

export default function HeaderProfile() {
    return (
        <>
            <DropDown>
                <DropDownHeader>
                    <div className="flex items-center gap-10  duration-300 bg-transparent hover:bg-primary/10 hover:dark:bg-white/10 md:py-[5px] py-10 px-10 rounded-vsm">
                        <div className="h-[2.5rem] w-[2.5rem] rounded-full border border-color-avatar-border">
                            <Image
                                src={avatar}
                                height={40}
                                width={40}
                                alt="Avatar"
                                className="object-cover rounded-full"
                            />
                        </div>
                        <div className=" hidden md:flex flex-col items-start">
                            <span className="font-bold capitalize text-dark text-md dark:text-white">
                                Gladys Kanyinda
                            </span>
                            <span className="font-normal capitalize text-vsm text-admin dark:text-neutral-300">
                                Admin
                            </span>
                        </div>
                    </div>
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
