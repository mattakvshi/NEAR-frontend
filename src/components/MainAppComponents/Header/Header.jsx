import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

import './header.css';

import moon from '../../../img/MainAppIcon/moon.svg';
import sun from '../../../img/MainAppIcon/sun.svg';

const Header = ({ pageName, profileImg }) => {
	const [isActiveDarkMode, setActiveDarkMode] = useState(false);
	//console.log(profileImg);

	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 800;
	React.useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		// subscribe to window resize event "onComponentDidMount"
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			// unsubscribe "onComponentDestroy"
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	return (
		<div className='header-row'>
			<div className='header-row__left'>
				<h1 className='page-title'>{pageName}</h1>
				<button
					onClick={() => setActiveDarkMode(!isActiveDarkMode)}
					className='dark-mode-btn'
				>
					<p className={!isActiveDarkMode ? 'btn-item-active' : 'btn-item'}>
						{width < breakpoint ? <img src={sun} alt='sun' /> : 'Light mode'}
					</p>
					<p className={isActiveDarkMode ? 'btn-item-active' : 'btn-item'}>
						{width < breakpoint ? <img src={moon} alt='moon' /> : 'Dark mode'}
					</p>
				</button>
			</div>
			<div className='header-row__right'>
				<NavLink to='' title='My profile'>
					<img className='profileImg' src={profileImg} alt='profileImg' />
				</NavLink>
			</div>
		</div>
	);
};
export default Header;
