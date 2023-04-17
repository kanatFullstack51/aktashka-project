import React, { useState } from 'react';
import styles from './modal.module.scss'
import closeIcon from '../../../assets/icons/close-icons.svg'
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
					<div className={styles.modal_content_inner}>
						<img
							onClick={() => closeModal(false)}
							className={styles.modal_content_close}
							src={closeIcon} />
						<h1 className={styles.modal_content_title}>Оформить обратный звонок</h1>
						<h3 className={styles.modal_content_subtitle}>Заполните форму и нажмите «Отправить».</h3>
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
								type='tel'
								onChange={onChangeNumber}
								className={styles.modal_input}
								placeholder="+7 (__) ___-__-__"
								pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
							/>
							<p className={styles.modal_text}>Нажимая на кнопку, Вы соглашаетесь
								<span>с условиями обработки персональных данных</span></p>
							<button
								className={styles.modal_btn}>
								Отправить
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

