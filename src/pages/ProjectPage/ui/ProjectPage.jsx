import React from 'react';
import { ProjectComponent } from 'src/widgets/projectСomponents';

import styles from './projectPage.module.scss'

export const ProjectPage = () => {

	return (
		<div className={styles.project_page}>
			<div className={styles.project_page_inner}>
				<div className={styles.project_page_wrap}>
					<ProjectComponent />
					<ProjectComponent />
					<ProjectComponent />
					<ProjectComponent />
					<ProjectComponent />
					<ProjectComponent />
					<ProjectComponent />
					<ProjectComponent />
					<ProjectComponent />
				</div>
			</div>
		</div>
	)


}