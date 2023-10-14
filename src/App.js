import './style/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';

import Landing from './pages/Landing';
import LogInAccount from './pages/LogInAccount';
import LogInCommunity from './pages/LogInCommunity';
import SingUpAccount from './pages/SignUpAccount';
import SingUpCommunity from './pages/SignUpCommunity';

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Routes>
					{/* Landing */}
					<Route path='/NEAR-frontend/' element={<Landing />} />

					{/* Create - Log in */}
					<Route
						path='/NEAR-frontend/login/account'
						element={<LogInAccount />}
					/>
					<Route
						path='/NEAR-frontend/login/community'
						element={<LogInCommunity />}
					/>
					<Route
						path='/NEAR-frontend/signup/account'
						element={<SingUpAccount />}
					/>
					<Route
						path='/NEAR-frontend/signup/community'
						element={<SingUpCommunity />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
