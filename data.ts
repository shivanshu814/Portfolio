/** @format */
import { icons } from 'react-icons/lib';
import { RiComputerLine } from 'react-icons/ri';
import { IconType } from 'react-icons';

interface IService {
	title: string;
	about: string;
	Icon: IconType;
}

export const services: IService[] = [
	{
		title: 'Front end Developer',
		about: 'lorem epsum......',
		Icon: RiComputerLine,
	},
	{
		title: 'Back end Developer',
		about: 'lorem epsum......',
		Icon: RiComputerLine,
	},
	{
		title: 'Android Developer',
		about: 'lorem epsum......',
		Icon: RiComputerLine,
	},
];
