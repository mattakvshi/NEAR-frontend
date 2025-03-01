import './listWrapperHeader.css';

import searchSvg from '../../../img/MainAppIcon/material-symbols_search.svg';
import TabButton from '../TabButton/TabButton';

const ListWrapperHeader = ({ type, title, activeTab, setActiveTab }) => {
	return (
		<>
			{type === 'dashboard' ? (
				<div className='list-header-wrapper'>
					<h2 className='list-header-wrapper__title'>{title}</h2>
					<div className='search-wrapper'>
						<img className='search-svg' src={searchSvg} alt='searchSvg' />
						<input
							id='search'
							className='search-input'
							type='text'
							placeholder='Search'
						/>
					</div>
				</div>
			) : (
				<div className='list-header-wrapper'>
					<h2 className='list-header-wrapper__title'>
						<TabButton
							type={'friends'}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						></TabButton>
					</h2>
					<div className='search-wrapper'>
						<img className='search-svg' src={searchSvg} alt='searchSvg' />
						<input
							id='search'
							className='search-input'
							type='text'
							placeholder='Search'
						/>
					</div>
				</div>
			)}
		</>
	);
};
export default ListWrapperHeader;
