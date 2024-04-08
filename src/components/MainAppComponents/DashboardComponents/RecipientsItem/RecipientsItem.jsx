import './recipientsItem.css';

import ListLine from '../../ListLine/ListLine';

import { notificationsType } from '../../../../helpers/NotificationsType';
import SmallDivider from '../../SmallDivider/SmallDivider';
import OptionsItem from '../OptionsItem/OptionsItem';

const RecipientsItem = ({
	name,
	type,
	recipientsImg,
	notificationOptions,
	city,
	district,
}) => {
	const currentOptionsList = () => {
		return notificationsType.filter(type =>
			notificationOptions.some(currentOptions => currentOptions.id === type.id)
		);
	};

	//console.log(currentOptionsList());

	return (
		<li>
			<ListLine>
				<div className='recipient-item-column column-width-type2'>
					<div className='recipient-item-row'>
						<div className='recipient-item-column column-width-type4'>
							<img
								className='recipient-img'
								src={recipientsImg}
								alt='recipientImg'
							/>
						</div>
						<div className='recipient-item-column column-width-type1'>
							<div>{name}</div>
						</div>
					</div>
				</div>
				<div className='recipient-item-column column-width-type1'>
					<div>{type}</div>
				</div>
				<div className='recipient-item-column column-width-type3'>
					<ul className='notification-options-list'>
						{currentOptionsList().map(option => {
							return (
								<OptionsItem
									key={option.id}
									title={option.title}
									color={option.color}
									bgColor={option.bgColor}
								/>
							);
						})}
					</ul>
				</div>
				<div className='recipient-item-column column-width-type1'>
					<div>
						{city}, {district}
					</div>
				</div>
			</ListLine>
			<SmallDivider />
		</li>
	);
};
export default RecipientsItem;
