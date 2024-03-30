const SubscriptionsList = ({ userInfo }) => {
	//console.log(userInfo);
	return (
		<div>
			<h1>SubscriptionsList</h1>
			{userInfo ? <p>User ID: {userInfo.id}</p> : <p>User not found</p>}
		</div>
	);
};

export default SubscriptionsList;
