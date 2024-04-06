const usersInfo = [
	{
		id: 'mattakvshi',
		name: 'Maksim Sidorenko',
		country: 'Russia',
		city: 'Krasnodar',
		district: 'Severny',
		profileImg: `${process.env.PUBLIC_URL}/tmpProfileImg/8_IMG_3596.jpg`,
		notificationOptions: [{ id: '1' }, { id: '2' }, { id: '3' }],
		groups: [
			{
				groupID: '23455',
				groupName: 'Family',
				selectedColor: '#FF4C2B',
			},
			{
				groupID: '56325',
				groupName: 'Colleagues',
				selectedColor: '#FF4C2B',
			},
		],
		friends: [{ id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }],
		templates: [{ id: '1' }, { id: '3' }],
	},
	{
		id: '2',
		name: 'Anton Ivanov',
		country: 'Russia',
		city: 'Krasnodar',
		district: 'Polini Osipenko',
		notificationOptions: [{ id: '1' }, { id: '2' }, { id: '3' }],
		groups: [
			{
				groupID: '27357',
				groupName: 'Family',
				selectedColor: '#FF4C2B',
			},
			{
				groupID: '28564',
				groupName: 'Neighbors',
				selectedColor: '#344756',
			},
			{
				groupID: '73898',
				groupName: 'Homies',
				selectedColor: '#480059',
			},
		],
		templates: [{ id: '2' }, { id: '4' }, { id: '5' }, { id: '6' }],
	},
	{
		id: '3',
		name: 'Aleksandr Emelyanenko',
		notificationOptions: [{ id: '1' }, { id: '2' }],
		country: 'Russia',
		city: 'Krasnodar',
		district: 'Kamsamolsky',
		groups: [
			{
				groupID: '23455',
				groupName: 'Groupmates',
				selectedColor: '#098092',
			},
			{
				groupID: '56325',
				groupName: 'Classmates',
				selectedColor: '#3093',
			},
		],
	},
	{
		id: '4',
		name: 'Dmitry Vladarchuk',
		country: 'Russia',
		city: 'Krasnodar',
		district: 'East depot',
		notificationOptions: [{ id: '1' }, { id: '3' }],
		groups: [
			{
				groupID: '23455',
				groupName: 'Closers',
				selectedColor: '#436334',
			},
			{
				groupID: '56325',
				groupName: 'Homies',
				selectedColor: '#ff9309',
			},
		],
	},
	{
		id: '5',
		name: 'Yuriy Sankin',
		country: 'Russia',
		city: 'Krasnodar',
		district: 'Panorama',
		notificationOptions: [{ id: '3' }],
	},
];

export { usersInfo };
