import './selectRecipientsList.css';

import { usersInfo } from '../../../../helpers/UsersInfo';

const SelectRecipientsList = ({ groups, friends }) => {
	const userInfoDTO = () => {
		return usersInfo.map(
			({ id, name, city, district, notificationOptions, friend }) => ({
				id,
				name,
				city,
				district,
				notificationOptions,
				friend,
			})
		);
	};

	//console.log(userInfoDTO());

	const currentFriendsList = () => {
		return userInfoDTO().filter(user =>
			friends.some(currentUser => currentUser.id === user.id)
		);
	};

	console.log(currentFriendsList());

	return (
		<div className='select-recipients-wrapper'>
			<div className='list-header'></div>
			<ul></ul>
		</div>
	);
};
export default SelectRecipientsList;
