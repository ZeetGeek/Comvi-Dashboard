"use client"

// dependencies
import { useState, cloneElement, useEffect } from "react";
import Image from "next/image";

// images
import DropdownIcon from "@/images/components/input-fields/select-option/icons/dropdown.svg"

const Select = ({ children }) => {
     const [isOpen, setIsOpen] = useState(false);
     const [selectedValue, setSelectedValue] = useState("");

     // Set the initial selected value to the first child's value
     useEffect(() => {
          if (children.length > 0 && children[0].props.value) {
               setSelectedValue(children[0].props.value);
          }
     }, [children]);

     const handleSelect = (value) => {
          setSelectedValue(value);
          setIsOpen(false);
     };

     const renderedOptions = children.map((child, index) =>
          cloneElement(child, {
               key: index,
               onSelect: handleSelect,
          })
     );

     return (
          <div className="relative">
               <div
                    className="cursor-pointer border-[1px] rounded-vsm border-primary-lightest bg-light py-[0.5rem] px-[1.25rem] flex items-center justify-between hover:bg-neutral-200/50 duration-300"
                    onClick={() => setIsOpen(!isOpen)}
               >
                    <span className="text-admin capitalize text-sm font-normal">
                         {selectedValue}
                    </span>

                    <Image
                         src={DropdownIcon}
                         height={10}
                         width={9}
                         alt={"dropdown icon"}
                    />
               </div>
               {isOpen && (
                    <div className="absolute z-10 w-full border-[1px] rounded-vsm border-primary-lightest bg-light mt-2">
                         <span className="text-admin capitalize text-sm font-normal">
                              {renderedOptions}
                         </span>
                    </div>
               )}
          </div>
     );
};

export default Select;
