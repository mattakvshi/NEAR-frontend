import './style/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
import Landing from './pages/Landing';

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path='/NEAR-frontend/' element={<Landing />} />
					{/* <Route path='/' element={<Home />} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
