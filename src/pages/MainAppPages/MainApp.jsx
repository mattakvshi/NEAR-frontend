import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './mainAppPages.css';

import { usersInfo } from '../../helpers/UsersInfo';

//Вложенные роуты
import Dashboard from './Dashboard/Dashboard';
import FriendsList from './Friends/FriendsList';
import SubscriptionsList from './Subscriptions/SubscriptionsList';
import Header from '../../components/MainAppComponents/Header/Header';

import useLocoScroll from '../../hooks/useLocoScrollForMainApp.js';

import mainLogo from '../../img/NEAR-logo.png';
import dashboardSvg from '../../img/MainAppIcon/ic_sharp-dashboard.svg';
import dashboardSvgActive from '../../img/MainAppIcon/ic_sharp-dashboard-active.svg';
import friendsSvg from '../../img/MainAppIcon/mdi_accounts.svg';
import friendsSvgActive from '../../img/MainAppIcon/mdi_accounts-active.svg';
import subscriptionsSvg from '../../img/MainAppIcon/ic_baseline-account-balance-wallet.png';
import subscriptionsSvgActive from '../../img/MainAppIcon/ic_baseline-account-balance-wallet-active.png';
import settingsSvg from '../../img/MainAppIcon/settings.svg';
import logOutSvg from '../../img/MainAppIcon/majesticons_logout-half-circle.svg';
import NavGroupItem from '../../components/MainAppComponents/NavGroupItem/NavGroupItem';

const MainApp = () => {
	const activeClass = ['active-item', 'main-nav-item-active'];
	const defaultClass = ['nav-item-regular', 'main-nav-item'];

	const [activeLinks, setActiveLinks] = useState([true, false, false]);

	const params = useParams();
	const currentID = params.id;

	//console.log(currentID);

	const currentUser = usersInfo.find(user => user.id === currentID);
	//console.log('profileImg' in currentUser);

	//console.log('Текущий пользователь: ', currentUser);
	const start = true;
	useLocoScroll(start);

	return (
		<div className='app-wrapper'>
			<div className='left-nav-section'>
				<NavLink to='' title='To home'>
					<div className='logo'>
						<img className='logo__img' src={mainLogo} alt='logo' />
						<h1 className='logo__text'>NEAR</h1>
					</div>
				</NavLink>

				<div className='space-between-wrapper'>
					<div className='nav-container'>
						<h3 className='nav-title'>MAIN MENU</h3>
						<nav className='nav-block'>
							<ul className='nav-list'>
								<li
									className={activeLinks[0] ? activeClass[1] : defaultClass[1]}
								>
									<img
										src={activeLinks[0] ? dashboardSvgActive : dashboardSvg}
										alt='dashboardIcon'
									/>
									<NavLink
										end
										onClick={() => setActiveLinks([true, false, false])}
										className={({ isActive }) => {
											return isActive ? activeClass[0] : defaultClass[0];
										}}
										to=''
									>
										Dashboard
									</NavLink>
								</li>
								<li
									className={activeLinks[1] ? activeClass[1] : defaultClass[1]}
								>
									<img
										src={activeLinks[1] ? friendsSvgActive : friendsSvg}
										alt='friendsIcon'
									/>
									<NavLink
										onClick={() => setActiveLinks([false, true, false])}
										className={({ isActive }) => {
											return isActive ? activeClass[0] : defaultClass[0];
										}}
										to='friends'
									>
										Friends
									</NavLink>
								</li>
								<li
									className={activeLinks[2] ? activeClass[1] : defaultClass[1]}
								>
									<img
										width='30px'
										height='30px'
										src={
											activeLinks[2] ? subscriptionsSvgActive : subscriptionsSvg
										}
										alt='subscriptionsIcon'
									/>
									<NavLink
										onClick={() => setActiveLinks([false, false, true])}
										className={({ isActive }) => {
											return isActive ? activeClass[0] : defaultClass[0];
										}}
										to='subscriptions'
									>
										Subscriptions
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>

					<div className='group-container'>
						<Link className='nav-title-link' to=''>
							<h3 className='nav-title' title='To groups list'>
								GROUPS
							</h3>
						</Link>
						<nav className='nav-block'>
							<ul className='nav-list-origin'>
								{'groups' in currentUser ? (
									currentUser.groups.map(group => {
										return (
											<NavGroupItem
												key={group.groupID}
												groupName={group.groupName}
												selectedColor={group.selectedColor}
											/>
										);
									})
								) : (
									<div>Create group</div>
								)}
							</ul>
						</nav>
					</div>

					<div className='actions-container'>
						<nav className='nav-block'>
							<ul className='nav-list-center'>
								<li className='nav-item'>
									<img src={settingsSvg} alt='settingsIcon' />
									<Link className='nav-item-medium' to=''>
										Settings
									</Link>
								</li>
								<li className='nav-item'>
									<img src={logOutSvg} alt='logOutIcon' />
									<Link className='nav-item-medium' to='/NEAR-frontend/'>
										Log Out
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			<div className='main-section'>
				<div className='main-section__header'>
					<Header
						pageName={
							activeLinks[0]
								? 'Creation panel'
								: activeLinks[1]
								? 'Friends'
								: 'Subscriptions'
						}
						profileImg={
							'profileImg' in currentUser
								? currentUser.profileImg
								: `${process.env.PUBLIC_URL}/tmpProfileImg/NEAR-user-small.png`
						}
					/>
				</div>
				<div className='main-section__body-wrapper'>
					<main
						className='main-section__body'
						id='main-section__body'
						data-scroll-container
					>
						<Routes>
							<Route
								path=''
								element={<Dashboard currentUser={currentUser} />}
							/>
							<Route
								path='friends'
								element={<FriendsList currentUser={currentUser} />}
							/>
							<Route
								path='subscriptions'
								element={<SubscriptionsList currentUser={currentUser} />}
							/>
						</Routes>
					</main>
				</div>
			</div>
		</div>
	);
};

export default MainApp;
