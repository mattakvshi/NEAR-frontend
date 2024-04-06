import { useState, useEffect, useRef } from 'react';

const FriendsList = ({ currentUser, preloaderSvg, useLocoScroll }) => {
	const [timer, setTimer] = useState(1);
	const id = useRef(null);

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

	useLocoScroll(!(timer > 0));

	return (
		<>
			{timer > 0 ? (
				<div className='preloader-svg-wrapper'>
					<img className='preloader-svg' src={preloaderSvg} alt='preloader' />
				</div>
			) : (
				<section className='friends-wrapper' data-scroll-section>
					<h1>FriendsList</h1>
					{currentUser ? (
						<p>User ID: {currentUser.id}</p>
					) : (
						<p>User not found</p>
					)}

					{/*Чтобы прокрутка до конца долистывала*/}
					<div style={{ minHeight: '100px' }}></div>
				</section>
			)}
		</>
	);
};

export default FriendsList;
