import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import SplitText from './../../../utils/Split3.min.js';
import LandingNav from '../LandingNav/LandingNav';

import './landingHeader.css';

export default function LandingHeader({ setLogInActive, setSingInActive }) {
	const headerRef = useRef(null); // определяем ref
	const textRef = useRef(null);
	const [loaded, setLoaded] = useState(false); // стейт для загрузки

	useEffect(() => {
		if (headerRef.current) {
			const splitHeader = new SplitText(headerRef.current, {
				type: 'lines',
				linesClass: 'lineChildren',
			});

			const splitParent = new SplitText(headerRef.current, {
				type: 'lines',
				linesClass: 'lineParent',
			});

			gsap.to(splitHeader.lines, {
				duration: 1,
				y: 0,
				opacity: 1,
				stagger: 0.1,
				ease: 'power2',
				onComplete: () => {
					// добавляем callback на завершение анимации
					if (textRef.current) {
						const splitText = new SplitText(textRef.current, {
							type: 'lines',
							linesClass: 'lineChildren',
						});

						const splitParentText = new SplitText(textRef.current, {
							type: 'lines',
							linesClass: 'lineParent',
						});

						gsap.to(splitText.lines, {
							duration: 0.5,
							y: 0,
							opacity: 1,
							visibility: 'visible',
							stagger: 0.1,
							ease: 'power2',
						});
					}
				},
			});
		}
	}, []);

	return (
		<section className='landing-header-section' data-scroll-section>
			<div className='header-img'>
				<div className='header-wrapper'>
					<div className='sectionUp'>
						<LandingNav
							setLogInActive={setLogInActive}
							setSingInActive={setSingInActive}
						/>
						<div className='heder-column'>
							<div className='landing-header'>
								<h2 className='header-title' id='header-title' ref={headerRef}>
									At critical moments, <em>NEAR</em> is your guardian angel
								</h2>
								<p className='header-text' ref={textRef}>
									<em>N</em>otifies about <em>E</em>mergency situations, and
									delivering <em>A</em>lerts <em>R</em>apid.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
