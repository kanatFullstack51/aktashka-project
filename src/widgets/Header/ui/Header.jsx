import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'src/widgets/Modal';
import styles from './Header.module.scss';

export const Header = () => {
	const listItems = [
		{
			main: 'Главная'
		}, {
			projects: 'Наши проекты'
		}, {
			price: 'Расчет стоимости'
		}, {
			services: 'Услуги'
		}, {
			contacts: 'Контакты'
		}
	]




	return (
		<div className={styles.header}>
			<div className={styles.header_inner}>
				<div className={styles.header_info}>

					<LeftSideOfComponent>
						<div className={styles.info}>
							<div className={styles.info_logo_block}>
								<div className={styles.info_logo}>
									LOGO
								</div>
								<div className={styles.info_title}>
									Проектирование и строительство<br />
									авторских домов
								</div>
							</div>
						</div>
					</LeftSideOfComponent>
					{/* ЭКЗЕМПЛР РАБОТЫ С ЧИЛДРЕН
					 ДЛЯ НАГЛЯДНОСТИ ЭТО ГОРАЗДО УДОБНЕЕ КОГДА ТЫ ПОДРАЗДЕЛЯЕШЬ НА КАКИЕ ТО ЧАСТИ КОМПОНЕНТЫ
					 И ЧТОБЫ ВСЕ ВРЕМЯ НЕ ОТХОДИТЬ МОЖНО ПРОПСОМ ПЕРЕДАТЬ ЧИЛДРЕН 
					КАК Я И СДЕЛАЛ
					*/}


					<RightSideOfComponent />
				</div>
				<div className={styles.navigation}>
					<div className={styles.navigation_inner}>
						<ul className={styles.navigation_link}>
							{/* ИЗМЕНЕНО ТК КОГДА МНОГО ПОВТОРЯЮЩИХСЯ ЭЛЕМЕНТОВ ДЕЛАЙ МАП ТК ЛУЧШЕ ИЗ ПРОИТЕРИРОВАТЬ  */}
							{listItems
								.filter((item) => typeof item.main === 'string')
								.map((item) => {
									return (
										<li className={styles.navigation_text} key={item.main}><Link to='/'>{item.main}</Link></li>
									)
								})}
							{listItems
								.filter((item) => typeof item.projects === 'string')
								.map((item) => {
									return (
										<li className={styles.navigation_text} key={item.projects}><Link to='/projectPage'>{item.projects}</Link></li>
									)
								})}
							{listItems
								.filter((item) => typeof item.price === 'string')
								.map((item) => {
									return (
										<li className={styles.navigation_text} key={item.price}>{item.price}</li>
									)
								})}
							{listItems
								.filter((item) => typeof item.services === 'string')
								.map((item) => {
									return (
										<li className={styles.navigation_text} key={item.services}>{item.services}</li>
									)
								})}
							{listItems
								.filter((item) => typeof item.contacts === 'string')
								.map((item) => {
									return (
										<li className={styles.navigation_text} key={item.contacts}>{item.contacts}</li>
									)
								})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};


const RightSideOfComponent = () => {

	const [openModal, setOpenModal] = useState(false)

	return (
		<div className={styles.phone}>
			<div className={styles.phone_block}>
				<div className={styles.phone_block_inner}>
					<div className={styles.phone_number}>
						<p className={styles.phone_number_title}>Бесплатный звонок по всей России</p>
						<div className={[styles.phone_number_block]}>
							<div className={styles.phone_number_icon}>
								<p>
									Logo
								</p>
							</div>
							<div className={styles.phone_number_num}>
								<p>8 (800) 888 88 88</p>
								<p>8 (800) 888 88 88</p>
							</div>
						</div>

					</div>
					<div className={styles.phone_consultation}>
						<div className={styles.phone_consultation_inner}>
							<div className={styles.phone_consultation_text}>
								<p>Logo</p>
								<p>Нужна Консультация?<br />
									Перезвоним через 3 минуты <br />
									<span onClick={() => setOpenModal(true)} >Заказать обратный звонок</span>
								</p>
							</div>
						</div>
					</div>
					{openModal && <Modal closeModal={setOpenModal} />}
				</div>
			</div>
		</div>
	)
}

const LeftSideOfComponent = ({ children }) => {
	return (
		<>
			{children}
		</>
	)
}