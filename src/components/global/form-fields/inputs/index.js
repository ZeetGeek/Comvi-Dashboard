"use client";

// dependencies
import { useState } from "react";
import Image from "next/image";

// images
import EyesOpenIcon from "@/images/components/form-fields/inputs/password/eyes-open.svg";
import EyesCloseIcon from "@/images/components/form-fields/inputs/password/eyes-close.svg";


// components
import IconButton from "@/components/global/theme-buttons/icon-button";

// text input
export const InputField = ({
    label,
    name,
    className,
    id,
    placeholder,
    type,
    value,
}) => {
    // eyes open and close logic
    const [eyesOpen, setEyesOpen] = useState(false);

    return (
        <>
            <div className="mb-16 last:mb-0">
                <label
                    className="uppercase text-admin font-semibold text-button mb-8 block"
                    htmlFor={name}>
                    {label}
                </label>

                <div className="relative">
                    <input
                        type={
                            type === "password"
                                ? eyesOpen
                                    ? "text"
                                    : "password"
                                : type
                        }
                        placeholder={placeholder}
                        className={`${className}  block w-full bg-light border-2 border-primary-lightest py-13 px-16 rounded-vsm text-sm text-admin font-normal focus:outline-none focus:border-primary invalid:border-danger invalid:text-danger focus:invalid:border-danger focus:invalid:ring-danger`}
                        name={name}
                        id={id}
                        value={value}
                    />

                    {/* password hide and show button */}
                    {type === "password" && (
                        <>
                            <IconButton
                                className="absolute top-[50%] right-10 translate-y-[-50%]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setEyesOpen(!eyesOpen);
                                }}>
                                <Image
                                    src={
                                        eyesOpen ? EyesCloseIcon : EyesOpenIcon
                                    }
                                    height={20}
                                    width={20}
                                    alt={
                                        eyesOpen
                                            ? "Eyes Close Icon"
                                            : "Eyes Open Icon"
                                    }
                                />
                            </IconButton>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default InputField;
