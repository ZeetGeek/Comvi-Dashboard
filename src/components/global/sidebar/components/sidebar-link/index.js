"use client";

// dependencies
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// images
import SubmenuIcon from "@/images/components/sidebar/menu-links-icons/submenu-icon.svg";

// css
import style from "./sidebar-link.module.scss";

function SidebarLink({
     icon,
     text,
     notification,
     submenu,
     navigate,
     submenu_links,
}) {
     // get pathname and active sidebar menu link logic
     const pathname = usePathname();

     // submenu open and close logic
     const [submenuOpen, isSubmenuOpen] = useState(false);

     return (
          <>
               <li className={style.menu_links_wrapper}>
                    {submenu ? (
                         <>
                              <button
                                   onClick={() => isSubmenuOpen(!submenuOpen)}
                                   name={text}
                                   className={` ${
                                        pathname === navigate
                                             ? style.active
                                             : ""
                                   } flex items-center justify-between px-[1.5rem] py-[0.75rem]  duration-300 hover:bg-white/10 w-full`}
                              >
                                   {/* icon and text */}
                                   <div className="flex items-center gap-[0.93rem]">
                                        <Image
                                             src={icon.src}
                                             height={24}
                                             width={16}
                                             alt={icon.alt}
                                        />
                                        <span className="text-white text-lg capitalize font-semibold">
                                             {text}
                                        </span>
                                   </div>

                                   {/* notification or submenu */}
                                   <div>
                                        <div
                                             className={` ${submenuOpen ? style.submenu_active : ""} h-[1.5rem] w-[1.5rem] rounded-[0.25rem] flex items-center justify-center `}
                                        >
                                             <Image
                                                  src={SubmenuIcon}
                                                  width={14}
                                                  height={10}
                                                  alt="submenu toggle icon"
                                                  className="duration-300"
                                             />
                                        </div>
                                   </div>
                              </button>

                              {/* submenu  */}

                              {submenuOpen ? (
                                   <>
                                        <div className="mt-3">
                                             <ul className="list-disc ps-[3rem] pe-[1.5rem] marker:text-white">
                                                  {submenu_links.map(
                                                       (item, index) => (
                                                            <>
                                                                 <li
                                                                      key={
                                                                           index
                                                                      }
                                                                      className={`mb-4 ${style.submenu_links_wrapper} ${
                                                                           pathname ===
                                                                           item.navigate
                                                                                ? style.submenu_parent_active
                                                                                : ""
                                                                      } `}
                                                                 >
                                                                      <Link
                                                                           className={`inline-block text-md text-white font-semibold duration-300 hover:text-white/80 `}
                                                                           href={
                                                                                item.navigate
                                                                           }
                                                                           alt={
                                                                                item.title
                                                                           }
                                                                      >
                                                                           {
                                                                                item.text
                                                                           }
                                                                      </Link>
                                                                 </li>
                                                            </>
                                                       )
                                                  )}
                                             </ul>
                                        </div>
                                   </>
                              ) : (
                                   <></>
                              )}
                         </>
                    ) : (
                         <>
                              <Link
                                   href={navigate}
                                   title={text}
                                   className={` ${style.menu_link} ${
                                        pathname === navigate
                                             ? style.active
                                             : ""
                                   } flex items-center justify-between px-[1.5rem] py-[0.75rem]  duration-300 hover:bg-white/10`}
                              >
                                   {/* icon and text */}
                                   <div className="flex items-center gap-[0.93rem]">
                                        <Image
                                             src={icon.src}
                                             height={24}
                                             width={16}
                                             alt={icon.alt}
                                        />
                                        <span className="text-white text-lg capitalize font-semibold">
                                             {text}
                                        </span>
                                   </div>

                                   {/* notification */}
                                   <div>
                                        {typeof notification === "number" ? (
                                             <>
                                                  <div className="h-[1.5rem] w-[1.5rem] bg-secondary rounded-[0.25rem] flex items-center justify-center leading-[0px]">
                                                       <span className="text-sm text-white font-semibold">
                                                            {notification}
                                                       </span>
                                                  </div>
                                             </>
                                        ) : (
                                             <></>
                                        )}
                                   </div>
                              </Link>
                         </>
                    )}
               </li>
          </>
     );
}

export default SidebarLink;
