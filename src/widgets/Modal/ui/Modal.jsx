import React, { useState } from 'react';
import styles from './modal.module.scss'

export const Modal = ({ closeModal }) => {



	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')

	const onChangeName = e => setName(e.target.value)
	const onChangeLastName = e => setLastName(e.target.value)
	const onChangeEmail = e => setEmail(e.target.value)
	const onChangeNumber = e => setNumber(e.target.value)

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const data = {
			name: name,
			lastName: lastName,
			email: email,
			number: number
		}
		console.log(data)
	}

	return (
		<div className={styles.modal} onClick={() => closeModal(false)}>
			<div className={styles.modal_inner} onClick={e => e.stopPropagation()}>
				<div className={styles.modal_content}>
					<form
						onSubmit={handleFormSubmit}
						className={styles.modal_form}>
						<input
							onChange={onChangeName}
							className={styles.modal_input}
							type="text"
							placeholder='Имя' />
						<input
							onChange={onChangeLastName}
							className={styles.modal_input}
							type="text"
							placeholder='Фамилия' />
						<input
							onChange={onChangeEmail}
							className={styles.modal_input}
							type="text"
							placeholder='Почта' />
						<input
							onChange={onChangeNumber}
							className={styles.modal_input}
							type="text"
							placeholder='Номер телефона' />
						<button
							className={styles.modal_btn}>
							Отправить
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

