const FriendsList = ({ userInfo }) => {
	return (
		<div>
			<h1>FriendsList</h1>
			{userInfo ? <p>User ID: {userInfo.id}</p> : <p>User not found</p>}
		</div>
	);
};

export default FriendsList;
