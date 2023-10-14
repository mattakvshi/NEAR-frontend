import React from 'react';
import descImg from '../../../img/Landing/desc-img.jpg';

import './landingDesc.css';

export default function LandingDesc({ setActive }) {
	return (
		<section className='description-section' data-scroll-section>
			<div className='description-row'>
				<div className='description-column'>
					<img src={descImg} alt='descImg' className='description-img' />
					<div className='color-box'></div>
					<div className='box-1'>
						<span className='box-text'>
							<em>R</em>espond
						</span>
					</div>
					<div className='box-2'>
						<span className='box-text'>
							<em>N</em>otify
						</span>
					</div>
					<div className='box-3'>
						<span className='box-text'>
							<em>A</em>larm
						</span>
					</div>
				</div>
				<div className='description-column'>
					<div className='desc'>
						<h3 className='desc-title'>
							When <em>E</em>mergencies strike, NEAR is there:
						</h3>
						<div className='desc-text'>
							<p>
								With our app, you will be able to keep up to date with all
								important incidents in real time.
							</p>
							<p>
								A personal account will allow you to create and send
								notification templates to your friends and family. You will be
								able to subscribe to community accounts to receive important
								emergency notifications from them.
							</p>
							<p>
								Such an application is especially relevant for seismically
								active regions and during military operations.
							</p>
						</div>
						<div className='start-using-row'>
							<button
								className='start-using-button'
								onClick={() => setActive(true)}
							>
								<span>Start using</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
