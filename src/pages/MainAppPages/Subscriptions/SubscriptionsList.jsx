const SubscriptionsList = ({ currentUser }) => {
	//console.log(userInfo);
	return (
		<div>
			<h1>SubscriptionsList</h1>
			{currentUser ? <p>User ID: {currentUser.id}</p> : <p>User not found</p>}
		</div>
	);
};

export default SubscriptionsList;
