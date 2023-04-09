import React from 'react';
import house from '../../../assets/img/house_bg.jpg'
import styles from './projectComponent.module.scss'

export const ProjectComponent = () => {

	return (
		<div className={styles.project_component_wrapper}>
			<div className={styles.project_component}>
				<div className={styles.project_component_inner}>
					<div className={styles.project_component_photo}>
						<img className={styles.project_component_img} src={house} alt="house" />
					</div>
					<div className={styles.project_component_descr}>
						<p className={styles.project_component_uptitle}>Коттедж из газобетонных блоков НИШ-168</p>
					</div>

					<div className={styles.project_component_price}>
						<h2 className={styles.project_component_title}>Цена: от 3 496 600 <span>руб.</span></h2>
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