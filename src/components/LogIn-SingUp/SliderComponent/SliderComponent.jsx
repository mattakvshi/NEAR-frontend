import { useEffect, useState } from 'react';

export default function SliderComponent({ slides, setSlides }) {
	const [activePath, setActivePath] = useState(1);

	const handleSVGClick = clickedPath => {
		setActivePath(clickedPath);

		const updatedSlides = slides.map((slide, i) => {
			if (i === clickedPath - 1) {
				return { ...slide, active: true };
			} else {
				return { ...slide, active: false };
			}
		});
		setSlides(updatedSlides);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setActivePath(prevActivePath => {
				const nextActivePath = (prevActivePath % slides.length) + 1;
				handleSVGClick(nextActivePath);
				return nextActivePath;
			});
		}, 7000);
		return () => {
			clearInterval(interval);
		};
	}, [slides]);

	return (
		<>
			{slides.map(
				(slide, i) =>
					slide.active && (
						<div key={i} className='lif-text'>
							{slide.text}
						</div>
					)
			)}
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='134'
				height='6'
				viewBox='0 0 134 6'
				fill='none'
				className='lif-slider-svg'
			>
				<path
					d={`M0 3H48`}
					stroke={activePath === 1 ? '#D2D2D2' : '#9E9E9E'}
					strokeWidth={activePath === 1 ? '5' : '2'}
					onClick={() => handleSVGClick(1)}
				/>
				<path
					d={`M59.5 3H91.5`}
					stroke={activePath === 2 ? '#D2D2D2' : '#9E9E9E'}
					strokeWidth={activePath === 2 ? '5' : '2'}
					onClick={() => handleSVGClick(2)}
				/>
				<path
					d={`M101.5 3H133.5`}
					stroke={activePath === 3 ? '#D2D2D2' : '#9E9E9E'}
					strokeWidth={activePath === 3 ? '5' : '2'}
					onClick={() => handleSVGClick(3)}
				/>
			</svg>
		</>
	);
}
