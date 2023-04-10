import React from 'react';
import styles from './projectComponent.module.scss'
import { houseData } from '../data';
export const ProjectComponent = ({ id }) => {

	return (
		<div key={houseData.id} className={styles.project_component_wrapper}>
			<div className={styles.project_component}>
				<div className={styles.project_component_inner}>
					<div className={styles.project_component_photo}>
						{
							houseData.map((item) => {
								return (
									<img className={styles.project_component_img} alt='house' src={item.img} />
								)
							})
						}
					</div>
					<div className={styles.project_component_descr}>
						{
							houseData.map((item) => {
								return (
									<p className={styles.project_component_uptitle}>{item.title}</p>
								)
							})
						}
					</div>

					<div className={styles.project_component_price}>
						{
							houseData.map((item) => {
								return (
									<h2 className={styles.project_component_title}>Цена: {item.price}  <span>руб.</span></h2>
								)
							})
						}

					</div>

					<div className={styles.project_component_text_block}>
						{
							houseData.map((item) => {
								return (
									<p className={styles.project_component_text}>{item.text}</p>
								)
							})
						}
					</div>
					<div className={styles.project_component_button}>
						<button className={styles.project_component_btn}>Подробнее</button>
					</div>
				</div>
			</div>
		</div>

	)
}