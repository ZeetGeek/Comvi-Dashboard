"use client";
const Option = ({ children, value, onSelect }) => {
     return (
         <div
             className="py-8 px-20 hover:bg-neutral-200/50  hover:dark:bg-neutral-700/60 cursor-pointer"
             onClick={() => onSelect(value)}>
             {children}
         </div>
     );
};

export default Option;
