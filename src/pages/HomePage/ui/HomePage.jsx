import React from 'react';

import styles from './homePage.module.scss'

export const HomePage = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home_inner}>
				<div className={styles.home_block}>
					<h1 className={styles.home_title}><span>Проектируем</span> и реализуем  <br /> авторские дома</h1>
				</div>
				<div className={styles.home_contact}>
					<div className={styles.home_contact_inner}>
						<h3 className={styles.home_contact_title}>Свяжитесь с нами</h3>
						<button className={styles.home_btn}>Заказать расчет</button>
					</div>
				</div>
			</div>
		</div>
	);
}
