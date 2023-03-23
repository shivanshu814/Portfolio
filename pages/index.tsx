/** @format */

import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Inter } from 'next/font/google';
import { services } from '../data';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	console.log('CLIENT', services);
	return (
		<div>
			<h1>hello world this is shivanshu</h1>
		</div>
	);
}
// export const getServerSideProps = async (
// 	context: GetServerSidePropsContext
// ) => {
// 	const res = await fetch('http://localhost:3000/api/services');
// 	const data = await res.json();
// 	console.log('SERVER', services);
// 	return {
// 		props: { services: data.services },
// 	};
// };

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const res = await fetch('http://localhost:3000/api/services');
	const data = await res.json();
	console.log('SERVER', services);
	return {
		props: { services: data.services },
	};
};
