import React, { useState } from 'react';

import { Button } from 'src/widgets/Button';
import { Calculation } from 'src/components/Calculation';
import { Foundation } from 'src/components/Foundation';
import { Modal } from 'src/widgets/Modal';
import styles from './homePage.module.scss'

export const HomePage = ({ }) => {



	return (
		<>
			<div className={styles.home}>
				<div className={styles.home_inner}>
					<div className={styles.home_block}>
						<h1 className={styles.home_title}><span>Проектируем</span> и реализуем  <br /> авторские дома</h1>
					</div>
					<div className={styles.home_contact}>
						<div className={styles.home_contact_inner}>
							<h3 className={styles.home_contact_title}>Свяжитесь с нами</h3>
							<div className={styles.home_contact_btn}>
								<Button children='Получить Расчет'/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Foundation />
			<Calculation />
		</>
	);
}
