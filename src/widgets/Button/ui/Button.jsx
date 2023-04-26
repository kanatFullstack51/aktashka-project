import React, { useState } from 'react';
import { Modal } from 'src/widgets/Modal';
import styles from './button.module.scss'

export const Button = ({ children }) => {

	const [openModal, setOpenModal] = useState(false)

	return (
		<>
			<button
				onClick={() => setOpenModal(true)}
				className={styles.button_btn}>
				{children}
			</button>
			{openModal && <Modal closeModal={setOpenModal} />}
		</>
	);
}

