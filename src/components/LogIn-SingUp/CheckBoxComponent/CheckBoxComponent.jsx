import './checkBoxComponent.css';

import React, { useState } from 'react';

export default function CheckBoxComponent({ id }) {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = () => {
		setIsChecked(!isChecked);
	};
	return (
		<label className={`checkbox ${isChecked ? 'checked' : ''}`}>
			<input
				type='checkbox'
				id={id}
				onChange={handleChange}
				checked={isChecked}
			/>
			<svg viewBox='0 0 21 18'>
				<symbol
					id={`${id}tick-path`}
					viewBox='0 0 21 18'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69'
						fill='none'
						strokeWidth='2.25'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</symbol>
				<defs>
					<mask id={`${id}tick`}>
						<use className='tick mask' href={`#${id}tick-path`} />
					</mask>
				</defs>
				<use className='tick' href={`#${id}tick-path`} stroke='currentColor' />
				<path
					fill='white'
					mask={`url(#${id}tick)`}
					d='M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z'
				/>
			</svg>
			<svg className='lines' viewBox='0 0 11 11'>
				<path d='M5.88086 5.89441L9.53504 4.26746' />
				<path d='M5.5274 8.78838L9.45391 9.55161' />
				<path d='M3.49371 4.22065L5.55387 0.79198' />
			</svg>
		</label>
	);
}
