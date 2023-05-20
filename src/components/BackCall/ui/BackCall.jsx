import React, { useEffect, useState } from 'react';
import styles from './backCall.module.scss';
import axios from 'axios';

import { Button } from 'src/widgets/Button';
import { Input } from 'src/widgets/Input';
import { Select } from 'src/widgets/Select/ui/Select';

export const BackCall = () => {
  const [number, setNumber] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [select, setSelect] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const [numberDirty, setNumberDirty] = useState(false);
  const [lengthDirty, setLengthDirty] = useState(false);
  const [widthDirty, setWidthDirty] = useState(false);
  const [heightDirty, setHeightDirty] = useState(false);
  const [checkboxDirty, setCheckboxDirty] = useState(false);

  const [numberError, setNumberError] = useState('Номер не может быть пустым');
  const [lengthError, setLengthError] = useState('Длина не может быть пустым');
  const [widthError, setWidthError] = useState('Ширина не может быть пустым');
  const [heightError, setHeightError] = useState('Высота не может быть пустым');
  const [checkboxError, setCheckboxError] = useState('**');

  useEffect(() => {
    if (numberError || lengthError || widthError || heightError || checkboxError) {
      setFormValid(false);
    } else [setFormValid(true)];
  }, [numberError, lengthError, widthError, heightError, checkboxError]);

  const LengthHandler = (e) => {
    setLength(e.target.value);
    if (e.target.value < 1) {
      setLengthError('Введите длину');
    } else {
      setLengthError('');
    }
  };

  const WidthHandler = (e) => {
    setWidth(e.target.value);
    if (e.target.value < 1) {
      setWidthError('Введите Ширину');
    } else {
      setWidthError('');
    }
  };
  const HeightHandler = (e) => {
    setHeight(e.target.value);
    if (e.target.value.length < 1) {
      setHeightError('Введите Ширину');
    } else {
      setHeightError('');
    }
  };

  const SelectHandler = (e) => setSelect(e.target.value);

  const CheckboxHandler = () => {
    setCheckbox(checkbox);
    if (setCheckbox(false)) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  };

  console.log(checkbox);

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
      case 'length':
        setLengthDirty(true);
        break;
      case 'width':
        setWidthDirty(true);
        break;
      case 'height':
        setHeightDirty(true);
        break;
      case 'number':
        setNumberDirty(true);
        break;
      case 'checkbox':
        setCheckboxDirty(true);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const TOKEN = '5718685667:AAFlnvj5Z0bWEDINR7GDHR7pCWXttrTIMF8';
    const CHAT_ID = '-1001790936480';
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    let message = `<b>Заяка да жиесть</b>\n`;
    message += `<b>Длина</b> ${length}\n`;
    message += `<b>Ширина</b> ${width}\n`;
    message += `<b>Высота</b> ${height}\n`;
    message += `<b>Номер Телефона</b> ${number}`;
    message += `<b>Тип фундамента</b> ${select}`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      })
      .then((res) => {
        setLength('');
        setWidth('');
        setHeight('');
        setNumber('');
        setFormValid(false);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        console.log('Конец');
        setCheckbox(false);
      });
  };

  return (
    <div className={styles.call}>
      <div className={styles.call_inner}>
        <div className={styles.call_block}>
          <h2 className={styles.call_title}>Получите расчет стоимости фундамента!</h2>
          <form onSubmit={handleFormSubmit} className={styles.call_form}>
            <div className={styles.call_form_inner}>
              <span>Ваш Телефон</span>
              {numberDirty && numberError && <div className={styles.call_form_error_text}>{numberError}</div>}
              <Input
                value={number}
                name="number"
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => NumberHandler(e)}
                placeholder={'+7 (__) ___-__-__'}
                projectType="call_form"
              />
            </div>
            <div className={styles.call_form_inner}>
              <span>Длина</span>
              {lengthDirty && lengthError && <div className={styles.call_form_error_text}>{lengthError}</div>}
              <Input
                name="length"
                onChange={(e) => LengthHandler(e)}
                value={length}
                onBlur={(e) => blurHandler(e)}
                type="number"
                projectType="call_form"
              />
            </div>
            <div className={styles.call_form_inner}>
              <span>Ширина</span>
              {widthDirty && widthError && <div className={styles.call_form_error_text}>{widthError}</div>}
              <Input
                value={width}
                name="width"
                onChange={(e) => WidthHandler(e)}
                onBlur={(e) => blurHandler(e)}
                type="number"
                projectType="call_form"
              />
            </div>
            <div className={styles.call_form_inner}>
              <span>Высота</span>
              {heightDirty && heightError && <div className={styles.call_form_error_text}>{heightError}</div>}
              <Input
                name="height"
                value={height}
                onChange={(e) => HeightHandler(e)}
                onBlur={(e) => blurHandler(e)}
                type="number"
                projectType="call_form"
              />
            </div>
            <div className={styles.call_form_inner}>
              <span>Выберите тип:</span>
              <Select onChange={(e) => SelectHandler(e)}>
                <option className={styles.call_option}>Ленточный</option>
                <option className={styles.call_option}>Ростверковый</option>
                <option className={styles.call_option}>Плита</option>
                <option className={styles.call_option}>УШП</option>
                <option className={styles.call_option}>Цокольный этаж</option>
              </Select>
            </div>
            <div className={styles.call_checkbox_block}>
              {checkboxDirty && checkboxError && <div className={styles.call_form_error_text_checkbox}>{checkboxError}</div>}
              <input onChange={CheckboxHandler} id="call_checkbox" name="checkbox" type="checkbox" className={styles.call_checkbox} />
              <p className={styles.call_checkbox_text}>
                Я соглашаюсь с <span>политикой конфиденциальности</span> сайта
              </p>
            </div>
            <div className={styles.call_button}>
              <Button disabled={!formValid} type="submit" children={'Получите расчет'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
