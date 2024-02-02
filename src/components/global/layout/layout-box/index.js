function LayoutBox({ children, className}) {
     return (
          <div className={`${className} bg-white overflow-hidden rounded-md  dark:bg-neutral-900 `}>
               {children}
          </div>
     );
}

export default LayoutBox;
