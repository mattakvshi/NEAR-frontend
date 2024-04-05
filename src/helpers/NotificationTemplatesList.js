import { emergencyType } from './EmergencyType';

const templatesList = [
	{
		id: '1',
		title: 'Earthquake of small power',
		selectedImg: `${process.env.PUBLIC_URL}/tmpTemplatesImg/image6.png`,
		emergencyType: emergencyType[0],
		date: 'Mar 9, 2023',
	},
	{
		id: '2',
		title: 'Djmfe kjqlf qqwlj',
		emergencyType: emergencyType[2],
		date: 'Apr 1, 2024',
	},
	{
		id: '3',
		title: 'The forest is burning near ...',
		selectedImg: `${process.env.PUBLIC_URL}/tmpTemplatesImg/image7.png`,
		emergencyType: emergencyType[4],
		date: 'Mar 2, 2023',
	},
	{
		id: '4',
		title: 'Ejlkj ekwjll',
		emergencyType: emergencyType[1],
		date: 'Apr 2, 2024',
	},
	{
		id: '5',
		title: 'Flkjfn jlq;ej',
		emergencyType: emergencyType[3],
		date: 'Feb 29, 2024',
	},
	{
		id: '6',
		title: 'Efklj wlkjrfel',
		emergencyType: emergencyType[5],
		date: 'Jan 11, 2024',
	},
];

export { templatesList };
