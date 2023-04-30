import { useState } from "react"

import styles from './input.module.scss'

export const Input = ({ placeholder, type = "text",projectType = 'input', ...props }) => {
	return (
		<input
			type={type}
			className={styles[projectType]}
			{...props}
			placeholder={placeholder}
		/>
	)
}