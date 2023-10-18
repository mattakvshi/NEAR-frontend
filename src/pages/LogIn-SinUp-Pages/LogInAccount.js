import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogInFramework from '../../components/LogIn-SingUp/LogInFramework/LogInFramework';

import InputComponent from '../../components/LogIn-SingUp/InputComponent/InputComponent';
import CheckBoxComponent from '../../components/LogIn-SingUp/CheckBoxComponent/CheckBoxComponent';
import StartModal from '../../components/LandingComponents/StartModal/StartModal';
import PasswordInput from '../../components/LogIn-SingUp/InputComponent/PasswordInput';

const LogInAccount = ({ AccLogImg, logoImg }) => {
	const [modalActive, setModalActive] = useState(false);

	return (
		<>
			<LogInFramework img={AccLogImg} opacity={0.38}>
				<div className='lif__row'>
					<div className='lif__column'>
						<div className='lif-logo'>
							<img src={logoImg} alt='' className='lif-logo__img' />
							<h1 className='lif-logo-text'>NEAR</h1>
						</div>
						<div className='lif-title'>Log in and...</div>
						<div className='lif-text'>
							You will be able to add your loved ones to friends, create
							templates for sending emergency notifications, create groups for
							convenient mailing, as well as subscribe to notifications from
							communities that always keep their finger on the pulse.
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
							<p className='letsgo-text'>WELCOME BACK</p>
							<h4 className='lif-form__title'>Log In to your Account</h4>
							<div className='lif-input-section'>
								<InputComponent id='email' type='email' width='66px'>
									Email
								</InputComponent>
								<PasswordInput id='password' width='94px'>
									Password
								</PasswordInput>
							</div>
							<div className='lif-check-row'>
								<div className='box-and-p-row'>
									<CheckBoxComponent />
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
								<span>GER STARTED</span>
							</button>
							<div className='lif-link__row'>
								<p className='lif-link__text'>New User?</p>
								<NavLink
									to='/NEAR-frontend/signup/account'
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

export default LogInAccount;
