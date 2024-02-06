"use client"

// dependencies
import { useState, cloneElement, useEffect } from "react";
import Image from "next/image";

// images
import DropdownIcon from "@/images/components/form-fields/select-option/icons/dropdown.svg"

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
                 className="cursor-pointer border-[1px] rounded-vsm border-primary-lightest dark:border-neutral-700  bg-light dark:bg-neutral-800 py-8 px-20 flex items-center justify-between hover:bg-neutral-200/50 hover:dark:bg-neutral-700/60 "
                 onClick={() => setIsOpen(!isOpen)}>
                 <span className="text-sm font-normal capitalize text-admin dark:text-neutral-100">
                     {selectedValue}
                 </span>

                 <Image
                     src={DropdownIcon}
                     height={10}
                     width={9}
                     alt={"dropdown icon"}
                     className="filter-white"
                 />
             </div>
             {isOpen && (
                 <div className="absolute z-10 w-full border-[1px] rounded-vsm border-primary-lightest dark:border-neutral-700  bg-light dark:bg-neutral-800  mt-2">
                     <span className="text-sm font-normal capitalize text-admin dark:text-neutral-100">
                         {renderedOptions}
                     </span>
                 </div>
             )}
         </div>
     );
};

export default Select;
