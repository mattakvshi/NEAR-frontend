import './templateListItem.css';

import ellipsis from '../../../../img/MainAppIcon/VectorDotDotDot.svg';

const TemplateListItem = ({ title, selectedImg, emergencyType, date }) => {
	return (
		<li className='template-wrapper'>
			<div className='template-wrapper__column'>
				<img className='template-img' src={selectedImg} alt='templateImg' />
			</div>
			<div className='template-wrapper__column'>
				<h5>{title}</h5>
				<p>{date}</p>
			</div>
			<div className='template-wrapper__column'></div>
			<div className='template-wrapper__column'>
				<img src={ellipsis} alt='ellipsis' />
			</div>
		</li>
	);
};
export default TemplateListItem;
