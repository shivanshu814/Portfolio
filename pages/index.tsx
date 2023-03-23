/** @format */

import { Inter } from 'next/font/google';
import { services } from '../data';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	console.log(services);
	return (
		<div>
			<h1>hello world this is shivanshu</h1>
		</div>
	);
}
