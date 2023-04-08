import React from 'react';

import styles from './homePage.module.scss'

export const HomePage = () => {
	return ( 
		<div className={styles.home}>
			<div className={styles.home_inner}>
				<h1 className={styles.home_title}>Построй дом своей мечты</h1>
			</div>
		</div>
	 );
}
 