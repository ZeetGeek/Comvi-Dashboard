export const Table = ({ children, className }) => (
    <div className="overflow-x-auto rounded-sm border border-primary-lightest dark:border-neutral-700">
        <table className={` ${className} w-full`}>
            {children}
        </table>
    </div>
);

export const TableHead = ({ children, className }) => (
    <thead
        className={`${className} border-b-[1px] border-primary-lightest dark:border-neutral-700`}>
        {children}
    </thead>
);

export const Th = ({ children, className, align }) => (
    <th
        className={` ${className} ${
            align === "right" ? "text-right" : "text-left"
        } uppercase text-vsm text-admin text-semibold `}>
        {children}
    </th>
);

export const Tr = ({ children, className }) => (
    <tr
        className={` ${className} flex items-center justify-between py-[1rem] px-20 border-b-[1px] last:border-0 first:border-t-0 border-primary-lightest dark:border-neutral-700 w-full duration-300 `}>
        {children}
    </tr>
);

export const TableBody = ({ children, className }) => (
    <tbody className={` ${className} `}>{children}</tbody>
);

export const Td = ({ children, className }) => (
    <td className={` ${className}`}>{children}</td>
);
