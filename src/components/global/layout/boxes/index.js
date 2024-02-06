// dependencies
import Image from "next/image";

// components
import { H4Title } from "@/components/global/layout/title";

// images
import Logo from "@/images/logo/Logo-icon.svg";

// layout box
export const LayoutBox = ({ children, className }) => {
    return (
        <div
            className={`${className} bg-white overflow-hidden rounded-md dark:bg-neutral-900 `}>
            {children}
        </div>
    );
};

// authentication box
export const AuthenticationBox = ({
    children,
    className,
    title,
    description,
}) => {
    return (
        <>
            <div
                className={`${className} bg-white p-80 rounded-lg shadow-authentication-box dark:bg-neutral-900 w-full max-w-[648px] flex items-center justify-center flex-col`}>
                {/* logo, title and description */}
                <div className="text-center mb-24">
                    {/* logo icon image */}
                    <Image
                        src={Logo}
                        height={70}
                        width={70}
                        alt="Comvi Logo"
                        className="inline-block"
                    />

                    {/* title */}
                    <div className="mt-15 mb-8">
                        <H4Title>{title}</H4Title>
                    </div>

                    {/* description */}
                    <div className="mx-auto w-full max-w-[202px]">
                        <p className="text-admin text-sm normal-case font-normal dark:text-neutral-400">
                            {description}
                        </p>
                    </div>
                </div>

                {children}
            </div>
        </>
    );
};
