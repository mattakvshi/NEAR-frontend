import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

const SingUpAccount = () => {
	return (
		<LogInFramework>
			<div className='lif__row'>
				<div className='lif__column'>
					<div className='lif-logo'></div>
					<div className='lif-title'></div>
					<div className='lif-text'></div>
				</div>
				<div className='lif__column'>
					<div className='form-desc'>
						<p className='letsgo-text'>LET'S GET YOU STARTED</p>
						<h4 className='lif-title'>Create an Account</h4>
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

export default SingUpAccount;
