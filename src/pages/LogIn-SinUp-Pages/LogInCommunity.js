import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import InputComponent from '../../components/LogIn-SingUp/InputComponent/InputComponent';
import CheckBoxComponent from '../../components/LogIn-SingUp/CheckBoxComponent/CheckBoxComponent';
import StartModal from '../../components/LandingComponents/StartModal/StartModal';
import PasswordInput from '../../components/LogIn-SingUp/InputComponent/PasswordInput';
import SliderComponent from '../../components/LogIn-SingUp/SliderComponent/SliderComponent';

const LogInCommunity = ({ CommLogImg, logoImg }) => {
	const [modalActive, setModalActive] = useState(false);

	const [slides, setSlides] = useState([
		{
			text: 'You will be able to save a large number of lives! With access to information, you will be able to prevent major casualties, promptly notify your subscribers of impending emergencies, and the precautions they should take.',
			active: true,
		},
		{
			text: 'You are able to protect many lives! Thanks to access to information, you will be able to prevent serious losses, immediately notify your subscribers about the threatening dangers and recommended precautions.',
			active: false,
		},
		{
			text: 'You can serve as a shield for many creatures! With access to knowledge, you will prevent massive losses, promptly notify your audience of impending emergencies and provide the necessary safety advice.',
			active: false,
		},
	]);

	return (
		<>
			<LogInFramework img={CommLogImg} opacity={0.45}>
				<div className='lif__row'>
					<div className='lif__column1'>
						<div className='lif-logo'>
							<img src={logoImg} alt='' className='lif-logo__img' />
							<h1 className='lif-logo-text'>NEAR</h1>
						</div>
						<div className='lif-title'>Log in and...</div>
						<SliderComponent slides={slides} setSlides={setSlides} />
					</div>
					<div className='lif__column2'>
						<div className='form-desc'>
							<p className='letsgo-text'>WELCOME BACK</p>
							<h4 className='lif-form__title'>Log In as a Community</h4>
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
									<CheckBoxComponent
										name={'communityLogIn'}
										id={'communityLogIn'}
									/>
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
								<span>GET STARTED</span>
							</button>
							<div className='lif-link__row'>
								<p className='lif-link__text'>New User?</p>
								<NavLink
									to='/NEAR-frontend/signup/community'
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

export default LogInCommunity;
