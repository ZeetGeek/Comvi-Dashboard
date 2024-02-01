function LayoutBox({ children, className}) {
     return (
          <div className={`bg-white overflow-hidden rounded-md ${className} `}>
               {children}
          </div>
     );
}

export default LayoutBox;
