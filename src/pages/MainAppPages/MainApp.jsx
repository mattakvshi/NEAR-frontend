import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './mainAppPages.css';

import { usersInfo } from '../../helpers/UsersInfo';

//Вложенные роуты
import Dashboard from './Dashboard/Dashboard';
import FriendsList from './Friends/FriendsList';
import SubscriptionsList from './Subscriptions/SubscriptionsList';
import Header from '../../components/MainAppComponents/Header/Header';

import useLocoScroll from '../../hooks/useLocoScrollForMainApp.js';

import mainLogo from '../../img/NEAR-logo.png';
import mainLogoForDark from '../../img/NEAR-logo-white.png';

import dashboardSvg from '../../img/MainAppIcon/ic_sharp-dashboard.svg';
import dashboardSvgActive from '../../img/MainAppIcon/ic_sharp-dashboard-active.svg';
import friendsSvg from '../../img/MainAppIcon/mdi_accounts.svg';
import friendsSvgActive from '../../img/MainAppIcon/mdi_accounts-active.svg';
import subscriptionsSvg from '../../img/MainAppIcon/ic_baseline-account-balance-wallet.png';
import subscriptionsSvgActive from '../../img/MainAppIcon/ic_baseline-account-balance-wallet-active.png';
import settingsSvg from '../../img/MainAppIcon/settings.svg';
import logOutSvg from '../../img/MainAppIcon/majesticons_logout-half-circle.svg';
import NavGroupItem from '../../components/MainAppComponents/NavGroupItem/NavGroupItem';

//Прелодер для дочерних роутов
import preloaderSvg from '../../img/MainAppIcon/motion-blur-2.svg';
import GroupsList from './Groups/GroupsList.jsx';

const MainApp = () => {
	const activeClass = ['active-item', 'main-nav-item-active'];
	const defaultClass = ['nav-item-regular', 'main-nav-item'];

	const [activeLinks, setActiveLinks] = useState([true, false, false]);
	//const [preloaded, setPreloaded] = useState(false);

	const params = useParams();
	const currentID = params.id;
	const currentUser = usersInfo.find(user => user.id === currentID);

	//useLocoScroll();

	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		// Проверка активной ссылки в localeStorage
		//console.log(window.location.href);
		var regex = new RegExp(
			'^http://localhost:3000/NEAR-frontend/[a-zA-Z0-9]+/?$'
		);
		//console.log(window.location.href.match(regex));
		if (
			localStorage.getItem('activeRout') === 'dashboard' ||
			window.location.href.match(regex)
		) {
			setActiveLinks([true, false, false]);
			localStorage.setItem('activeRout', 'dashboard');
		} else if (localStorage.getItem('activeRout') === 'friends') {
			setActiveLinks([false, true, false]);
		} else if (localStorage.getItem('activeRout') === 'subscriptions') {
			setActiveLinks([false, false, true]);
		}
		return () => {
			//код здесь будет выполняться при размонтировании компонента
		};
	}, []);

	useEffect(() => {
		//localStorage.clear();
		//1. Проверка тёмной темы на уровне системных настроек
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			setIsDarkMode(true);
		}

		//2. Проверка тёмной темы в localStorage
		//Тяну тему из localStorage 1 раз при рендере компонента
		if (localStorage.getItem('themesMode') === 'dark') {
			setIsDarkMode(true);
		} else if (localStorage.getItem('themesMode') === 'light') {
			setIsDarkMode(false);
		}

		//Если меняются системные настройки меняем тему
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', event => {
				const newColorScheme = event.matches ? 'dark' : 'light';

				if (newColorScheme === 'dark') {
					setIsDarkMode(true);
				} else {
					setIsDarkMode(false);
				}
			});
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);

		//Записываю выбранную тему в localStorage
		if (!isDarkMode) {
			localStorage.setItem('themesMode', 'dark');
			//console.log(localStorage.getItem('themesMode'));
		} else {
			localStorage.setItem('themesMode', 'light');
			//console.log(localStorage.getItem('themesMode'));
		}
	};

	return (
		<div className={isDarkMode ? 'app-wrapper dark-theme' : 'app-wrapper'}>
			<div className='left-nav-section'>
				<NavLink to='' title='To home'>
					<div className='logo'>
						<img
							className={isDarkMode ? 'logo__img-small' : 'logo__img'}
							src={isDarkMode ? mainLogoForDark : mainLogo}
							alt='logo'
						/>
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
										onClick={() => {
											setActiveLinks([true, false, false]);
											localStorage.setItem('activeRout', 'dashboard');
										}}
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
										onClick={() => {
											setActiveLinks([false, true, false]);
											localStorage.setItem('activeRout', 'friends');
										}}
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
										onClick={() => {
											setActiveLinks([false, false, true]);
											localStorage.setItem('activeRout', 'subscriptions');
										}}
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
						<Link className='nav-title-link' to='groups'>
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
						toggleDarkMode={toggleDarkMode}
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
								element={
									<Dashboard
										currentUser={currentUser}
										preloaderSvg={preloaderSvg}
										useLocoScroll={useLocoScroll}
										isDarkMode={isDarkMode}
									/>
								}
							/>
							<Route
								path='friends'
								element={
									<FriendsList
										currentUser={currentUser}
										preloaderSvg={preloaderSvg}
										useLocoScroll={useLocoScroll}
										isDarkMode={isDarkMode}
									/>
								}
							/>
							<Route
								path='subscriptions'
								element={
									<SubscriptionsList
										currentUser={currentUser}
										preloaderSvg={preloaderSvg}
										useLocoScroll={useLocoScroll}
										isDarkMode={isDarkMode}
									/>
								}
							/>
							<Route
								path='groups'
								element={
									<GroupsList
										currentUser={currentUser}
										preloaderSvg={preloaderSvg}
										useLocoScroll={useLocoScroll}
										isDarkMode={isDarkMode}
									/>
								}
							/>
						</Routes>
					</main>
				</div>
			</div>
		</div>
	);
};

export default MainApp;
