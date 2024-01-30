// dependencies
import Image from "next/image";

// components
import SidebarTitle from "./components/sidebar-title";
import SidebarLink from "./components/sidebar-link";

// images
import logoIcon from "@/images/logo/logo-icon.png";
import advertiseImage from "@/images/components/sidebar/advertise-image.png";

// data
import { menuLinks } from "@/data/components/sidebar";
import { otherLinks } from "@/data/components/sidebar";

function Sidebar() {
	return (
		<>
			<div className='h-full bg-primary rounded-lg overflow-auto'>
				<div className='flex flex-col justify-between h-full'>
					{/* sidebar menu links and other links */}
					<div>
						{/* logo */}
						<div className='px-[1.5rem] pt-[1.5rem] pb-[2rem]'>
							<button className='flex items-center gap-[0.56rem]' name='comvi logo'>
								<Image src={logoIcon} height={40} width={40} alt='comvi logo icon' />
								<span className='text-white font-bold text-5xl'>Comvi</span>
							</button>
						</div>

						{/* menu links */}
						<div>
							<div className='px-[1.5rem] pb-[1.5rem]'>
								{/* title */}
								<SidebarTitle>Menu</SidebarTitle>
							</div>
							{/* menu links */}
							<div>
								<ul>
									{menuLinks.map((item) => (
										<SidebarLink
											key={item.id}
											icon={item.icon}
											text={item.text}
											navigate={item.navigate}
											notification={item.notification}
											submenu={item.submenu}
											submenu_links={item.submenu_links}
										/>
									))}
								</ul>
							</div>
						</div>

						{/* divider */}
						<div className='px-[1.5rem] pt-[1.75rem]  pb-[2.5rem]'>
							<div className='w-full h-[1px] bg-slider-divider'></div>
						</div>

						{/* other links */}
						<div>
							<div className='px-[1.5rem] pb-[1.5rem]'>
								{/* title */}
								<SidebarTitle>Other</SidebarTitle>
							</div>
							{/* other links */}
							<div>
								<ul>
									{otherLinks.map((item) => (
										<SidebarLink
											key={item.id}
											icon={item.icon}
											text={item.text}
											navigate={item.navigate}
											notification={item.notification}
											submenu={item.submenu}
										/>
									))}
								</ul>
							</div>
						</div>
					</div>

					{/* sidebar advertise */}
					<div className=' px-[1.5rem] pb-[1.5rem] mt-[3.125rem]'>
						<div className='rounded-md p-[1.5rem] bg-slider-add-bg relative overflow-hidden'>
							{/* advertise title */}
							<div className='mb-[8rem] relative z-[2]'>
								<h5 className='text-white text-3xl capitalize font-bold '>Improve Your Sales Efficiency </h5>
							</div>

							{/* advertise image */}
							<div className='absolute -bottom-[28px] -left-[20px] z-[1] '>
								<Image src={advertiseImage} height={239} width={256} alt={"advertise image"} />
							</div>

							{/* advertise button */}
							<div className='relative z-[2]'>
								<button className='bg-warning text-center w-full py-[0.625rem] rounded-[0.625rem] text-dark text-md font-semibold capitalize'>
									Start Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sidebar;