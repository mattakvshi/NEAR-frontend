import './recipientsItem.css';

import ListLine from '../../ListLine/ListLine';

import { notificationsType } from '../../../../helpers/NotificationsType';
import SmallDivider from '../../SmallDivider/SmallDivider';

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
				<img className='recipient-img' src={recipientsImg} alt='recipientImg' />
				<div>{name}</div>
				<div>{type}</div>
				<ul className='notification-options-list'>
					{currentOptionsList().map(options => (
						<li>{options.title}</li>
					))}
				</ul>
				<div>
					{city}, {district}
				</div>
			</ListLine>
			<SmallDivider />
		</li>
	);
};
export default RecipientsItem;
