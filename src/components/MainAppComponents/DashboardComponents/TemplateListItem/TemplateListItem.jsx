import './templateListItem.css';

import ellipsis from '../../../../img/MainAppIcon/VectorDotDotDot.svg';

const TemplateListItem = ({ title, selectedImg, emergencyType, date }) => {
	return (
		<li className='template-wrapper'>
			<div className='template-wrapper__row'>
				<div className='template-wrapper__row__column'>
					<img className='template-img' src={selectedImg} alt='templateImg' />
				</div>
				<div className='template-wrapper__row__column'>
					<h5 className='template-title'>{title}</h5>
					<p className='template-date'>{date}</p>
				</div>
			</div>
			<div className='template-wrapper__column'>
				<div
					style={{ backgroundColor: emergencyType.bgColor }}
					className='template-type'
				>
					<span
						className='template-type__text'
						style={{ color: emergencyType.color }}
					>
						{emergencyType.title}
					</span>
				</div>
			</div>
			<div className='template-wrapper__column'>
				<img className='ellipsis-img' src={ellipsis} alt='ellipsis' />
			</div>
		</li>
	);
};
export default TemplateListItem;
