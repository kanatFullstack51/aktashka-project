import React, { useState } from 'react';

import styles from './Header.module.scss';

export const Header = () => {

	const [call, setCall] = useState(0)


	console.log(call)
	return (
		<div className={styles.header}>
			<div className={styles.header_inner}>
				<div className={styles.header_info}>
					<div className={styles.info}>
						<div className={styles.info_logo_block}>
							<div className={styles.info_logo}>
								LOGO
							</div>
							<div className={styles.info_line}></div>
							<div className={styles.info_title}>
								Проектирование и строительство<br />
								авторских домов
							</div>
						</div>
					</div>
					<div className={styles.phone}>
						<div className={styles.phone_block}>
							<div className={styles.phone_block_inner}>
								<div className={styles.phone_number}>
									<p className={styles.phone_number_title}>Бесплатный звонок по всей России</p>
									<div className={[styles.phone_number_block]}>
										<div className={styles.phone_number_icon}>
											<p>
												icon
											</p>
										</div>
										<div className={styles.phone_number_num}>
											<p onClick={() => setCall(call + 1)}>8 (800) 888 88 88</p>
											<p>8 (800) 888 88 88</p>
										</div>
									</div>

								</div>
								<div className={styles.phone_consultation}>
									<div className={styles.phone_consultation_inner}>
										<div className={styles.phone_consultation_icon}>icon</div>
										<div className={styles.phone_consultation_text}>
											<p>Нужна Консультация?<br />
												Перезвоним через 3 минуты <br />
												<span>Заказать обратный звонок</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.navigation}>
					<div className={styles.navigation_inner}>
						<ul className={styles.navigation_link}>
							<li className={styles.navigation_text}>Главная</li>
							<li className={styles.navigation_text}>Наши проекты</li>
							<li className={styles.navigation_text}>Расчет стоимости</li>
							<li className={styles.navigation_text}>Услуги</li>
							<li className={styles.navigation_text}>Контакты</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
