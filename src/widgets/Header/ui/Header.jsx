import React, { useCallback } from 'react';
import styles from './Header.module.scss';



const RightSideOfComponent = () => {
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
							<p>Нужна Консультация?<br />
								Перезвоним через 3 минуты <br />
								<span>Заказать обратный звонок</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const LeftSideOfComponent = () => {
	return (
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
	)
}

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header_inner}>
				<div className={styles.header_info}>
					<LeftSideOfComponent />
					<RightSideOfComponent />
				</div>
				<div className={styles.header_navigation}>

				</div>
			</div>
		</div>
	);
};
