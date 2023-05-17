import React, { useEffect, useState } from 'react';
import styles from './modal.module.scss';
import closeIcon from '../../../assets/icons/close-icons.svg';
import { Input } from 'src/widgets/Input';
import { Button } from 'src/widgets/Button';
export const Modal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [nameError, setNameError] = useState('Имя не может быть пустым');
  const [lastNameError, setLastNameError] = useState('Фамилия не может быть пустым');
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [numberError, setNumberError] = useState('Номер не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || lastNameError || emailError || numberError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, lastNameError, emailError, numberError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };

  const NameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError('Введите Имя');
    } else {
      setNameError('');
    }
  };

  const LastNameHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError('Введите Фамилию');
    } else {
      setLastNameError('');
    }
  };
  const NumberHandler = (e) => {
    setNumber(e.target.value);
    const re = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    if (!re.test(Number(e.target.value))) {
      setNumberError('Некорректный номер');
    } else {
      setNumberError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'lastName':
        setLastNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'number':
        setNumberDirty(true);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      lastName: lastName,
      email: email,
      number: number,
    };
    console.log(data);
  };

  return (
    <div className={styles.modal} onClick={() => closeModal(false)}>
      <div className={styles.modal_inner} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_content}>
          <div className={styles.modal_content_inner}>
            <img onClick={() => closeModal(false)} className={styles.modal_content_close} src={closeIcon} />

            <h1 className={styles.modal_content_title}>Оформить обратный звонок</h1>

            <h3 className={styles.modal_content_subtitle}>Заполните форму и нажмите «Отправить».</h3>

            <form onSubmit={handleFormSubmit} className={styles.modal_form}>
              {nameDirty && nameError && <div className={styles.modal_form_error_text}>{nameError}</div>}
              <Input onChange={(e) => NameHandler(e)} onBlur={(e) => blurHandler(e)} name="name" projectType="input" placeholder={'Имя'} />

              {lastNameDirty && lastNameError && <div className={styles.modal_form_error_text}>{lastNameError}</div>}
              <Input
                onChange={(e) => LastNameHandler(e)}
                onBlur={(e) => blurHandler(e)}
                name="lastName"
                projectType="input"
                placeholder={'Фамилия'}
              />

              {emailDirty && emailError && <div className={styles.modal_form_error_text}>{emailError}</div>}
              <Input
                onChange={(e) => emailHandler(e)}
                value={email}
                onBlur={(e) => blurHandler(e)}
                name="email"
                projectType="input"
                placeholder={'Почта'}
              />

              {numberDirty && numberError && <div className={styles.modal_form_error_text}>{numberError}</div>}
              <Input
                onChange={(e) => NumberHandler(e)}
                onBlur={(e) => blurHandler(e)}
                name="number"
                projectType="input"
                type="tel"
                placeholder={'+7 (__) ___-__-__'}
              />

              <p className={styles.modal_text}>
                Нажимая на кнопку, Вы соглашаетесь
                <span>с условиями обработки персональных данных</span>
              </p>
              <Button disabled={!formValid} type="submit" projectType="modal_inner_btn" children={'Заказать звонок'} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
