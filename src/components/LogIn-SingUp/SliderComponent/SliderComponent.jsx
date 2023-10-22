import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

import './sliderComponent.css';

export default function SliderComponent({ slides, setSlides }) {
	const [activePath, setActivePath] = useState(1);

	const handleSVGClick = useCallback(clickedPath => {
		setActivePath(clickedPath);
	}, []);

	useEffect(() => {
		const slidesNeedUpdate = slides.some(
			(slide, i) =>
				(i === activePath - 1 && !slide.active) ||
				(i !== activePath - 1 && slide.active)
		);

		if (!slidesNeedUpdate) {
			return;
		}

		const updatedSlides = slides.map((slide, i) => {
			if (i === activePath - 1) {
				return { ...slide, active: true };
			} else {
				return { ...slide, active: false };
			}
		});
		setSlides(updatedSlides);
	}, [activePath, slides, setSlides]);

	useEffect(() => {
		const interval = setInterval(() => {
			setActivePath(prevActivePath => (prevActivePath % slides.length) + 1);
		}, 10000);

		return () => {
			clearInterval(interval);
		};
	}, [slides]);

	return (
		<>
			{slides.map((slide, i) => (
				<div key={i} className={`lif-text ${slide.active ? 'show' : 'hide'}`}>
					{slide.text}
				</div>
			))}
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='172.5'
				height='6'
				viewBox='-2 0 170 6'
				fill='none'
				className='lif-slider-svg'
			>
				<motion.path
					d={`M3 3H45`}
					animate={{
						d: activePath === 1 ? `M-2 3H50` : `M3 3H45`,
					}}
					transition={{ duration: 1 }}
					stroke={activePath === 1 ? '#D2D2D2' : '#9E9E9E'}
					strokeWidth={activePath === 1 ? '5' : '2'}
					className='path'
				/>
				<rect
					width='50'
					height='40'
					x='-2'
					y='-20'
					fill='transparent'
					onClick={() => handleSVGClick(1)}
				/>
				<motion.path
					d={`M62.5 3H104.5`}
					animate={{
						d: activePath === 2 ? `M57.5 3H109.5` : `M62.5 3H104.5`,
					}}
					transition={{ duration: 1 }}
					stroke={activePath === 2 ? '#D2D2D2' : '#9E9E9E'}
					strokeWidth={activePath === 2 ? '5' : '2'}
					className='path'
				/>
				<rect
					width='50'
					height='40'
					x='60'
					y='-20'
					fill='transparent'
					onClick={() => handleSVGClick(2)}
				/>
				<motion.path
					d={`M122.5 3H164.5`}
					animate={{
						d: activePath === 3 ? `M117.5 3H169.5` : `M122.5 3H164.5`,
					}}
					transition={{ duration: 1 }}
					stroke={activePath === 3 ? '#D2D2D2' : '#9E9E9E'}
					strokeWidth={activePath === 3 ? '5' : '2'}
					className='path'
				/>
				<rect
					width='52'
					height='40'
					x='115'
					y='-20'
					fill='transparent'
					onClick={() => handleSVGClick(3)}
				/>
			</svg>
		</>
	);
}
