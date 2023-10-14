import React, { Children } from 'react';

import './startModal.css';

const StartModal = ({ active, setActive, children }) => {
	return (
		<section
			className={active ? 'start-modal active' : 'start-modal'}
			onClick={() => setActive(false)}
		>
			<div className='modal-content' onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</section>
	);
};

export default StartModal;
