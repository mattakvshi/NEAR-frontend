import './logInFramework.css';

const LogInFramework = ({ children, img }) => {
	return (
		<main className='lif-main-container'>
			<img src={img} alt='AccCreateImg' className='lif-container-img' />
			<div className='lfi-content-section'>{children}</div>
		</main>
	);
};

export default LogInFramework;
