export const Table = ({ children, className }) => (
     <div className="overflow-hidden rounded-sm border-[1px] border-primary-lightest">
          <table className={` ${className} overflow-auto w-full`}>
               {children}
          </table>
     </div>
);

export const TableHead = ({ children, className }) => (
     <thead className={`${className}`}>{children}</thead>
);

export const Th = ({ children, className, align }) => (
     <th
          className={` ${className} ${
               align === "right" ? "text-right" : "text-left"
          } uppercase text-vsm text-admin text-semibold`}
     >
          {children}
     </th>
);

export const Tr = ({ children, className }) => (
     <tr
          className={` ${className} py-[1rem] px-[1.25rem] border-b-[1px] last:border-0 border-primary-lightest block w-full duration-300 `}
     >
          {children}
     </tr>
);

export const TableBody = ({ children, className }) => (
     <tbody className={` ${className} border-t-[1px]`}>{children}</tbody>
);

export const Td = ({ children, className }) => (
     <td className={` ${className}`}>{children}</td>
);
