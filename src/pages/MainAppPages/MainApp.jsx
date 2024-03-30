import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './mainAppPages.css';

import { usersInfo } from '../../helpers/UsersInfo';

//Вложенные роуты
import Dashboard from './Dashboard';
import FriendsList from './FriendsList';
import SubscriptionsList from './SubscriptionsList';

import mainLogo from '../../img/NEAR-logo.png';
import dashboardSvg from '../../img/MainAppIcon/ic_sharp-dashboard.svg';
import dashboardSvgActive from '../../img/MainAppIcon/ic_sharp-dashboard-active.svg';
import friendsSvg from '../../img/MainAppIcon/mdi_accounts.svg';
import friendsSvgActive from '../../img/MainAppIcon/mdi_accounts-active.svg';
import subscriptionsSvg from '../../img/MainAppIcon/ic_baseline-account-balance-wallet.png';
import subscriptionsSvgActive from '../../img/MainAppIcon/ic_baseline-account-balance-wallet-active.png';
import settingsSvg from '../../img/MainAppIcon/settings.svg';
import logOutSvg from '../../img/MainAppIcon/majesticons_logout-half-circle.svg';

const MainApp = () => {
	const activeClass = ['active-item', 'main-nav-item-active'];
	const defaultClass = ['nav-item-regular', 'main-nav-item'];

	const [activeLinks, setActiveLinks] = useState([true, false, false]);

	const params = useParams();
	const currentID = params.id;

	//console.log(currentID);

	const currentUser = usersInfo.find(user => user.id === currentID);

	//console.log('Текущий пользователь: ', currentUser);

	return (
		<div className='app-wrapper'>
			<div className='left-nav-section'>
				<NavLink to=''>
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
						<h3 className='nav-title'>GROUPS</h3>
						<nav className='nav-block'>
							<ul className='nav-list-origin'>
								<li className='nav-item'>
									<svg
										width='15'
										height='15'
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g filter='url(#filter0_d_221_327)'>
											<circle cx='7.5' cy='3.5' r='3.5' fill='#FF4C2B' />
										</g>
										<defs>
											<filter
												id='filter0_d_221_327'
												x='0'
												y='0'
												width='15'
												height='15'
												filterUnits='userSpaceOnUse'
												color-interpolation-filters='sRGB'
											>
												<feFlood
													flood-opacity='0'
													result='BackgroundImageFix'
												/>
												<feColorMatrix
													in='SourceAlpha'
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
													result='hardAlpha'
												/>
												<feOffset dy='4' />
												<feGaussianBlur stdDeviation='2' />
												<feComposite in2='hardAlpha' operator='out' />
												<feColorMatrix
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
												/>
												<feBlend
													mode='normal'
													in2='BackgroundImageFix'
													result='effect1_dropShadow_221_327'
												/>
												<feBlend
													mode='normal'
													in='SourceGraphic'
													in2='effect1_dropShadow_221_327'
													result='shape'
												/>
											</filter>
										</defs>
									</svg>
									<Link className='nav-item-medium' to=''>
										Family
									</Link>
								</li>
								<li className='nav-item'>
									<svg
										width='15'
										height='15'
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g filter='url(#filter0_d_221_327)'>
											<circle cx='7.5' cy='3.5' r='3.5' fill='#FF4C2B' />
										</g>
										<defs>
											<filter
												id='filter0_d_221_327'
												x='0'
												y='0'
												width='15'
												height='15'
												filterUnits='userSpaceOnUse'
												color-interpolation-filters='sRGB'
											>
												<feFlood
													flood-opacity='0'
													result='BackgroundImageFix'
												/>
												<feColorMatrix
													in='SourceAlpha'
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
													result='hardAlpha'
												/>
												<feOffset dy='4' />
												<feGaussianBlur stdDeviation='2' />
												<feComposite in2='hardAlpha' operator='out' />
												<feColorMatrix
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
												/>
												<feBlend
													mode='normal'
													in2='BackgroundImageFix'
													result='effect1_dropShadow_221_327'
												/>
												<feBlend
													mode='normal'
													in='SourceGraphic'
													in2='effect1_dropShadow_221_327'
													result='shape'
												/>
											</filter>
										</defs>
									</svg>
									<Link className='nav-item-medium' to=''>
										Colleagues
									</Link>
								</li>
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
									<Link className='nav-item-medium' to='friends'>
										Log Out
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			<div className='main-section'>
				<div>
					<Routes>
						<Route path='' element={<Dashboard userInfo={currentUser} />} />
						<Route
							path='friends'
							element={<FriendsList userInfo={currentUser} />}
						/>
						<Route
							path='subscriptions'
							element={<SubscriptionsList userInfo={currentUser} />}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default MainApp;
