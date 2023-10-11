import React, { useEffect, useRef, useState } from 'react';
import './../style/main.css';

import LandingHeader from '../components/LandingComponents/LandingHeader/LandingHeader';
import LandingDesc from '../components/LandingComponents/LandingDesc/LandingDesc';
import LandingFooter from '../components/LandingComponents/LandingFooter/LandingFooter';

import CustomCursor from './../CustomCursor';
import useLocoScroll from '../hooks/useLocoScroll';

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
					<LandingHeader />
					<LandingDesc />
					<LandingFooter />
				</main>
			)}
		</>
	);
};

export default Landing;
