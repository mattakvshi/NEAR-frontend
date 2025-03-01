import './tabButton.css';

import React, { useState } from 'react';

const TabButton = ({ type, activeTab, setActiveTab }) => {
	return (
		<>
			{type === 'friends' ? (
				<div className='friends-tabs'>
					<button
						className={`tab-button ${
							activeTab === 'allFriends' ? 'active' : ''
						}`}
						onClick={() => setActiveTab('allFriends')}
					>
						All friends
					</button>
					<button
						className={`tab-button ${
							activeTab === 'sentRequests' ? 'active' : ''
						}`}
						onClick={() => setActiveTab('sentRequests')}
					>
						Friends requests sent
					</button>
					<button
						className={`tab-button ${
							activeTab === 'receivedRequests' ? 'active' : ''
						}`}
						onClick={() => setActiveTab('receivedRequests')}
					>
						Friends requests received
					</button>
				</div>
			) : (
				<div className='friends-tabs'>
					<button className={'tab-button active'}>All groups</button>
				</div>
			)}
		</>
	);
};
export default TabButton;
