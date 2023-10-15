import './logInFramework.css';

const LogInFramework = ({ children, img, opacity }) => {
	return (
		<div className='none-scroll'>
			<section className='lif-wrapper'></section>
			<img
				src={img}
				alt='AccCreateImg'
				className='lif-container-img'
				style={{ opacity: opacity }}
			/>
			<main className='lif-main-container'>
				<div className='lfi-content-section'>{children}</div>
			</main>
		</div>
	);
};

export default LogInFramework;
