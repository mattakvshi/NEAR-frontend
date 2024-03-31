import './dashboard.css';

import TemplateListItem from '../../../components/MainAppComponents/DashboardComponents/TemplateListItem/TemplateListItem';

import { templatesList } from '../../../helpers/NotificationTemplatesList';

const Dashboard = ({ currentUser }) => {
	const currentTemplatesList = () => {
		return 'templates' in currentUser
			? templatesList.filter(template =>
					currentUser.templates.some(
						userTemplate => userTemplate.id === template.id
					)
			  )
			: null;
	};

	//console.log(currentTemplatesList);

	return (
		<div className='dashboard-wrapper'>
			<div className='actions-row'>
				<div className='actions-row__item'>
					<div className='item-block-type1'></div>
				</div>
				<div className='actions-row__item'>
					<div className='item-block-type1'></div>
				</div>
				<div className='actions-row__item'>
					<div className='item-block-type2'></div>
				</div>
				<div className='actions-row__item'>
					<div className='item-block-type3'>
						<div className='item-block-type4'></div>
					</div>
				</div>
			</div>
			<div className='templates-row'>
				<h1 className='templates-row__title'>My templates</h1>
				<ul>
					{currentTemplatesList() ? (
						currentTemplatesList().map(template => {
							return (
								<TemplateListItem key={template.id} title={template.title} />
							);
						})
					) : (
						<div>Create template</div>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
