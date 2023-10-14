import React from 'react';

import './startModal.css';

import closePng from './../../../img/Landing/NEAR-close-icon.png';

const StartModal = ({ active, setActive, children }) => {
	return (
		<section
			className={active ? 'start-modal active' : 'start-modal'}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? 'modal-content active' : 'modal-content'}
				onClick={e => e.stopPropagation()}
			>
				<img
					src={closePng}
					alt='closePng'
					className='close-button'
					onClick={() => setActive(false)}
				/>
				{children}
			</div>
		</section>
	);
};

export default StartModal;
