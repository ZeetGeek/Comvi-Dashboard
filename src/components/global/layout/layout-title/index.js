export default function LayoutTitle({ children, className }) {
     return <h5 className={`text-3xl capitalize text-dark font-semibold dark:text-white ${className}`}>{children}</h5>;
}
