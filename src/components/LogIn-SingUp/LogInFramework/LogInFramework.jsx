import './logInFramework.css';

import AccCreateImg from './../../../img/SignUp-LogIn/Sign-In-Account.jpg';

const LogInFramework = ({ children }) => {
	return (
		<main className='lif-main-container'>
			<img
				src={AccCreateImg}
				alt='AccCreateImg'
				className='lif-container-img'
			/>
			<div className='lfi-content-section'>{children}</div>
		</main>
	);
};

export default LogInFramework;
