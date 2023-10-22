import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import InputComponent from '../../components/LogIn-SingUp/InputComponent/InputComponent';
import PasswordInput from '../../components/LogIn-SingUp/InputComponent/PasswordInput';
import SliderComponent from '../../components/LogIn-SingUp/SliderComponent/SliderComponent';

const SingUpCommunity = ({ CommCreateImg, logoImg }) => {
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
		<LogInFramework img={CommCreateImg} opacity={0.43}>
			<div className='lif__row'>
				<div className='lif__column1'>
					<div className='lif-logo'>
						<img src={logoImg} alt='' className='lif-logo__img' />
						<h1 className='lif-logo-text'>NEAR</h1>
					</div>
					<div className='lif-title'>Create a community and...</div>
					<SliderComponent slides={slides} setSlides={setSlides} />
				</div>
				<div className='lif__column2'>
					<div className='form-desc'>
						<p className='letsgo-text'>LET'S GET YOU STARTED</p>
						<h4 className='lif-form__title'>Create a Community</h4>
						<div className='lif-input-section'>
							<InputComponent
								id='name'
								type='text'
								width='calc(var(--index) * 5.58'
							>
								Community name
							</InputComponent>
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
							<InputComponent
								id='location'
								type='text'
								width='calc(var(--index) * 5.35)'
							>
								Monitoring region
							</InputComponent>
							<InputComponent
								id='emergency'
								type='text'
								width='calc(var(--index) * 5.05)'
							>
								Emergency type
							</InputComponent>
						</div>
						<button className='lif-button'>
							<span>GER STARTED</span>
						</button>
						<div className='lif-link__row'>
							<p className='lif-link__text'>Already have an account?</p>
							<NavLink to='/NEAR-frontend/login/community' className='lif-link'>
								LOGIN HERE
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</LogInFramework>
	);
};

export default SingUpCommunity;
