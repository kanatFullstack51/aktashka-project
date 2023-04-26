import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


import MainLogo from '../../../assets/icons/logo.png'
import CallLogo from '../../../assets/icons/phone-call.svg'
import WhatsAppLogo from '../../../assets/icons/whatsapp.svg'
import TelegramLogo from '../../../assets/icons//telegram.svg'
import EmailLogo from '../../../assets/icons/email.gif'
import { Button } from 'src/widgets/Button';

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
		}, {
			technologies: 'Технологии'
		}, {
			portfolio: 'Портфолио'
		}
	]
	return (
		<div className={styles.header}>
			<div className={styles.header_inner}>
				<div className={styles.header_info}>

					<LeftSideOfComponent>
						<div className={styles.info}>
							<div className={styles.info_logo_block}>
								<img className={styles.info_logo_img} src={MainLogo} alt="logo" />
								<div className={styles.info_title}>
									Проектирование и строительство<br />
									авторских домов
								</div>
							</div>
						</div>
					</LeftSideOfComponent>

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
								.filter((item) => typeof item.technologies === 'string')
								.map((item) => {
									return (
										<li className={styles.navigation_text} key={item.technologies}>{item.technologies}</li>
									)
								})}{listItems
									.filter((item) => typeof item.portfolio === 'string')
									.map((item) => {
										return (
											<li className={styles.navigation_text} key={item.portfolio}>{item.portfolio}</li>
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

	return (
		<div className={styles.phone}>
			<div className={styles.phone_block}>
				<div className={styles.phone_block_inner}>
					<div className={styles.phone_number}>
						<p className={styles.phone_number_title}>Бесплатный звонок по всей России</p>
						<div className={[styles.phone_number_block]}>
							<div className={styles.phone_number_icon}>
								<img
									className={styles.phone_number_img}
									src={CallLogo}
									alt=""
								/>
							</div>
							<div className={styles.phone_number_num}>
								<p>8 (962) 266-66-61</p>
								<p>8 (968) 878-55-88</p>
							</div>
						</div>

					</div>
					<div className={styles.phone_consultation}>
						<div className={styles.phone_consultation_inner}>
							<div className={styles.phone_consultation_social}>
								<Link target='_blank' to='https://wa.clck.bar/79688785588'>
									<img
										className={styles.phone_consultation_social_icon}
										src={WhatsAppLogo}
										alt="whatsApp Logo" />
								</Link>
								<Link target='_blank' to='https://t.me/akcstroy'>
									<img
										className={styles.phone_consultation_social_icon}
										src={TelegramLogo}
										alt="Telegram Logo" />
								</Link>
								<img
									className={styles.phone_consultation_social_icon}
									src={EmailLogo}
									alt="Email Logo" />
							</div>

							<div className={styles.phone_consultation_btn_block}>
								<Button children='Заказать Звонок' />
							</div>
						</div>
					</div>
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