import { useState, useEffect, useRef } from 'react';

import ListWrapper from '../../../components/MainAppComponents/ListWrapper/ListWrapper';
import ListWrapperHeader from '../../../components/MainAppComponents/ListWrapperHeader/ListWrapperHeader';
import SelectRecipientsList from '../../../components/MainAppComponents/DashboardComponents/SelectRecipientsList/SelectRecipientsList';
import BigDivider from '../../../components/MainAppComponents/BigDivider/BigDivider';

const FriendsList = ({
	currentUser,
	preloaderSvg,
	useLocoScroll,
	isDarkMode,
}) => {
	const [timer, setTimer] = useState(1);
	const id = useRef(null);
	const [activeTab, setActiveTab] = useState('allFriends');

	const clear = () => {
		window.clearInterval(id.current);
		// setPreloader(false);
	};

	// Инициализируем таймер
	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer(timer => timer - 1);
		}, 1000);
		return () => window.clearInterval(id.current); // очистить интервал при размонтировании компонента
	}, []);

	// Проверка, когда таймер достигнет 0
	useEffect(() => {
		if (timer === 0) {
			clear();
			//console.log('отработал');
		}
	}, [timer]);

	const getFriendsData = () => {
		switch (activeTab) {
			case 'allFriends':
				return currentUser.friends || [];
			case 'sentRequests':
				return currentUser.friendsRequestsSent || [];
			case 'receivedRequests':
				return currentUser.friendsRequestsReceived || [];
			default:
				return [];
		}
	};

	useLocoScroll(!(timer > 0));

	return (
		<>
			{timer > 0 ? (
				<div className='preloader-svg-wrapper'>
					<img className='preloader-svg' src={preloaderSvg} alt='preloader' />
				</div>
			) : (
				<section className='friends-wrapper' data-scroll-section>
					<ListWrapper>
						<ListWrapperHeader
							type={'friends'}
							title={'Friends'}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<BigDivider />
						<SelectRecipientsList
							friends={getFriendsData()}
							isDarkMode={isDarkMode}
						/>
					</ListWrapper>

					{/*Чтобы прокрутка до конца долистывала*/}
					<div style={{ minHeight: '200px' }}></div>
				</section>
			)}
		</>
	);
};

export default FriendsList;
