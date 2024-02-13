// table wrapper
export const TableWrapper = ({ children, className }) => (
    <div className={`${className} overflow-x-auto rounded-sm border border-primary-lightest dark:border-neutral-700`}>{children}</div>
);

// table
export const Table = ({ children, className }) => <table className={` ${className} w-full table-auto`}>{children}</table>;

// table head
export const TableHead = ({ children, className }) => <thead className={`${className} sticky top-0 border-primary-lightest dark:border-neutral-700`}>{children}</thead>;

// th
export const Th = ({ children, className, align }) => (
    <th className={` ${className} ${align === "right" ? "text-right" : "text-left"}  bg-white dark:bg-neutral-900 uppercase text-vsm text-admin text-semibold `}>{children}</th>
);

// tr
export const Tr = ({ children, className }) => (
    <tr className={` ${className}  py-[1rem] px-20 border-b-[1px] last:border-0 first:border-t-0 border-primary-lightest dark:border-neutral-700 w-full duration-300 `}>
        {children}
    </tr>
);

// table body
export const TableBody = ({ children, className }) => <tbody className={` ${className} `}>{children}</tbody>;

// table data
export const Td = ({ children, className }) => <td className={` ${className}`}>{children}</td>;
