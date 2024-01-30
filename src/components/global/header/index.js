"use client";

// dependencies
import { useState } from "react";
import Image from "next/image";

// images
import sidebarOpenIcon from "@/images/components/header/icons/open.svg";
import sidebarCloseIcon from "@/images/components/header/icons/close.svg";
import searchIcon from "@/images/components/header/icons/search.svg";
import notificationIcon from "@/images/components/header/icons/notification.svg";
import sunIcon from "@/images/components/header/icons/sun.svg";
import moonIcon from "@/images/components/header/icons/moon.svg";
import cartIcon from "@/images/components/header/icons/cart.svg";

import avatar from "@/images/components/header/avatar.jpg";

function Header() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isDarkModeEnable, setIsDarkModeEnable] = useState(false);

	return (
		<>
			<header>
				<div className='flex items-center justify-between'>
					{/* sidebar toggle button and page title */}
					<div className='flex items-center gap-[1.1875rem]'>
						{/* toggle button */}
						<button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='h-[1.5rem] w-[1.312rem]'>
							{isSidebarOpen ? (
								<>
									<Image src={sidebarCloseIcon} height={24} width={21} alt='Sidebar Close Icon' />
								</>
							) : (
								<>
									<Image src={sidebarOpenIcon} height={24} width={21} alt='Sidebar Open Icon' />
								</>
							)}
						</button>

						{/* page title */}
						<span className='text-dark font-bold text-6xl'>Dashboard</span>
					</div>

					{/* other icons and profile */}
					<div className='flex items-center'>
						<div className='flex items-center gap-[2rem]'>
							{/* search */}
							<button className='h-[1.5rem] w-[1.5rem]'>
								<Image src={searchIcon} height={24} width={24} alt='Search Icon' />
							</button>

							{/* notification */}
							<button className='h-[1.5rem] w-[1.5rem] relative'>
								<Image src={notificationIcon} height={20} width={21} alt='Notification Icon' />
								<div className='absolute -right-[2px] -top-[2px] rounded-full flex items-center justify-center bg-danger h-[1rem] w-[1rem]'>
									<span className='text-white text-vsm'>1</span>
								</div>
							</button>

							{/* light and dark mode */}
							<button className='h-[1.5rem] w-[1.5rem]' onClick={() => setIsDarkModeEnable(!isDarkModeEnable)}>
								{isDarkModeEnable ? (
									<>
										<Image src={sunIcon} height={24} width={24} alt='Sun Icon' />
									</>
								) : (
									<>
										<Image src={moonIcon} height={24} width={24} alt='Moon Icon' />
									</>
								)}
							</button>

							{/* cart icon */}
							<button className='h-[1.5rem] w-[1.5rem] relative'>
								<Image src={cartIcon} height={20} width={27} alt='Cart Icon' />
								<div className='absolute -right-[2px] -top-[2px] rounded-full flex items-center justify-center bg-primary-light h-[1rem] w-[1rem]'>
									<span className='text-white text-vsm'>3</span>
								</div>
							</button>
						</div>

						{/* divider */}
						<div className='h-[3.43rem] w-[1px] bg-primary-lightest ms-[1.87rem] me-[2.18rem]'></div>

						{/* profile */}
						<div className='flex items-center gap-[0.625rem]'>
							<div className='h-[2.5rem] w-[2.5rem] rounded-full bg-purple-300 border-[1px] border-color-avatar-border'>
								<Image src={avatar} height={40} width={40} alt='Avatar' className='rounded-full object-cover' />
							</div>
							<div className='flex flex-col items-start'>
								<span className='text-dark text-md font-bold capitalize'>Gladys Kanyinda</span>
								<span className='text-vsm text-admin font-normal capitalize'>Admin</span>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
