/** @format */

import React, { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>('');

	return (
		<div>
			<span className='font-bold'>{activeItem}</span>
			<div>
				{activeItem !== 'About' && (
					<Link href='/' legacyBehavior>
						<span>About</span>
					</Link>
				)}
				{activeItem !== 'Projects' && (
					<Link href='/projects' legacyBehavior>
						<span>Projects</span>
					</Link>
				)}
				{activeItem !== 'Resume' && (
					<Link href='/resume' legacyBehavior>
						<span>Resume</span>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
