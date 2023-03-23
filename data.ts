/** @format */
import { icons } from 'react-icons/lib';
import { RiComputerLine } from 'react-icons/ri';
import { IconType } from 'react-icons';
import { IService } from './type';
import { SiAltiumdesigner, SiBackendless, SiCodersrank } from 'react-icons/si';
import { ImAndroid } from 'react-icons/im';

export const services: IService[] = [
	{
		title: 'Front end Developer',
		about: 'lorem epsum......',
		Icon: RiComputerLine,
	},
	{
		title: 'Back end Developer',
		about: 'lorem epsum......',
		Icon: SiBackendless,
	},
	{
		title: 'Android Developer',
		about: 'lorem epsum......',
		Icon: ImAndroid,
	},
	{
		title: 'UI/UX Designer',
		about: 'lorem epsum......',
		Icon: SiAltiumdesigner,
	},
	{
		title: 'Competitive Coder',
		about: 'lorem epsum......',
		Icon: SiCodersrank,
	},
];
