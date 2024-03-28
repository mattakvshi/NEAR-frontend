import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './mainAppPages.css';

import { usersInfo } from '../../helpers/UsersInfo';

//Вложенные роуты
import Dashboard from './Dashboard';
import FriendsList from './FriendsList';

import MainLogo from '../../img/NEAR-logo.png';

const MainApp = () => {
	const params = useParams();
	const currentID = params.id;

	//console.log(currentID);

	const currentUser = usersInfo.find(user => user.id === currentID);

	//console.log('Текущий пользователь: ', currentUser);

	return (
		<div className='app-wrapper'>
			<div className='left-nav-section'>
				<NavLink to=''>
					<div className='logo'>
						<img className='logo__img' src={MainLogo} alt='logo' />
						<h1 className='logo__text'>NEAR</h1>
					</div>
				</NavLink>

				<div className='space-between-wrapper'>
					<div className='nav-container'>
						<h3>MAIN MENU</h3>
						<nav className='nav-block'>
							<ul>
								<li>
									<Link to=''> Go to dashboard</Link>
								</li>
								<li>
									<Link to='friends'>Go to fiends</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className='group-section'>
						<h3>GROUPS</h3>
						<div className='nav-block'>
							<ul>
								<li>
									<Link to=''> Go to dashboard</Link>
								</li>
								<li>
									<Link to='friends'>Go to fiends</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className='actions-section'>
						<div className='nav-block'>
							<ul>
								<li>
									<Link to=''> Go to dashboard</Link>
								</li>
								<li>
									<Link to='friends'>Go to fiends</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='main-section'>
				<div>
					<Routes>
						<Route path='' element={<Dashboard userInfo={currentUser} />} />
						<Route
							path='friends'
							element={<FriendsList userInfo={currentUser} />}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default MainApp;
