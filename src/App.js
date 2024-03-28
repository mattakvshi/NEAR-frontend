import './style/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';

import Landing from './pages/Landing';

import LogInAccount from './pages/LogIn-SinUp-Pages/LogInAccount';
import LogInCommunity from './pages/LogIn-SinUp-Pages/LogInCommunity';
import SingUpAccount from './pages/LogIn-SinUp-Pages/SignUpAccount';
import SingUpCommunity from './pages/LogIn-SinUp-Pages/SignUpCommunity';

//Импорты изображений страниц авторизации и регистрации(гружу здесь, чтобы успели загрузиться пока пользователь не перешёл на них)
import AccLogImg from './img/SignUp-LogIn/Log-In-Account.webp';
import CommLogImg from './img/SignUp-LogIn/Log-in-Community.webp';
import AccCreateImg from './img/SignUp-LogIn/Sign-In-Account.webp';
import CommCreateImg from './img/SignUp-LogIn/Sing-in-Community.webp';
//Логотип светлый
//TODO: Загружать его только здесь и дальше везде передавать, не загружать заново
import logoImg from './img/Landing/NEAR-logo-white.png';

import MainApp from './pages/MainAppPages/MainApp';

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Routes>
					{/* Landing */}
					<Route
						path='/NEAR-frontend/'
						element={
							<Landing
								AccLogImg={AccLogImg}
								CommLogImg={CommLogImg}
								AccCreateImg={AccCreateImg}
								CommCreateImg={CommCreateImg}
							/>
						}
					/>

					{/* Sing up - Log in */}
					<Route
						path='/NEAR-frontend/login/account'
						element={<LogInAccount AccLogImg={AccLogImg} logoImg={logoImg} />}
					/>
					<Route
						path='/NEAR-frontend/login/community'
						element={
							<LogInCommunity CommLogImg={CommLogImg} logoImg={logoImg} />
						}
					/>
					<Route
						path='/NEAR-frontend/signup/account'
						element={
							<SingUpAccount AccCreateImg={AccCreateImg} logoImg={logoImg} />
						}
					/>
					<Route
						path='/NEAR-frontend/signup/community'
						element={
							<SingUpCommunity
								CommCreateImg={CommCreateImg}
								logoImg={logoImg}
							/>
						}
					/>

					{/* MainApp */}
					<Route path='/NEAR-frontend/:id/*' element={<MainApp />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
