"use client";
const Option = ({ children, value, onSelect }) => {
     return (
          <div
               className="py-[0.5rem] px-[1.25rem] hover:bg-neutral-200/50 cursor-pointer duration-300"
               onClick={() => onSelect(value)}
          >
               {children}
          </div>
     );
};

export default Option;
