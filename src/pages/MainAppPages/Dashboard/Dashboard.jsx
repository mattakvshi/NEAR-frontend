import './dashboard.css';

import TemplateListItem from '../../../components/MainAppComponents/DashboardComponents/TemplateListItem/TemplateListItem';
import { templatesList } from '../../../helpers/NotificationTemplatesList';

import bell from '../../../img/mdi_bell.png';
import groupsImg from '../../../img/NEAR-user-group.png';
import submitedTemplatesImg from '../../../img/NEAR-sentNotification-icon копия.png';
import sos from '../../../img/MainAppIcon/Group 33514.png';

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
					<div className='item-block-type1'>
						<img className='tools-img-top-right bell' src={bell} alt='bell' />
						<h5 className='tools-text text-type1'>
							Create a new
							<br /> notification
							<br /> template
						</h5>
					</div>
				</div>
				<div className='actions-row__item'>
					<div className='item-block-type1'>
						<img
							className='tools-img-top-right groupsImg'
							src={groupsImg}
							alt='groupsImg'
						/>
						<h5 className='tools-text text-type1'>
							Create new
							<br /> group
						</h5>
					</div>
				</div>
				<div className='actions-row__item'>
					<div className='item-block-type2'>
						<h5 className='tools-text text-type2'>
							Submitted
							<br /> Templates
						</h5>
						<img
							className='tools-center-img1'
							src={submitedTemplatesImg}
							alt='submitedTemplatesImg'
						/>
					</div>
				</div>
				<div className='actions-row__item'>
					<div className='item-block-type1'>
						<div className='item-block-type3'>
							<img className='tools-center-img2' src={sos} alt='sos' />
							<p className='text-type3'>
								Click on me if you need emergency help!
							</p>
						</div>
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
