import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import InputComponent from '../../components/LogIn-SingUp/InputComponent/InputComponent';
import PasswordInput from '../../components/LogIn-SingUp/InputComponent/PasswordInput';
import RadioButtonComponent from '../../components/LogIn-SingUp/RadioButtonComponent/RadioButtonComponent';
import SliderComponent from '../../components/LogIn-SingUp/SliderComponent/SliderComponent';

const SingUpAccount = ({ AccCreateImg, logoImg }) => {
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
		<LogInFramework img={AccCreateImg} opacity={0.53}>
			<div className='lif__row'>
				<div className='lif__column1'>
					<div className='lif-logo'>
						<img src={logoImg} alt='' className='lif-logo__img' />
						<h1 className='lif-logo-text'>NEAR</h1>
					</div>
					<div className='lif-title'>Create an account and...</div>
					<SliderComponent slides={slides} setSlides={setSlides} />
				</div>
				<div className='lif__column2'>
					<div className='form-desc'>
						<p className='letsgo-text'>LET'S GET YOU STARTED</p>
						<h4 className='lif-form__title'>Create an Account</h4>
						<div className='lif-input-section'>
							<InputComponent
								id='name'
								type='text'
								width='calc(var(--index) * 2.364)'
							>
								Name
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
								width='calc(var(--index) * 6.1)'
							>
								Country, city, district
							</InputComponent>
							<InputComponent
								id='birthday'
								type='date'
								width='calc(var(--index) * 2.95)'
							>
								Birthday
							</InputComponent>
							<div className='radio-section'>
								<h4 className='radio-title'>
									Options of receive notifications
								</h4>
								<div className='radio-button-row'>
									<RadioButtonComponent
										id='emailRadio'
										name='emailRadio'
										value='email-notification'
									>
										Email
									</RadioButtonComponent>
									<RadioButtonComponent
										id='telegramRadio'
										name='telegramRadio'
										value='telegram-notification'
									>
										Telegram
									</RadioButtonComponent>
									<RadioButtonComponent
										id='mobileRadio'
										name='mobileRadio'
										value='mobile-notification'
									>
										Mobile app
									</RadioButtonComponent>
								</div>
							</div>
						</div>
						<button className='lif-button'>
							<span>GER STARTED</span>
						</button>
						<div className='lif-link__row'>
							<p className='lif-link__text'>Already have an account?</p>
							<NavLink to='/NEAR-frontend/login/account' className='lif-link'>
								LOGIN HERE
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</LogInFramework>
	);
};

export default SingUpAccount;
