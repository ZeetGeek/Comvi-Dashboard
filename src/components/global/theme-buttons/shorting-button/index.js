// dependencies
import Image from "next/image";

// image
import ShortingIcon from "@/images/components/shorting-button/icon/shorting-icon.svg";

export default function ShortingButton({ children }) {
     return (
          <button className="px-[0.5rem] -ms-[0.375rem] uppercase py-[0.375rem] flex items-center justify-center gap-[0.5625rem] bg-transparent hover:bg-neutral-100 rounded-[5px]">
               {children}{" "}
               <Image
                    src={ShortingIcon}
                    height={16}
                    width={6}
                    alt="shorting icon"
               />
          </button>
     );
}
