import './selectRecipientsList.css';

import { usersInfo } from '../../../../helpers/UsersInfo';
import RecipientsItem from '../RecipientsItem/RecipientsItem';
import ListLine from '../../ListLine/ListLine';
import SmallDivider from '../../SmallDivider/SmallDivider';

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

	const groupsDTO = () => {
		return groups.map(
			({ groupID, groupName, notificationOptions, city, district }) => ({
				groupID,
				groupName,
				notificationOptions,
				city,
				district,
			})
		);
	};

	//console.log(userInfoDTO());

	const currentFriendsList = () => {
		return userInfoDTO().filter(user =>
			friends.some(currentUser => currentUser.id === user.id)
		);
	};

	//console.log(currentFriendsList());

	return (
		<div className='select-recipients-wrapper'>
			<div className='list-header'></div>
			<SmallDivider />
			<ul>
				{/* Groups */}
				{groupsDTO().map(group => {
					return (
						<RecipientsItem
							key={group.groupID}
							name={group.groupName}
							type={'Group'}
							recipientsImg={
								'groupImg' in group
									? group.profileImg
									: `${process.env.PUBLIC_URL}/tmpGroupImg/NEAR-user-group-ava.png`
							}
							notificationOptions={group.notificationOptions}
							city={group.city}
							district={group.district}
						/>
					);
				})}

				{/* Friends */}
				{currentFriendsList() ? (
					currentFriendsList().map(friend => {
						return (
							<RecipientsItem
								key={friend.id}
								name={friend.name}
								type={'Friend'}
								recipientsImg={
									'profileImg' in friend
										? friend.profileImg
										: `${process.env.PUBLIC_URL}/tmpProfileImg/NEAR-user-small.png`
								}
								notificationOptions={friend.notificationOptions}
								city={friend.city}
								district={friend.district}
							/>
						);
					})
				) : (
					<ListLine>
						<div>You don't have any friends :(</div>
					</ListLine>
				)}
			</ul>
		</div>
	);
};
export default SelectRecipientsList;
