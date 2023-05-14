import React, { useState } from 'react';

import styles from './backCall.module.scss';

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

  const onChangeNumber = (e) => setNumber(e.target.value);
  const onChangeLength = (e) => setLength(e.target.value);
  const onChangeWidth = (e) => setWidth(e.target.value);
  const onChangeHeight = (e) => setHeight(e.target.value);
  const onChangeSelect = (e) => setSelect(e.target.value);
  const onChangeCheckbox = (e) => setCheckbox(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      number: number,
      length: length,
      width: width,
      height: height,
      select: select,
      checkbox: checkbox,
    };
    console.log(data);
  };

  return (
    <div className={styles.call}>
      <div className={styles.call_inner}>
        <div className={styles.call_block}>
          <h2 className={styles.call_title}>Получите расчет стоимости фундамента!</h2>
          <form onSubmit={onFormSubmit} className={styles.call_form}>
            <div className={styles.call_form_inner}>
              <span>Ваш Телефон</span>
              <Input
                onChange={onChangeNumber}
                placeholder={'+7 (__) ___-__-__'}
                pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                projectType="call_form"
              />
            </div>
            <div className={styles.call_form_inner}>
              <span>Длина</span>
              <Input onChange={onChangeLength} min="0" projectType="call_form" />
            </div>
            <div className={styles.call_form_inner}>
              <span>Ширина</span>
              <Input onChange={onChangeWidth} min="0" projectType="call_form" />
            </div>
            <div className={styles.call_form_inner}>
              <span>Высота</span>
              <Input onChange={onChangeHeight} min="0" projectType="call_form" />
            </div>
            <div className={styles.call_form_inner}>
              <span>Выберите тип:</span>
              <Select onChange={onChangeSelect}>
                <option className={styles.call_option}>Ленточный</option>
                <option className={styles.call_option}>Ростверковый</option>
                <option className={styles.call_option}>Плита</option>
                <option className={styles.call_option}>УШП</option>
                <option className={styles.call_option}>Цокольный этаж</option>
              </Select>
            </div>
            <div className={styles.call_checkbox_block}>
              <input id="call_checkbox" name="call_checkbox" type="checkbox" className={styles.call_checkbox} />
              <label for="call_checkbox"></label>
              <p className={styles.call_checkbox_text}>
                Я соглашаюсь с <span>политикой конфиденциальности</span> сайта
              </p>
            </div>
            <div className={styles.call_button}>
              <Button children={'Получите расчет'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
