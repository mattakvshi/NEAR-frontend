import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import CommCreateImg from './../../img/SignUp-LogIn/Sing-in-Community.jpg';
import logoImg from './../../img/Landing/NEAR-logo-white.png';

const SingUpCommunity = () => {
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
						<path d='M0 3H48' stroke='#D2D2D2' stroke-width='5' />
						<path d='M59.5 3H91.5' stroke='#9E9E9E' stroke-width='2' />
						<path d='M101.5 3H133.5' stroke='#9E9E9E' stroke-width='2' />
					</svg>
				</div>
				<div className='lif__column'>
					<div className='form-desc'>
						<p className='letsgo-text'></p>
						<h4 className='lif-title'></h4>
						<div className='lif-input-section'></div>
						<button className='lif-button'></button>
						<div className='lif-link__row'>
							<p className='lif-link__text'></p>
							<NavLink to='' className='lif-link' />
						</div>
					</div>
				</div>
			</div>
		</LogInFramework>
	);
};

export default SingUpCommunity;
