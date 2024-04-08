import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
	useEffect(() => {
		if (!start) return;
		let locoScroll = null;
		let scrollEnd = true;
		let scrollPositionLog = [0, 0];

		const scrollEl = document.querySelector('#main-section__body');

		if (!scrollEl) return; //Проверка на то существует ли по данному пути элемент прокрутки

		locoScroll = new LocomotiveScroll({
			el: scrollEl,
			smooth: true,
			multiplier: 1,
			class: 'is-reveal',
		});

		const ReFrEsH = () => {
			if (scrollEnd) ScrollTrigger.refresh();
		};

		// Функция для проверки состояния прокрутки
		const handleScroll = () => {
			const scrollPosition = locoScroll.scroll.instance.scroll.y;
			const scrollLimit = locoScroll.scroll.instance.limit;

			//console.log(scrollPosition, scrollLimit.y - 200);
			//console.log(locoScroll.scroll.instance.limit);

			//Запоминаю прошлое и текущее состояние скролла
			scrollPositionLog[0] = scrollPositionLog[1];
			scrollPositionLog[1] = scrollPosition;

			//Чтобы не листали если нечего листать и стек не переполняли
			if (scrollLimit.y === 0) {
				return;
			}

			//console.log(scrollDown, scrollEnd);

			if (scrollPositionLog[0] < scrollPositionLog[1]) {
				//console.log('листаю вниз');
				if (!scrollEnd) {
					//console.log('листаю вниз но долистал до конца и скролл залочен');
					return;
				}

				if (scrollPosition >= scrollLimit.y) {
					ReFrEsH(scrollEnd);
					ScrollTrigger.update();
					//console.log('Долистал до низа');
					scrollEnd = false;
					//locoScroll.stop();
					//setTimeout(1000);
					//locoScroll.start();
				} else {
					ScrollTrigger.update();
					//console.log('Листаю');
					//console.log(locoScroll.scroll.instance);
				}
			} else {
				scrollEnd = true;
				ScrollTrigger.update();
			}
		};

		// Слушаем событие прокрутки
		locoScroll.on('scroll', handleScroll);

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
				console.log('Kill', locoScroll);
			}
		};
	}, [start]);
}
