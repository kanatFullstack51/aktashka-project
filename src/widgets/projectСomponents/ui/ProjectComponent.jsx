import React from 'react';
import styles from './projectComponent.module.scss'
import houseBg from '../../../assets/img/house_bg.jpg'
import { houseData } from '../data';

export const ProjectComponent = () => {


	return (
		<div key={houseData.id} className={styles.project_component_wrapper}>
			<div className={styles.project_component}>
				<div className={styles.project_component_inner}>
					<div className={styles.project_component_photo}>
						<img className={styles.project_component_img} alt='house' src={houseBg} />
					</div>
					<div className={styles.project_component_descr}>
						<p className={styles.project_component_uptitle}>Коттедж из газобетонных блоков НИШ-168</p>
					</div>

					<div className={styles.project_component_price}>
						<h2 className={styles.project_component_title}>Цена: 3496600 <span>руб.</span></h2>
					</div>

					<div className={styles.project_component_text_block}>
						<p className={styles.project_component_text}>Двухэтажный дом разработанный специально под строительство из газобетонных блоков в Московской области. Несколько вариантов фасада.</p>
					</div>
					<div className={styles.project_component_button}>
						<button className={styles.project_component_btn}>Подробнее</button>
					</div>
				</div>
			</div>
		</div>

	)
}