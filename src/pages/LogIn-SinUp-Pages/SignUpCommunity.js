import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import CommCreateImg from './../../img/SignUp-LogIn/Sing-in-Community.jpg';

const SingUpCommunity = () => {
	return (
		<LogInFramework img={CommCreateImg}>
			<div className='lif__row'>
				<div className='lif__column'>
					<div className='lif-logo'></div>
					<div className='lif-title'></div>
					<div className='lif-text'></div>
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
