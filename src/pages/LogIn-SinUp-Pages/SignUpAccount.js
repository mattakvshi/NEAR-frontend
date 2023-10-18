import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import AccCreateImg from './../../img/SignUp-LogIn/Sign-In-Account.jpg';
import logoImg from './../../img/Landing/NEAR-logo-white.png';
import InputComponent from '../../components/LogIn-SingUp/InputComponent/InputComponent';
import PasswordInput from '../../components/LogIn-SingUp/InputComponent/PasswordInput';

const SingUpAccount = () => {
	return (
		<LogInFramework img={AccCreateImg} opacity={0.53}>
			<div className='lif__row'>
				<div className='lif__column'>
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
				<div className='lif__column'>
					<div className='form-desc'>
						<p className='letsgo-text'>LET'S GET YOU STARTED</p>
						<h4 className='lif-form__title'>Create an Account</h4>
						<div className='lif-input-section'>
							<InputComponent id='name' type='text' width='68px'>
								Name
							</InputComponent>
							<InputComponent id='email' type='email' width='66px'>
								Email
							</InputComponent>
							<PasswordInput id='password' width='94px'>
								Password
							</PasswordInput>
							<InputComponent id='location' type='text' width='176px'>
								Country, city, district
							</InputComponent>
							<InputComponent id='birthday' type='date' width='86px'>
								Birthday
							</InputComponent>
							<div className='radio-row'></div>
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
