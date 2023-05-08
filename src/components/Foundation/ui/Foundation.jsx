import React from 'react';

import Monolit from '../../../assets/img/monolit.png';
import Cokol from '../../../assets/img/cokol.png';
import Lenta from '../../../assets/img/lenta.png';
import Rostver from '../../../assets/img/fund.png';

import styles from './foundationPage.module.scss'


export const Foundation = () => {
	return (
		<div className={styles.foundation}>
			<div className={styles.foundation_inner}>
				<h1 className={styles.foundation_title}>Типы фундаментов</h1>
				<div className={styles.foundation_block}>
					<div className={styles.foundation_item}>
						<div className={styles.foundation_item_inner}>
							<div className={styles.foundation_item_title_block}>
								<h2 className={styles.foundation_item_title}>
									Монолитная плита
								</h2>
							</div>
							<div className={styles.foundation_item_img_block}>
								<img className={styles.foundation_item_img} src={Monolit} alt="monolit" />
							</div>
							<div className={styles.foundation_item_btn_block}>
								<button className={styles.foundation_item_btn}>
									от 7500 м3
								</button>
							</div>
							<div className={styles.foundation_item_text_block}>
								<p className={styles.foundation_item_text}>
									Вид фундамента для здания, в том числе для индивидуального дома, который представляет собой монолитную конструкцию из бетона/железобетона или сборный каркас из блочных элементов, на котором возводятся стены строения.
								</p>
							</div>
						</div>
					</div>

					<div className={styles.foundation_item}>
						<div className={styles.foundation_item_inner}>
							<div className={styles.foundation_item_title_block}>
								<h2 className={styles.foundation_item_title}>
									Ленточный фундамент
								</h2>
							</div>
							<div className={styles.foundation_item_img_block}>
								<img
									className={styles.foundation_item_img}
									src={Lenta}
									alt="lenta" />
							</div>
							<div className={styles.foundation_item_btn_block}>
								<button
									className={styles.foundation_item_btn}>
									от 14000 м3
								</button>
							</div>
							<div className={styles.foundation_item_text_block}>
								<p className={styles.foundation_item_text}>Представляет собой замкнутый контур из бетонных, чаще железобетонных, элементов возводимый под всеми несущими стенами здания и передающий подлежащему грунту нагрузку от здания.</p>
							</div>
						</div>
					</div>
					<div className={styles.foundation_item}>
						<div className={styles.foundation_item_inner}>
							<div className={styles.foundation_item_title_block}>
								<h2 className={styles.foundation_item_title}>
									Цокольный этаж
								</h2>
							</div>
							<div className={styles.foundation_item_img_block}>
								<img
									className={styles.foundation_item_img}
									src={Cokol}
									alt="cokol" />
							</div>
							<div className={styles.foundation_item_btn_block}>
								<button
									className={styles.foundation_item_btn}>
									от 16000 м3
								</button>
							</div>
							<div className={styles.foundation_item_text_block}>
								<p className={styles.foundation_item_text}>
									Представляет собой помещение, пол которого размещается ниже уровня земли, верхнее перекрытие располагается над грунтом.
								</p>
							</div>
						</div>
					</div>
					<div className={styles.foundation_item}>
						<div className={styles.foundation_item_inner}>
							<div className={styles.foundation_item_title_block}>
								<h2 className={styles.foundation_item_title}>
									Ростверковый фундамент
								</h2>
							</div>
							<div className={styles.foundation_item_img_block}>
								<img
									className={styles.foundation_item_img}
									src={Rostver}
									alt="rostver" />
							</div>
							<div className={styles.foundation_item_btn_block}>
								<button
									className={styles.foundation_item_btn}>
									от 10000м3
								</button>
							</div>
							<div className={styles.foundation_item_text_block}>
								<p className={styles.foundation_item_text}>
									Представляет собой горизонтально расположенный элемент свайного фундамента сооружения, который принимает на себя всю нагрузку здания и, равномерно распределяя, передает ее на опорные колоны.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
