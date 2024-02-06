function IconButton({ children, color, onClick, className, name }) {
    return (
        <>
            <button
                onClick={onClick}
                name={name}
                className={`${className} ${color === "default" ? "bg-transparent hover:bg-neutral-200" : color === "white" ? "bg-light border-[1px] border-primary-lightest hover:bg-neutral-200" : "bg-transparent hover:bg-primary/10 dark:hover:bg-white/10"} h-[2.25rem] rounded-vsm w-[2.25rem] flex items-center justify-center duration-300`}>
                {children}
            </button>
        </>
    );
}

export default IconButton;
