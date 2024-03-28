import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import InputComponent from '../../components/LogIn-SingUp/InputComponent/InputComponent';
import CheckBoxComponent from '../../components/LogIn-SingUp/CheckBoxComponent/CheckBoxComponent';
import StartModal from '../../components/LandingComponents/StartModal/StartModal';
import PasswordInput from '../../components/LogIn-SingUp/InputComponent/PasswordInput';
import SliderComponent from '../../components/LogIn-SingUp/SliderComponent/SliderComponent';

const LogInAccount = ({ AccLogImg, logoImg }) => {
	const [modalActive, setModalActive] = useState(false);

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

	return (
		<>
			<LogInFramework img={AccLogImg} opacity={0.38}>
				<div className='lif__row'>
					<div className='lif__column1'>
						<div className='lif-logo'>
							<img src={logoImg} alt='' className='lif-logo__img' />
							<h1 className='lif-logo-text'>NEAR</h1>
						</div>
						<SliderComponent slides={slides} setSlides={setSlides} />
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
							<NavLink to='/NEAR-frontend/mattakvshi/'>
								<button className='lif-button'>
									<span>GER STARTED</span>
								</button>
							</NavLink>
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
