import './selectRecipientsList.css';

import { usersInfo } from '../../../../helpers/UsersInfo';
import RecipientsItem from '../RecipientsItem/RecipientsItem';
import ListLine from '../../ListLine/ListLine';
import SmallDivider from '../../SmallDivider/SmallDivider';
//import CheckBoxComponent from '../../../LogIn-SingUp/CheckBoxComponent/CheckBoxComponent';
import { useState } from 'react';

const SelectRecipientsList = ({ groups, friends, isDarkMode }) => {
	const userInfoDTO = () => {
		return usersInfo.map(
			({ id, name, city, district, notificationOptions, friends }) => ({
				id,
				name,
				city,
				district,
				notificationOptions,
				friends,
			})
		);
	};

	const groupsDTO = () => {
		return (
			groups &&
			groups.map(
				({
					groupID,
					groupName,
					groupImg,
					notificationOptions,
					city,
					district,
				}) => ({
					groupID,
					groupName,
					groupImg,
					notificationOptions,
					city,
					district,
				})
			)
		);
	};

	//console.log(userInfoDTO());

	const currentFriendsList = () => {
		return (
			friends &&
			userInfoDTO().filter(user =>
				friends.some(currentUser => currentUser.id === user.id)
			)
		);
	};

	//console.log(currentFriendsList());

	const [isCheckedAll, setIsCheckedAll] = useState(false);

	const handleSelectAll = e => {
		setIsCheckedAll(e.target.checked);

		// Установите свойство checked всех дочерних флажков с именем openForAllSelected в соответствии со значением флажка Выбрать все
		document
			.querySelectorAll('input[type="checkbox"][name="openForAllSelected"]')
			.forEach(checkbox => {
				checkbox.checked = e.target.checked;
			});
	};

	return (
		<div className='select-recipients-wrapper'>
			{/* Шапка списка выбора */}
			<div className='list-header'>
				{/* Многие классы шапки кроме классов текста прописаны в recipientsItem.css*/}
				<div className='recipient-item-column column-width-type2'>
					<div className='recipient-item-row'>
						<div className='recipient-item-column-center column-width-type4'>
							<label className={`checkbox ${isCheckedAll ? 'checked' : ''}`}>
								<input
									type='checkbox'
									name='all'
									id='all'
									onChange={handleSelectAll}
									checked={isCheckedAll}
								/>
								<svg viewBox='0 0 21 18'>
									<symbol
										id={`${'all'}tick-path`}
										viewBox='0 0 21 18'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69'
											fill='none'
											strokeWidth='2.25'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</symbol>
									<defs>
										<mask id={`${'all'}tick`}>
											<use className='tick mask' href={`#${'all'}tick-path`} />
										</mask>
									</defs>
									<use
										className='tick'
										href={`#${'all'}tick-path`}
										stroke='currentColor'
									/>
									<path
										fill='white'
										mask={`url(#${'all'}tick)`}
										d='M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z'
									/>
								</svg>
								<svg className='lines' viewBox='0 0 11 11'>
									<path d='M5.88086 5.89441L9.53504 4.26746' />
									<path d='M5.5274 8.78838L9.45391 9.55161' />
									<path d='M3.49371 4.22065L5.55387 0.79198' />
								</svg>
							</label>
						</div>
						<div className='recipient-item-column-center column-width-type4'></div>
						<div className='recipient-item-column column-width-type1'>
							<div className='recipient-list-header-text'>Recipient</div>
						</div>
					</div>
				</div>
				<div className='recipient-item-column-center column-width-type1'>
					<div className='recipient-list-header-text'>Type</div>
				</div>
				<div className='recipient-item-column-center column-width-type3'>
					<div className='recipient-list-header-text'>
						Options for receiving notifications
					</div>
				</div>
				<div className='recipient-item-column column-width-type1'>
					<div className='recipient-list-header-text'>City, district</div>
				</div>
				<div className='recipient-item-column column-width-type1'></div>
			</div>
			<SmallDivider />
			<ul>
				{/* Groups */}
				{groupsDTO() ? (
					groupsDTO().map(group => {
						return (
							<RecipientsItem
								key={group.groupID}
								id={group.groupID}
								name={group.groupName}
								type={'Group'}
								recipientsImg={
									'groupImg' in group
										? group.groupImg
											? group.groupImg
											: `${process.env.PUBLIC_URL}/tmpGroupImg/NEAR-user-group-ava.png`
										: `${process.env.PUBLIC_URL}/tmpGroupImg/NEAR-user-group-ava.png`
								}
								notificationOptions={group.notificationOptions}
								city={group.city}
								district={group.district}
								isCheckedAll={isCheckedAll}
								isDarkMode={isDarkMode}
							/>
						);
					})
				) : (
					<div style={{ display: 'none' }}></div>
				)}

				{/* Friends */}
				{currentFriendsList() ? (
					currentFriendsList().map(friend => {
						return (
							<RecipientsItem
								key={friend.id}
								id={friend.id}
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
								isCheckedAll={isCheckedAll}
								isDarkMode={isDarkMode}
							/>
						);
					})
				) : groupsDTO() ? (
					<div style={{ display: 'none' }}></div>
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
