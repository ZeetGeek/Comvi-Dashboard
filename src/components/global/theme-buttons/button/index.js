function Button({ children, size, color, className, name, gap }) {
     return (
          <>
               <button
                    className={` ${className} ${
                         size === "default"
                              ? "py-[0.375rem] px-[1.25rem] "
                              : size === "medium"
                                ? "py-[0.625rem] px-[1.5rem]"
                                : size === "large"
                                  ? "py-[0.6875rem] px-[1.75rem]"
                                  : size === "extra-large"
                                    ? "py-[0.9375rem] px-[2.1875rem]"
                                    : "py-[0.375rem] px-[1.25rem]"
                    } ${
                         color === "default"
                              ? "bg-light border-[1px] border-primary-lightest hover:bg-neutral-100 text-admin"
                              : color === "primary"
                                ? "bg-primary hover:bg-secondary text-white"
                                : color === "secondary"
                                  ? "bg-secondary hover:bg-primary text-white"
                                  : color === "warning"
                                    ? "bg-warning hover:bg-light text-dark"
                                    : "bg-light border-[1px] border-primary-lightest hover:bg-neutral-100 text-admin"
                    } rounded-vsm text-button duration-300 flex text-center justify-center font-semibold gap-${gap} `}
                    name={name}
               >
                    {children}
               </button>
          </>
     );
}

export default Button;
