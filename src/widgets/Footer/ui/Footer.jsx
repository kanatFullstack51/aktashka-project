import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import WhatsAppLogo from '../../../assets/icons/whatsapp.svg';
import TelegramLogo from '../../../assets/icons//telegram.svg';
import EmailLogo from '../../../assets/icons/email.gif';
import logo from '../../../assets/icons/logo.png';

export const Footer = () => {
  const listItems = [
    {
      main: 'Главная',
    },
    {
      projects: 'Наши проекты',
    },
    {
      price: 'Расчет стоимости',
    },
    {
      services: 'Услуги',
    },
    {
      contacts: 'Контакты',
    },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_nav}>
          <ul className={styles.footer_navigation_link}>
            {listItems
              .filter((item) => typeof item.main === 'string')
              .map((item) => {
                return (
                  <li className={styles.footer_navigation_text} key={item.main}>
                    {item.main}
                  </li>
                );
              })}
            {listItems
              .filter((item) => typeof item.projects === 'string')
              .map((item) => {
                return (
                  <li className={styles.footer_navigation_text} key={item.projects}>
                    {item.projects}
                  </li>
                );
              })}
            {listItems
              .filter((item) => typeof item.price === 'string')
              .map((item) => {
                return (
                  <li className={styles.footer_navigation_text} key={item.price}>
                    {item.price}
                  </li>
                );
              })}
            {listItems
              .filter((item) => typeof item.services === 'string')
              .map((item) => {
                return (
                  <li className={styles.footer_navigation_text} key={item.services}>
                    {item.services}
                  </li>
                );
              })}
            {listItems
              .filter((item) => typeof item.contacts === 'string')
              .map((item) => {
                return (
                  <li className={styles.footer_navigation_text} key={item.contacts}>
                    {item.contacts}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.footer_social}>
          <div className={styles.footer_social_phone}>
            <p>8 (962) 266-66-61</p>
            <p>8 (968) 878-55-88</p>
          </div>
          <Link target="_blank" to="https://wa.clck.bar/79933630456">
            <img className={styles.footer_social_icon} src={WhatsAppLogo} alt="whatsApp Logo" />
          </Link>
          <Link target="_blank" to="https://t.me/akc_stroy">
            <img className={styles.footer_social_icon} src={TelegramLogo} alt="Telegram Logo" />
          </Link>
          <img className={styles.footer_social_icon} src={EmailLogo} alt="Email Logo" />
        </div>
        <div className={styles.footer_copyright}>
          <p>АКС Строй Все права защищены © 2023</p>
        </div>
      </div>
    </div>
  );
};
