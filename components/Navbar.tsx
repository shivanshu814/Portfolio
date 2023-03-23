/** @format */

import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
	activeItem: string;
	setActiveItem: Function;
	name: string;
	route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
	return activeItem !== name ? (
		<Link href={route} legacyBehavior>
			<span onClick={() => setActiveItem(name)}>{name}</span>
		</Link>
	) : null;
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>('');

	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === '/') setActiveItem('About');
		if (pathname === '/projects') setActiveItem('Projects');
		if (pathname === '/resume') setActiveItem('Resume');
	}, []);
	return (
		<div>
			<span className='font-bold text-green'>{activeItem}</span>
			<div className='flex space-x-3 text-red-600 cursor-pointer font-lg'>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='About'
					route='/'></NavItem>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Projects'
					route='/projects'></NavItem>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Resume'
					route='/resume'></NavItem>
			</div>
		</div>
	);
};

export default Navbar;
