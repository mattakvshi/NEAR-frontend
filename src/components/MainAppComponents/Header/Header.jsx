import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

import './header.css';

import moon from '../../../img/MainAppIcon/moon.svg';
import sun from '../../../img/MainAppIcon/sun.svg';

const Header = ({ pageName, profileImg, toggleDarkMode }) => {
	const [isActiveDarkModeLocale, setActiveDarkModeLocale] = useState(false);
	//console.log(profileImg);

	useEffect(() => {
		//2. Проверка тёмной темы в localStorage
		//Тяну тему из localStorage 1 раз при рендере компонента
		if (localStorage.getItem('themesMode') === 'dark') {
			setActiveDarkModeLocale(true);
		} else if (localStorage.getItem('themesMode') === 'light') {
			setActiveDarkModeLocale(false);
		}
	}, []);

	const toggleDarkModeLocale = () => {
		setActiveDarkModeLocale(!isActiveDarkModeLocale);
		toggleDarkMode();
	};

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
					onClick={() => toggleDarkModeLocale()}
					className='dark-mode-btn'
				>
					<p
						className={!isActiveDarkModeLocale ? 'btn-item-active' : 'btn-item'}
					>
						{width < breakpoint ? <img src={sun} alt='sun' /> : 'Light mode'}
					</p>
					<p
						className={isActiveDarkModeLocale ? 'btn-item-active' : 'btn-item'}
					>
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
