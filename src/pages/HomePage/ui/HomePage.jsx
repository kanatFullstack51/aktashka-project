import React from 'react';

import styles from './homePage.module.scss'

export const HomePage = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home_inner}>
				<h1 className={styles.home_title}><span>Проектируем</span> и реализуем  <br /> авторские дома</h1>
			</div>
		</div>
	);
}
