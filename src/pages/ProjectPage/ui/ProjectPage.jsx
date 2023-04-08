import React from 'react';
import { ProjectComponent } from 'src/widgets/projectСomponents';

import styles from './projectPage.module.scss'

export const ProjectPage = () => {

	return (
		<div className={styles.project_page}>
			<ProjectComponent />
		</div>
	)


}