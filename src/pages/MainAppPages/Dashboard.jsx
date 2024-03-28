const Dashboard = ({ userInfo }) => {
	//console.log(userInfo);
	return (
		<div>
			<h1>Dashboard</h1>
			{userInfo ? <p>User ID: {userInfo.id}</p> : <p>User not found</p>}
		</div>
	);
};

export default Dashboard;
