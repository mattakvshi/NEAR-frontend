import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import InputComponent from '../../components/LogIn-SingUp/InputComponent/InputComponent';
import CheckBoxComponent from '../../components/LogIn-SingUp/CheckBoxComponent/CheckBoxComponent';
import StartModal from '../../components/LandingComponents/StartModal/StartModal';
import PasswordInput from '../../components/LogIn-SingUp/InputComponent/PasswordInput';

const LogInAccount = ({ AccLogImg, logoImg }) => {
	const [modalActive, setModalActive] = useState(false);

	const [activePath, setActivePath] = useState(1);
	const [slides, setSlides] = useState([
		{
			text: 'You will be able to add your loved ones to friends, create templates for sending emergency notifications, create groups for convenient mailing, as well as subscribe to notifications from communities that always keep their finger on the pulse.',
			active: true,
		},
		{
			text: 'With the ability to add your special ones to a friend list, craft alarm templates, establish groups for easy mailouts, and follow community alerts that are constantly up-to-date, your interaction becomes straightforward.',
			active: false,
		},
		{
			text: 'You can conveniently enlarge your circle by including your close ones to your friends, devise ready-for-use alert patterns, form groups for simplified mailing, and stay informed by subscribing to ever-vigilant community notifications.',
			active: false,
		},
	]);

	const handleSVGClick = clickedPath => {
		setActivePath(clickedPath);

		const updatedSlides = slides.map((slide, i) => {
			if (i === clickedPath - 1) {
				return { ...slide, active: true };
			} else {
				return { ...slide, active: false };
			}
		});
		setSlides(updatedSlides);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setActivePath(prevActivePath => {
				const nextActivePath = (prevActivePath % slides.length) + 1;
				handleSVGClick(nextActivePath);
				return nextActivePath;
			});
		}, 7000);
		return () => {
			clearInterval(interval);
		};
	}, [slides]);

	return (
		<>
			<LogInFramework img={AccLogImg} opacity={0.38}>
				<div className='lif__row'>
					<div className='lif__column1'>
						<div className='lif-logo'>
							<img src={logoImg} alt='' className='lif-logo__img' />
							<h1 className='lif-logo-text'>NEAR</h1>
						</div>
						<div className='lif-title'>Log in and...</div>
						{slides.map(
							(slide, i) =>
								slide.active && (
									<div key={i} className='lif-text'>
										{slide.text}
									</div>
								)
						)}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='134'
							height='6'
							viewBox='0 0 134 6'
							fill='none'
							className='lif-slider-svg'
						>
							<path
								d={`M0 3H48`}
								stroke={activePath === 1 ? '#D2D2D2' : '#9E9E9E'}
								strokeWidth={activePath === 1 ? '5' : '2'}
								onClick={() => handleSVGClick(1)}
							/>
							<path
								d={`M59.5 3H91.5`}
								stroke={activePath === 2 ? '#D2D2D2' : '#9E9E9E'}
								strokeWidth={activePath === 2 ? '5' : '2'}
								onClick={() => handleSVGClick(2)}
							/>
							<path
								d={`M101.5 3H133.5`}
								stroke={activePath === 3 ? '#D2D2D2' : '#9E9E9E'}
								strokeWidth={activePath === 3 ? '5' : '2'}
								onClick={() => handleSVGClick(3)}
							/>
						</svg>
					</div>
					<div className='lif__column2'>
						<div className='form-desc'>
							<p className='letsgo-text'>WELCOME BACK</p>
							<h4 className='lif-form__title'>Log In to your Account</h4>
							<div className='lif-input-section'>
								<InputComponent
									id='email'
									type='email'
									width='calc(var(--index) * 2.18)'
								>
									Email
								</InputComponent>
								<PasswordInput id='password' width='calc(var(--index) * 3.34)'>
									Password
								</PasswordInput>
							</div>
							<div className='lif-check-row'>
								<div className='box-and-p-row'>
									<CheckBoxComponent />
									<p className='custom-checkbox__label'>Remember me</p>
								</div>
								<div>
									<p
										className='forgot-pass'
										onClick={() => setModalActive(true)}
									>
										Forgot password?
									</p>
								</div>
							</div>
							<button className='lif-button'>
								<span>GER STARTED</span>
							</button>
							<div className='lif-link__row'>
								<p className='lif-link__text'>New User?</p>
								<NavLink
									to='/NEAR-frontend/signup/account'
									className='lif-link'
								>
									SIGN UP HERE
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</LogInFramework>
			<StartModal active={modalActive} setActive={setModalActive}>
				<p className='sorry-modal-text'>
					<em>Oh, bro...</em> Remember... I haven't implemented such an entry
					option yet, <em>I'm sorry.....</em>
				</p>
			</StartModal>
		</>
	);
};

export default LogInAccount;
