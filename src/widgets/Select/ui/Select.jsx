import React from 'react'

import styles from './select.module.scss'

export const Select = ({ selectValue, onSelectChange, projectType = 'select', children, ...props }) => {
	return (
		<select
			value={selectValue}
			onChange={onSelectChange}
			className={styles[projectType]}
			{...props}>
			{children}
		</select>
	)
}