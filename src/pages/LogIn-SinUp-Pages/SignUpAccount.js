import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import AccCreateImg from './../../img/SignUp-LogIn/Sign-In-Account.jpg';
import logoImg from './../../img/Landing/NEAR-logo-white.png';

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
						<path d='M0 3H48' stroke='#D2D2D2' stroke-width='5' />
						<path d='M59.5 3H91.5' stroke='#9E9E9E' stroke-width='2' />
						<path d='M101.5 3H133.5' stroke='#9E9E9E' stroke-width='2' />
					</svg>
				</div>
				<div className='lif__column'>
					<div className='form-desc'>
						<p className='letsgo-text'>LET'S GET YOU STARTED</p>
						<h4 className='lif-form__title'>Create an Account</h4>
						<div className='lif-input-section'></div>
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
