function Button({ children, size, color, className, name, gap, type }) {
     return (
         <>
             <button
                 className={` ${className} ${
                     size === "default"
                         ? "py-6 px-20 "
                         : size === "medium"
                           ? "py-10 px-24"
                           : size === "large"
                             ? "py-[0.6875rem] px-28"
                             : size === "extra-large"
                               ? "lg:py-[15px] md:py-[12px] py-[10px] px-32 min-h-[40px]"
                               : "py-6 px-20"
                 } ${
                     color === "default"
                         ? "bg-light border-[1px] border-primary-lightest hover:bg-neutral-100 text-admin dark:bg-neutral-700 dark:text-white dark:border-transparent dark:hover:bg-neutral-800"
                         : color === "primary"
                           ? "bg-primary hover:bg-secondary text-white dark:bg-primary-light dark:hover:bg-primary-light/80"
                           : color === "secondary"
                             ? "bg-secondary hover:bg-primary text-white"
                             : color === "warning"
                               ? "bg-warning hover:bg-light text-dark"
                               : "bg-light border-[1px] border-primary-lightest hover:bg-neutral-100 text-admin dark:bg-neutral-700 dark:text-white dark:border-transparent dark:hover:bg-neutral-800"
                 } rounded-vsm text-button duration-300 flex text-center justify-center font-semibold gap-${gap} flex items-center justify-center `}
                 name={name}
                 type={type}>
                 {children}
             </button>
         </>
     );
}

export default Button;
