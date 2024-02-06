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
    error,
    onChange,
    onBlur,
}) => {
    // eyes open and close logic
    const [eyesOpen, setEyesOpen] = useState(false);

    return (
        <>
            <div className="mb-16 last:mb-0">
                <label
                    className="uppercase text-admin font-semibold text-button mb-8 block dark:text-neutral-400"
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
                        className={`${className}  block w-full bg-light dark:bg-neutral-800 dark:border-neutral-700 border-2  py-13 px-16 rounded-vsm text-sm text-admin dark:text-neutral-400 font-normal focus:outline-none focus:border-primary  ${
                            error === null
                                ? "focus:border-primary border-primary-lightest"
                                : "focus:border-danger border-danger"
                        } `}
                        name={name}
                        id={id}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
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

                {/* error */}
                {error === null ? null : (
                    <p className="text-danger text-button mt-8 font-semibold">
                        {error}
                    </p>
                )}
            </div>
        </>
    );
};

export default InputField;
