import React, { useState } from 'react';

import styles from './calculationPage.module.scss'

export const Calculation = () => {

	const [content, setContent] = useState(1)


	return (
		<div className={styles.calculation}>
			<div className={styles.calculation_inner}>
				<h1 className={styles.calculation_title}>Рассчитайте стоимость вашего дома</h1>
				<div className={styles.calculation_block}>
					<div className={styles.calculation_tabs}>
						<div className={styles.calculation_tabs_inner}>
							<button
								onClick={() => toggleContent(1)}
								className={styles.calculation_tab}>
								01. Общие данные
							</button>
							<button
								onClick={() => toggleContent(2)}
								className={styles.calculation_tab}>
								02. Планировка
							</button>
							<button
								onClick={() => toggleContent(3)}
								className={styles.calculation_tab}>
								03. Детали и материалы
							</button>
							<button
								onClick={() => toggleContent(4)}
								className={styles.calculation_tab}>
								04. Получить расчет
							</button>
						</div>
					</div>
					<div className={styles.calculation_data}>

					</div>
				</div>
			</div>
		</div>
	);
}


const GeneralData = () => {
	return (
		<div className={styles.general}>
			<div className={styles.calculation_range_data}></div>
			<input className={styles.calculation_range} type="range" min='0' max='2000' />
		</div>
	)
}

const HouseLayout = () => {
	return (
		<div className={styles.Layout}>
			<div>123123121231</div>
		</div>
	)
}
