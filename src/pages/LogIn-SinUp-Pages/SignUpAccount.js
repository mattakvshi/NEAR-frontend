import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import InputComponent from '../../components/LogIn-SingUp/InputComponent/InputComponent';
import PasswordInput from '../../components/LogIn-SingUp/InputComponent/PasswordInput';
import RadioButtonComponent from '../../components/LogIn-SingUp/RadioButtonComponent/RadioButtonComponent';

const SingUpAccount = ({ AccCreateImg, logoImg }) => {
	return (
		<LogInFramework img={AccCreateImg} opacity={0.53}>
			<div className='lif__row'>
				<div className='lif__column1'>
					<div className='lif-logo'>
						<img src={logoImg} alt='' className='lif-logo__img' />
						<h1 className='lif-logo-text'>NEAR</h1>
					</div>
					<div className='lif-title'>Create an account and...</div>
					<div className='lif-text'>
						You will be able to add your loved ones to friends, create templates
						for sending emergency notifications, create groups for convenient
						mailing, as well as subscribe to notifications from communities that
						always keep their finger on the pulse.
					</div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='134'
						height='6'
						viewBox='0 0 134 6'
						fill='none'
						className='lif-slider-svg'
					>
						<path d='M0 3H48' stroke='#D2D2D2' strokeWidth='5' />
						<path d='M59.5 3H91.5' stroke='#9E9E9E' strokeWidth='2' />
						<path d='M101.5 3H133.5' stroke='#9E9E9E' strokeWidth='2' />
					</svg>
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
