import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start, param) {
	useEffect(() => {
		if (!start) return;
		let locoScroll = null;

		const scrollEl = document.querySelector('#main-section__body');

		if (!scrollEl) return; //Проверка на то существует ли по данному пути элемент прокрутки

		locoScroll = new LocomotiveScroll({
			el: scrollEl,
			smooth: true,
			multiplier: 1.3,
			class: 'is-reveal',
		});

		// Функция для проверки достижения конца области прокрутки
		const handleScrollEnd = () => {
			const scrollPosition = locoScroll.scroll.instance.scroll.y;
			const scrollLimit = locoScroll.scroll.instance.limit;

			//console.log(scrollPosition, scrollLimit.y - 200);

			if (scrollPosition >= scrollLimit.y) {
				ScrollTrigger.refresh();
				ScrollTrigger.update();
				//console.log('Долистал до низа');
			} else {
				ScrollTrigger.update();
				//console.log('Листаю');
			}
		};

		// Слушаем событие прокрутки
		locoScroll.on('scroll', handleScrollEnd);

		ScrollTrigger.scrollerProxy(scrollEl, {
			scrollTop(value) {
				if (locoScroll) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.y;
				}
				return null;
			},
			scrollLeft(value) {
				if (locoScroll) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.x;
				}
				return null;
			},
		});

		const lsUpdate = () => {
			if (locoScroll) {
				locoScroll.update();
			}
		};

		ScrollTrigger.addEventListener('refresh', lsUpdate);
		ScrollTrigger.refresh();

		return () => {
			if (locoScroll) {
				ScrollTrigger.removeEventListener('refresh', lsUpdate);
				locoScroll.destroy();
				locoScroll = null;
				console.log('Kill', locoScroll, param);
			}
		};
	}, [start]);
}
