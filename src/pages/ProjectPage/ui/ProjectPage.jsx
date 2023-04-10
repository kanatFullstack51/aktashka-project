import React from 'react';
import { ProjectComponent } from 'src/widgets/projectСomponents';
import { houseData } from 'src/widgets/projectСomponents/data';
import styles from './projectPage.module.scss'

export const ProjectPage = () => {

	const id = houseData.map(item => item.id)

	return (
		<div className={styles.project_page}>
			<div className={styles.project_page_inner}>
				<div className={styles.project_page_wrap}>
					<ProjectComponent key={id} id={id} />
					<ProjectComponent id={id} />
				</div>
			</div>
		</div>
	)


}