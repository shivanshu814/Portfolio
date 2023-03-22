/** @format */

import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { GoLocation } from 'react-icons/go';
import { ImProfile } from 'react-icons/im';
const Sidebar = () => {
	return (
		<div>
			<img
				src='https://media.licdn.com/dms/image/C4D03AQFEsyMECbhHfA/profile-displayphoto-shrink_800_800/0/1667972114483?e=2147483647&v=beta&t=H8xxDOgEyLpi_4jhdIiFRE5M0cQuh8f8r_S8yOokz-U'
				alt='user avatar'
				className='w-32 h-32 mx-auto rounded-full'
			/>
			<h1 className='my-4 text-3xl font-medium tracking-wider'>
				<span>Shivanshu</span> Pathak
			</h1>
			<p className='px-2 py-1 my-3 bg-orange-400 rounded-full'>Web Developer</p>
			<p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>
				Software Developer
			</p>
			<p className='px-2 py-1 my-3 bg-green-700 rounded-full'>
				Android Developer
			</p>
			<a
				className='flex items-center justify-center px-2 py-1 my-3 bg-blue-500 rounded-full'
				href='https://www.linkedin.com/in/shivanshu-pathak-6611b5228/'
				download='name'>
				<ImProfile className='w-4 h-4' /> Download Resume
			</a>
			{/* social media */}
			<div className='flex justify-around w-9/12 mx-auto my-5 text-black-700 md:w-full'>
				<a href='https://www.linkedin.com/in/shivanshu-pathak-6611b5228/'>
					<FaLinkedin className='w-6 h-6' cursor-pointer />
				</a>

				<a href='https://github.com/shivanshu814'>
					<AiFillGithub className='w-6 h-6' cursor-pointer />
				</a>

				<a href='https://www.codechef.com/users/shivanshu814'>
					<SiCodechef className='w-6 h-6' cursor-pointer />
				</a>
			</div>
			<br></br>
			{/* address */}
			<div>
				<GoLocation className='w-6 h-6' />
				<div>
					<span>Greater Noida, Uttar Pradesh 201310</span>
				</div>
				<p>shivanshu814pathak@gmail.com</p>
				<p>+91 9893628988 / +91 8595438920</p>
			</div>

			{/* contact */}
			<button>Email me</button>
			{/* Theme */}
			<button>UI Theme</button>
		</div>
	);
};

export default Sidebar;
