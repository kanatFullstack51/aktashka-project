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
            <Dropdown TitleContent={'Более 10 лет на рынке'} TextContent={'Строим монолитные конструкции'} />
            <Dropdown TitleContent={'Более 10 лет на рынке'} TextContent={'Строим монолитные конструкции'} />
          </div>
        </div>
      </div>
    </div>
  );
};
