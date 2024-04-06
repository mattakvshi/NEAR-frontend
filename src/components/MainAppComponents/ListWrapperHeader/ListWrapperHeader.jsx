import './listWrapperHeader.css';

import searchSvg from '../../../img/MainAppIcon/material-symbols_search.svg';

const ListWrapperHeader = ({ title }) => {
	return (
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
	);
};
export default ListWrapperHeader;
