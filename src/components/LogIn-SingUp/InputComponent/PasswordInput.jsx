import { useState } from 'react';

import './inputComponent.css';

export default function PasswordInput({ children, id, width }) {
	const [passwordView, setPasswordView] = useState(false);

	return (
		<div className='input-container'>
			<input
				id={id}
				className='input'
				type={passwordView ? 'text' : 'password'}
				placeholder=' '
			/>
			<div className='cut' style={{ width: width }}></div>
			<label htmlFor={id} className='placeholder'>
				{children}
			</label>
			<svg
				className='password-eye'
				viewBox='0 0 17 17'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				onClick={() => setPasswordView(prevState => !prevState)}
			>
				<mask
					id='mask0_206_394'
					style={{ maskType: 'luminance' }}
					maskUnits='userSpaceOnUse'
					x='0'
					y='0'
					width='17'
					height='17'
				>
					<rect x='0.499756' y='0.500244' width='16' height='16' fill='white' />
				</mask>
				<g mask='url(#mask0_206_394)'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M16.4998 8.50024C16.4998 8.50024 13.4998 3.00024 8.49976 3.00024C3.49976 3.00024 0.499756 8.50024 0.499756 8.50024C0.499756 8.50024 3.49976 14.0002 8.49976 14.0002C13.4998 14.0002 16.4998 8.50024 16.4998 8.50024ZM1.67276 8.50024C2.15628 9.23512 2.71241 9.91956 3.33276 10.5432C4.61976 11.8322 6.37976 13.0002 8.49976 13.0002C10.6198 13.0002 12.3788 11.8322 13.6678 10.5432C14.2881 9.91955 14.8442 9.23512 15.3278 8.50025C14.8442 7.76537 14.2881 7.08093 13.6678 6.45724C12.3788 5.16824 10.6188 4.00024 8.49976 4.00024C6.37976 4.00024 4.62076 5.16824 3.33176 6.45724C2.7114 7.08093 2.15527 7.76537 1.67175 8.50025L1.67276 8.50024Z'
						fill='#344756'
						fillOpacity='0.7'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M8.49976 6.00024C7.11905 6.00024 5.99976 7.11953 5.99976 8.50024C5.99975 9.88095 7.11903 11.0002 8.49974 11.0002C9.88045 11.0002 10.9997 9.88097 10.9998 8.50026C10.9998 7.11955 9.88048 6.00025 8.49977 6.00024H8.49976ZM4.99976 8.50024C4.99976 7.24982 5.66685 6.09437 6.74976 5.46916C7.83266 4.84394 9.16685 4.84394 10.2498 5.46915C11.3327 6.09437 11.9998 7.24981 11.9998 8.50024C11.9998 9.75067 11.3327 10.9061 10.2498 11.5313C9.16685 12.1565 7.83266 12.1565 6.74976 11.5313C5.66685 10.9061 4.99976 9.75067 4.99976 8.50024V8.50024Z'
						fill='#344756'
						fillOpacity='0.7'
					/>
				</g>
			</svg>
		</div>
	);
}
