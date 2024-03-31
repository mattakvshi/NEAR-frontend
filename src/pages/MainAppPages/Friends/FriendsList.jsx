const FriendsList = ({ currentUser }) => {
	return (
		<div>
			<h1>FriendsList</h1>
			{currentUser ? <p>User ID: {currentUser.id}</p> : <p>User not found</p>}
		</div>
	);
};

export default FriendsList;
