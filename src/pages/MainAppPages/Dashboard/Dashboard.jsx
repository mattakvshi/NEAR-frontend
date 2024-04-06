import './dashboard.css';

import { useState, useEffect, useRef } from 'react';

import TemplateListItem from '../../../components/MainAppComponents/DashboardComponents/TemplateListItem/TemplateListItem';
import { templatesList } from '../../../helpers/NotificationTemplatesList';

import bell from '../../../img/mdi_bell.png';
import groupsImg from '../../../img/NEAR-user-group.png';
import submitedTemplatesImg from '../../../img/NEAR-sentNotification-icon копия.png';
import sos from '../../../img/MainAppIcon/Group 33514.png';
import plus from '../../../img/MainAppIcon/Vector.svg';
import profileTmpImg from '../../../img/NEAR-user-small.png';
import arrow from '../../../img/MainAppIcon/Line 39.svg';
import ListWrapper from '../../../components/MainAppComponents/ListWrapper/ListWrapper';
import ListWrapperHeader from '../../../components/MainAppComponents/ListWrapperHeader/ListWrapperHeader';

const Dashboard = ({ currentUser, preloaderSvg, useLocoScroll }) => {
	const currentTemplatesList = () => {
		return 'templates' in currentUser
			? templatesList.filter(template =>
					currentUser.templates.some(
						userTemplate => userTemplate.id === template.id
					)
			  )
			: null;
	};

	const [timer, setTimer] = useState(1);
	const id = useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
	};

	// Инициализируем таймер
	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer(timer => timer - 1);
		}, 1000);
		return () => window.clearInterval(id.current); // очистить интервал при размонтировании компонента
	}, []);

	// Проверка, когда таймер достигнет 0
	useEffect(() => {
		if (timer === 0) {
			clear();
			//console.log('отработал');
		}
	}, [timer]);

	useLocoScroll(!(timer > 0));

	return (
		<>
			{timer > 0 ? (
				<div className='preloader-svg-wrapper'>
					<img className='preloader-svg' src={preloaderSvg} alt='preloader' />
				</div>
			) : (
				<section className='dashboard-wrapper' data-scroll-section>
					<div className='actions-row'>
						<div className='actions-row__item'>
							<div className='item-block-type1'>
								<img
									className='tools-img-top-right bell'
									src={bell}
									alt='bell'
								/>
								<h5 className='tools-text text-type1'>
									Create a new
									<br /> notification
									<br /> template
								</h5>
								<div className='plus-wrapper'>
									<img className='plus' src={plus} alt='plus' />
								</div>
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
								<img
									className='user-small user-small1'
									src={profileTmpImg}
									alt='profileTmpImg'
								/>
								<img
									className='user-small user-small2'
									src={profileTmpImg}
									alt='profileTmpImg'
								/>
								<img
									className='user-small user-small3'
									src={profileTmpImg}
									alt='profileTmpImg'
								/>
								<div className='user-small user-count'>25+</div>
								<div className='arrow-wrapper'>
									<img className='arrow' src={arrow} alt='arrow' />
								</div>
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
								<div className='open-wrapper'>Open</div>
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
						<ul className='template-list'>
							{/* Стили для этого класса (template-list) решил прописать в файлике для стилей самого шаблона templateListItem.css*/}
							{currentTemplatesList() ? (
								currentTemplatesList().map(template => {
									return (
										<TemplateListItem
											key={template.id}
											title={template.title}
											selectedImg={
												'selectedImg' in template
													? template.selectedImg
													: `${process.env.PUBLIC_URL}/tmpTemplatesImg/NEAR-template-notification-icon.png`
											}
											emergencyType={template.emergencyType}
											date={template.date}
										/>
									);
								})
							) : (
								<div>Create template</div>
							)}
						</ul>
					</div>
					<ListWrapper>
						<ListWrapperHeader title={'Select Recipients'} />
					</ListWrapper>
					{/*Чтобы прокрутка до конца долистывала*/}
					<div style={{ minHeight: '200px' }}></div>
				</section>
			)}
		</>
	);
};

export default Dashboard;
