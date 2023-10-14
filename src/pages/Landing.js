import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './../style/main.css';

import LandingHeader from '../components/LandingComponents/LandingHeader/LandingHeader';
import LandingDesc from '../components/LandingComponents/LandingDesc/LandingDesc';
import LandingFooter from '../components/LandingComponents/LandingFooter/LandingFooter';
import CustomCursor from './../CustomCursor';
import useLocoScroll from '../hooks/useLocoScroll';
import StartModal from '../components/LandingComponents/StartModal/StartModal';

import accountPng from './../img/Landing/NEAR-account-png-icon.png';
import communityPng from './../img/Landing/NEAR-community-png-icon.png';

const Landing = () => {
	const [preloader, setPreloader] = useState(true);

	useLocoScroll(!preloader);
	const [timer, setTimer] = useState(3);

	const id = useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreloader(false);
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
		}
	}, [timer]);

	const [modalLogInActive, setModalLogInActive] = useState(false);
	const [modalSingInActive, setModalSingInActive] = useState(false);

	return (
		<>
			<CustomCursor />

			{preloader ? (
				<div className='loader-wrapper absolute'>
					<h1 className='title-1'>
						<em>NEAR</em>
					</h1>
					<h2 className='title-1'>loading</h2>
				</div>
			) : (
				<main className='wrapper' id='wrapper' data-scroll-container>
					<LandingHeader
						setLogInActive={setModalLogInActive}
						setSingInActive={setModalSingInActive}
					/>
					<LandingDesc setActive={setModalSingInActive} />
					<LandingFooter />
					<StartModal active={modalLogInActive} setActive={setModalLogInActive}>
						<div className='popup-row'>
							<NavLink
								to='/NEAR-frontend/login/account'
								className='account-login-button'
							>
								<img src={accountPng} alt='accountPng' className='acc-img' />
								<span>Log in an Account</span>
							</NavLink>
							<NavLink
								to='/NEAR-frontend/login/community'
								className='community-login-button'
							>
								<img
									src={communityPng}
									alt='communityPng'
									className='comm-img'
								/>
								<span>Log in a Community</span>
							</NavLink>
						</div>
					</StartModal>
					<StartModal
						active={modalSingInActive}
						setActive={setModalSingInActive}
					>
						<div className='popup-row'>
							<NavLink
								to='/NEAR-frontend/signup/account'
								className='account-create-button'
							>
								<img src={accountPng} alt='accountPng' className='acc-img' />
								<span>Create an Account</span>
							</NavLink>
							<NavLink
								to='/NEAR-frontend/signup/community'
								className='community-create-button'
							>
								<img
									src={communityPng}
									alt='communityPng'
									className='comm-img'
								/>
								<span>Create a Community</span>
							</NavLink>
						</div>
					</StartModal>
				</main>
			)}
		</>
	);
};

export default Landing;
