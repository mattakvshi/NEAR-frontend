import React, {
	useEffect,
	useRef,
	useState,
	useCallback,
	useMemo,
} from 'react';
import { NavLink } from 'react-router-dom';

import './../style/main.css';

import LandingHeader from '../components/LandingComponents/LandingHeader/LandingHeader';
import LandingDesc from '../components/LandingComponents/LandingDesc/LandingDesc';
import LandingFooter from '../components/LandingComponents/LandingFooter/LandingFooter';
import CustomCursor from './../CustomCursor';
import useLocoScroll from '../hooks/useLocoScroll';
import StartModal from '../components/LandingComponents/StartModal/StartModal';

import accountPng from '../img/Landing/NEAR-account-png-icon.png';
import communityPng from '../img/Landing/NEAR-community-png-icon.png';

import loadStateSvg from '../img/Landing/bouncing-circles.svg';

//Импорты для компонентов, фотографии которые гружу, использую прелоудер пока грузятся
import headerBgImg from '../img/Landing/header-bg.webp';
import descImg from '../img/Landing/desc-img.webp';

//Сюда из App прилетают 4 картинки для авторизационных и регистрационных частей приложения
const Landing = ({ AccLogImg, CommLogImg, AccCreateImg, CommCreateImg }) => {
	const [preloader, setPreloader] = useState(true);
	const [modalLogInActive, setModalLogInActive] = useState(false);
	const [modalSingInActive, setModalSingInActive] = useState(false);

	// Массив ссылок на изображения, которые нужно предзагрузить
	// const images = [headerBgImg, descImg];
	//Использую useMemo чтобы убедиться, что изображения будут загружены один раз, и не буду перерендериваться при обновлениях и перемещениях
	const images = useMemo(
		() => [
			headerBgImg,
			descImg,
			AccLogImg,
			CommLogImg,
			AccCreateImg,
			CommCreateImg,
			// Добавляй изображения которые грузятся во время прилодера
		],
		[AccLogImg, CommLogImg, AccCreateImg, CommCreateImg] //Добавили сюда в зависимости данные извне, которые могут быть изменены
	);

	// Функция для предзагрузки изображений
	const preloadImages = useCallback(() => {
		let imagesToLoad = images.length; // Количество изображений, которые нужно загрузить

		// Функция для проверки, все ли изображения загружены
		const checkIfAllImagesAreLoaded = () => {
			imagesToLoad--;
			// Когда все изображения загружены, убираем прелоудер
			if (imagesToLoad === 0) setPreloader(false);
		};

		images.forEach(src => {
			const img = new Image();
			img.src = src;
			img.onload = checkIfAllImagesAreLoaded;
			// Если какое-то изображение не удалось загрузить, мы все равно считаем его загруженным, чтобы не стопорить процесс
			img.onerror = checkIfAllImagesAreLoaded;
		});
	}, [images]);

	// Запускаем предзагрузку изображений при монтировании компонента
	useEffect(() => {
		preloadImages();
	}, [preloadImages]);

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
		}
	}, [timer]);

	useLocoScroll(!preloader && !(timer > 0));

	//Смотрим что использует пользователь мышь или тачпад
	const [isTouchEvent, setTouchEvent] = useState(false);

	//Смотрим что использует пользователь мышь или тачпад
	useEffect(() => {
		function detectTrackPad(e) {
			setTouchEvent(false);
			if (e.wheelDeltaY) {
				if (e.wheelDeltaY === e.deltaY * -3) {
					setTouchEvent(true);
				}
			} else if (e.deltaMode === 0) {
				setTouchEvent(true);
			}
			console.log(isTouchEvent ? 'Trackpad detected' : 'Mousewheel detected');
		}

		document.addEventListener('mousewheel', detectTrackPad);
		document.addEventListener('DOMMouseScroll', detectTrackPad);
	}, [isTouchEvent]);

	// //Смотрим что использует пользователь мышь или тачпад
	// useEffect(() => {
	// 	function detectTrackPad(e) {
	// 		setTouchEvent(false);
	// 		if (e.wheelDeltaY) {
	// 			if (Math.abs(e.wheelDeltaY) !== 120) {
	// 				setTouchEvent(true);
	// 			}
	// 		} else if (e.deltaMode === 0) {
	// 			setTouchEvent(true);
	// 		}
	// 		console.log(isTouchEvent ? 'Trackpad detected' : 'Mousewheel detected');
	// 	}

	// 	document.addEventListener('mousewheel', detectTrackPad, false);
	// 	document.addEventListener('DOMMouseScroll', detectTrackPad, false);
	// }, [isTouchEvent]);

	// //Смотрим что использует пользователь мышь или тачпад
	// useEffect(() => {
	// 	// function detectTrackPad(e) {
	// 	// 	if (e.pointerType === 'touch') {
	// 	// 		// Пользователь использует тачпад
	// 	// 		setTouchEvent(true);
	// 	// 		console.log('Использует тачпад');
	// 	// 	} else {
	// 	// 		// Пользователь использует мышь
	// 	// 		setTouchEvent(false);
	// 	// 		console.log('Использует мышь');
	// 	// 	}
	// 	// }

	// 	function detectTrackPad(e) {
	// 		// Пользователь использует тачпад
	// 		setTouchEvent(true);
	// 		//console.log('Использует тачпад');
	// 	}

	// 	function detectMouse(e) {
	// 		// Пользователь использует мышь
	// 		setTouchEvent(false);
	// 		//console.log('Использует мышь');
	// 	}

	// 	document.addEventListener('mousewheel', detectMouse);
	// 	document.addEventListener('DOMMouseScroll', detectTrackPad);
	// }, []);

	//console.log(isTouchEvent);

	return (
		<>
			{isTouchEvent ? (
				<CustomCursor cursorSpeed={0.7} />
			) : (
				<CustomCursor cursorSpeed={0.3} />
			)}

			{preloader || timer > 0 ? (
				<div className='loader-wrapper absolute'>
					<h1 className='title-1-preloader'>
						<em>NEAR</em>
					</h1>
					<h2 className='title-2-preloader'>loading</h2>
					<img className='load-svg' src={loadStateSvg} alt='loadStateSvg' />
				</div>
			) : (
				<main className='wrapper' id='wrapper' data-scroll-container>
					<LandingHeader
						setLogInActive={setModalLogInActive}
						setSingInActive={setModalSingInActive}
						headerBgImg={headerBgImg}
					/>
					<LandingDesc setActive={setModalSingInActive} descImg={descImg} />
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
