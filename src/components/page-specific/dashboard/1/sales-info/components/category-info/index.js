function CategoryInfo({ list_color, product }) {
    return (
        <>
            <li className="mb-[1rem] last:mb-0">
                <div className="relative pl-[1.125rem]">
                    {/* list circle */}
                    <div
                        className={` ${
                            list_color === "primary-light"
                                ? "bg-primary-light outline-primary-light/5"
                                : list_color === "info"
                                  ? "bg-info outline-info/5"
                                  : list_color === "warning"
                                    ? "bg-warning outline-warning/5"
                                    : list_color === "danger"
                                      ? "bg-danger outline-danger/5"
                                      : list_color === "secondary"
                                        ? "bg-secondary outline-secondary/5"
                                        : ""
                        }  h-[7px] w-[7px] outline-[4px] rounded-full outline absolute top-[7px] -left-[10px]`}></div>

                    {/* category info */}
                    <div className="flex items-start justify-between">
                        {/* category name and category products */}
                        <div>
                            {/* name and percentage */}
                            <h5 className="font-semibold text-dark text-button dark:text-white">
                                {product.name} ({product.percentage}%)
                            </h5>
                            <span className="font-semibold uppercase text-admin dark:text-neutral-500 text-vsm">
                                {product.category_products} Category Products
                            </span>
                        </div>
                        {/* total revenue */}
                        <div>
                            <span className="font-semibold text-dark dark:text-neutral-500 text-button">
                                $ {product.revenue}
                            </span>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default CategoryInfo;
