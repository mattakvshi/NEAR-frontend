import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import InputComponent from '../../components/LogIn-SingUp/InputComponent/InputComponent';
import PasswordInput from '../../components/LogIn-SingUp/InputComponent/PasswordInput';

const SingUpCommunity = ({ CommCreateImg, logoImg }) => {
	return (
		<LogInFramework img={CommCreateImg} opacity={0.43}>
			<div className='lif__row'>
				<div className='lif__column'>
					<div className='lif-logo'>
						<img src={logoImg} alt='' className='lif-logo__img' />
						<h1 className='lif-logo-text'>NEAR</h1>
					</div>
					<div className='lif-title'>Create a community and...</div>
					<div className='lif-text'>
						You will be able to save a large number of lives! With access to
						information, you will be able to prevent major casualties, promptly
						notify your subscribers of impending emergencies, and the
						precautions they should take.
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
						<h4 className='lif-form__title'>Create a Community</h4>
						<div className='lif-input-section'>
							<InputComponent id='name' type='text' width='162px'>
								Community name
							</InputComponent>
							<InputComponent id='email' type='email' width='66px'>
								Email
							</InputComponent>
							<PasswordInput id='password' width='94px'>
								Password
							</PasswordInput>
							<InputComponent id='location' type='text' width='158px'>
								Monitoring region
							</InputComponent>
							<InputComponent id='emergency' type='text' width='144px'>
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
