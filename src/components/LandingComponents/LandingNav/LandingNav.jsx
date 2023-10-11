import React from 'react';

import logoImg from '../../../img/Landing/NEAR-logo-white.png';
import './landingNav.css';

export default function LandingNav() {
	return (
		<nav className='landing-nav'>
			<div className='nav-row-logo'>
				<img src={logoImg} alt='logo' className='logo-img' />
				<h1 className='logo-text'>NEAR</h1>
			</div>
			<div className='nav-row-button'>
				<a href='!#' className='log-in-button'>
					<span>Log in</span>
				</a>
				<a href='!#' className='sing-in-button'>
					<span>Sign up</span>
				</a>
			</div>
		</nav>
	);
}
