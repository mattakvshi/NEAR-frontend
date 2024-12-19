import React, { useEffect, useRef } from 'react';

const YandexCaptcha = ({ onSuccess }) => {
	const captchaRef = useRef(null);

	useEffect(() => {
		const onLoad = () => {
			if (window.smartCaptcha) {
				window.smartCaptcha.render('captcha-container', {
					sitekey: 'ysc1_SsRdSqrquLyP34g8XMwJ4hf4dkeEkn8vSXhrQ0lI6b56651b',
					callback: token => {
						console.log('Капча пройдена, токен:', token);
						onSuccess(token); // Передаем успешное событие наверх
					},
					error_callback: err => {
						console.error('Ошибка капчи:', err);
					},
				});
			}
		};

		if (window.smartCaptcha) {
			onLoad();
		} else {
			window.addEventListener('load', onLoad);
		}

		return () => {
			window.removeEventListener('load', onLoad);
		};
	}, [onSuccess]);

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				flexDirection: 'column',

				backgroundColor: '#0a1f32',
			}}
		>
			<h3
				style={{
					fontSize: '36px',
					marginBottom: '50px',
					color: '#d2d2d2',
					fontWeight: '600',
				}}
			>
				Пожалуйста, пройдите проверку
			</h3>
			<div
				id='captcha-container'
				ref={captchaRef}
				style={{ height: '100px', width: '500px' }}
			></div>
		</div>
	);
};

export default YandexCaptcha;
