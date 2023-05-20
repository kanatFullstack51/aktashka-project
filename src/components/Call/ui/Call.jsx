import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Call.module.scss';

import whatsApp from '../../../assets/icons/whatsapp.svg';
import telegram from '../../../assets/icons/telegram.svg';

export const Call = () => {
  return (
    <div className={styles.call}>
      <div className={styles.call_inner}>
        <div className={styles.call_left}>
          <h2 className={styles.call_title}>Хотите быстро узнать стоимость фундамента?</h2>
        </div>
        <div className={styles.call_right}>
          <div className={styles.call_right_block}>
            <h3>Отправьте проект, эскиз, фото, набросок от руки или просто размеры нам в WhatsApp или Telegram</h3>
            <p>8 993 363-04-56</p>
            <div className={styles.call_messenger}>
              <Link target="_blank" to="https://wa.clck.bar/79933630456">
                <img className={styles.call_whatsApp} src={whatsApp} alt="whatsApp logo" />
              </Link>
              <Link target="_blank" to="https://t.me/akc_stroy">
                <img className={styles.call_telegram} src={telegram} alt="telegram logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
