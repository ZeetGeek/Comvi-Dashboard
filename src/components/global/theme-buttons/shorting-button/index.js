// dependencies
import Image from "next/image";

// image
import ShortingIcon from "@/images/components/shorting-button/icon/shorting-icon.svg";

export default function ShortingButton({ children }) {
     return (
          <button className="px-8 -ms-6 uppercase py-6 flex items-center justify-center gap-[0.5625rem] bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-[5px]">
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
