import './optionsItem.css';

const OptionsItem = ({
	title,
	color,
	bgColor,
	colorDark,
	bgColorDark,
	isDarkMode,
}) => {
	return (
		<li
			style={{ backgroundColor: isDarkMode ? bgColorDark : bgColor }}
			className='options-wrapper'
		>
			<span
				style={{ color: isDarkMode ? colorDark : color }}
				className='options-text'
			>
				{title}
			</span>
		</li>
	);
};
export default OptionsItem;
