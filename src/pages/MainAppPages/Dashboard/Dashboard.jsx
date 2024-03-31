import './dashboard.css';

const Dashboard = ({ userInfo }) => {
	//console.log(userInfo);
	return (
		<div className='dashboard-wrapper'>
			<div className='actions-row'>
				<div className='actions-row__item'>
					<div className='item-block-type1'></div>
				</div>
				<div className='actions-row__item'>
					<div className='item-block-type1'></div>
				</div>
				<div className='actions-row__item'></div>
				<div className='actions-row__item'></div>
			</div>
			<div className='templates-row'>
				<h1>My templates</h1>
				<ul></ul>
			</div>
		</div>
	);
};

export default Dashboard;
