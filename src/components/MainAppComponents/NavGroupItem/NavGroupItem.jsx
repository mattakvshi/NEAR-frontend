import { Link } from 'react-router-dom';

const NavGroupItem = ({ groupName, selectedColor }) => {
	return (
		<li className='nav-item'>
			<svg
				width='15'
				height='15'
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g filter='url(#filter0_d_221_327)'>
					<circle cx='7.5' cy='3.5' r='3.5' fill={selectedColor} />
				</g>
				<defs>
					<filter
						id='filter0_d_221_327'
						x='0'
						y='0'
						width='15'
						height='15'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset dy='4' />
						<feGaussianBlur stdDeviation='2' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_221_327'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_221_327'
							result='shape'
						/>
					</filter>
				</defs>
			</svg>
			<Link className='nav-item-medium' to=''>
				{groupName}
			</Link>
		</li>
	);
};
export default NavGroupItem;
