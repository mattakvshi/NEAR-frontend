import './optionsItem.css';

const OptionsItem = ({ title, color, bgColor }) => {
	return (
		<li style={{ backgroundColor: bgColor }} className='options-wrapper'>
			<span style={{ color: color }} className='options-text'>
				{title}
			</span>
		</li>
	);
};
export default OptionsItem;
