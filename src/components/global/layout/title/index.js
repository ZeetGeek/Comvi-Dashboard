// h3 title
export const H3Title = ({ children, className }) => {
    return (
        <h3
            className={` ${className} text-display-1 capitalize font-bold text-dark  `}>
            {children}
        </h3>
    );
};

// h4 title
export const H4Title = ({ children, className }) => {
    return (
        <h4
            className={` ${className} text-6xl capitalize font-bold text-dark dark:text-white`}>
            {children}
        </h4>
    );
};

// h5 title
export const H5Title = ({ children, className }) => {
    return (
        <h5
            className={` ${className} text-3xl capitalize text-dark dark:text-white font-semibold`}>
            {children}
        </h5>
    );
};
