import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './dropdown.module.scss'
import { Button } from 'src/widgets/Button';

export const Dropdown = ({ TextContent, TitleContent }) => {

	const [open, setOpen] = useState(false)
	const toggleOpen = () => setOpen((open) => !open);

	return (
		<div className={styles.dropdown} >
			<Button
				onClick={toggleOpen}
				projectType='dropdown'
				children={TitleContent} />
			<CSSTransition in={open} timeout={100} classNames={styles.alert} unmountOnExit>
				<div className={styles.dropdown_content}>
					{TextContent}
				</div>
			</CSSTransition>
		</div>
	);
}
