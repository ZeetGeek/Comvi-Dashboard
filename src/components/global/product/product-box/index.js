// dependencies
import Image from "next/image";

export default function ProductBox({ image,name, category, price }) {
    return (
        <>
            <div className="rounded-sm overflow-hidden border border-primary-lightest">
                {/* product image */}
                <div className="h-[192px]">
                    <Image
                        src={image.src}
                        height={300}
                        width={300}
                        alt={image.alt}
                        className="object-cover h-[192px] w-full"
                    />
                </div>
                {/* product info */}
                <div className="px-16 pb-16 pt-12">
                    {/* name */}
                    <h5 className="text-button capitalize text-dark font-semibold">
                        {name}
                    </h5>
                    {/* category */}
                    <span className="text-admin text-vsm uppercase font-normal block my-8">
                        Category: {category}
                    </span>
                    {/* price */}
                    <span className="text-lg text-dark font-bold block">
                        ${price}
                    </span>
                </div>
            </div>
        </>
    );
}
