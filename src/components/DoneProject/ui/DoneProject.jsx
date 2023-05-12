import React from 'react';
import ReactPlayer from 'react-player';

import styles from './DoneProject.module.scss';
import video from '../../../assets/video/video.mp4';
import { Dropdown } from 'src/widgets/Dropdown';

export const DoneProject = () => {
  return (
    <div className={styles.done}>
      <div className={styles.done_inner}>
        <div className={styles.done_block}>
          <h1 className={styles.done_title}>Почему нужно заказывать фундамент у нас?</h1>
          <div className={styles.done_projects}>
            <h2>374</h2>
            <p>Выполненных проектов</p>
          </div>
          <ReactPlayer url={video} controls />
        </div>
        <div className={styles.done_block}>
          <div className={styles.done_list}>
            <Dropdown TitleContent={'Более 10 лет на рынке'} TextContent={'Строим монолитные конструкции'} />
            <Dropdown TitleContent={'Ежедневный отчет'} TextContent={'Ежедневный отчет о проделанной работе в любых социальных сетях'} />
            <Dropdown TitleContent={'Бесплатный замер'} TextContent={'Выезжаем на замер в удобное для Вас время'} />
            <Dropdown TitleContent={'Гарантия'} TextContent={'Все гарантии прописаны в договоре'} />
            <Dropdown TitleContent={'Соблюдаем сроки'} TextContent={'Строго следим за сроками строительства'} />
          </div>
        </div>
      </div>
    </div>
  );
};
