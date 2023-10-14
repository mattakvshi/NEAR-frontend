import React from 'react';

import logoImg from '../../../img/Landing/NEAR-logo-white.png';
import './landingNav.css';

export default function LandingNav({ setLogInActive, setSingInActive }) {
	return (
		<nav className='landing-nav'>
			<div className='nav-row-logo'>
				<img src={logoImg} alt='logo' className='logo-img' />
				<h1 className='logo-text'>NEAR</h1>
			</div>
			<div className='nav-row-button'>
				<button className='log-in-button' onClick={() => setLogInActive(true)}>
					<span>Log in</span>
				</button>
				<button
					className='sing-in-button'
					onClick={() => setSingInActive(true)}
				>
					<span>Sign up</span>
				</button>
			</div>
		</nav>
	);
}
