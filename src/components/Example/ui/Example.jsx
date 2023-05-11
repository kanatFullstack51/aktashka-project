import React from 'react';

import exampleIMG1 from '../../../assets/example-images/1-home.jpeg';
import exampleIMG2 from '../../../assets/example-images/2-home.jpeg';
import exampleIMG3 from '../../../assets/example-images/3-home.jpeg';
import exampleIMG4 from '../../../assets/example-images/4-home.jpeg';
import exampleIMG5 from '../../../assets/example-images/5-home.jpeg';
import exampleIMG6 from '../../../assets/example-images/6-home.jpeg';
import exampleIMG7 from '../../../assets/example-images/7-home.jpeg';
import exampleIMG8 from '../../../assets/example-images/8-home.jpeg';
import exampleIMG9 from '../../../assets/example-images/9-home.jpeg';
import exampleIMG10 from '../../../assets/example-images/10-home.jpeg';
import exampleIMG11 from '../../../assets/example-images/11-home.jpeg';
import exampleIMG12 from '../../../assets/example-images/12-home.jpeg';
import exampleIMG13 from '../../../assets/example-images/13-home.jpeg';
import exampleIMG14 from '../../../assets/example-images/14-home.jpeg';
import exampleIMG15 from '../../../assets/example-images/15-home.jpeg';
import exampleIMG16 from '../../../assets/example-images/16-home.jpeg';
import exampleIMG17 from '../../../assets/example-images/17-home.jpeg';
import exampleIMG18 from '../../../assets/example-images/18-home.jpeg';
import exampleIMG19 from '../../../assets/example-images/19-home.jpeg';
import exampleIMG20 from '../../../assets/example-images/20-home.jpeg';

import styles from './example.module.scss';

export const Example = () => {
  return (
    <div className={styles.example}>
      <div className={styles.example_inner}>
        <h1 className={styles.example_title}>Пример наших работ</h1>
        <div className={styles.example_img_block}>
          <img className={styles.example_img} src={exampleIMG1} alt="" />
          <img className={styles.example_img} src={exampleIMG2} alt="" />
          <img className={styles.example_img} src={exampleIMG3} alt="" />
          <img className={styles.example_img} src={exampleIMG4} alt="" />
        </div>
        <div className={styles.example_img_block}>
          <img className={styles.example_img} src={exampleIMG5} alt="" />
          <img className={styles.example_img} src={exampleIMG6} alt="" />
          <img className={styles.example_img} src={exampleIMG7} alt="" />
          <img className={styles.example_img} src={exampleIMG8} alt="" />
        </div>
        <div className={styles.example_img_block}>
          <img className={styles.example_img} src={exampleIMG9} alt="" />
          <img className={styles.example_img} src={exampleIMG10} alt="" />
          <img className={styles.example_img} src={exampleIMG11} alt="" />
          <img className={styles.example_img} src={exampleIMG12} alt="" />
        </div>
        <div className={styles.example_img_block}>
          <img className={styles.example_img} src={exampleIMG13} alt="" />
          <img className={styles.example_img} src={exampleIMG14} alt="" />
          <img className={styles.example_img} src={exampleIMG15} alt="" />
          <img className={styles.example_img} src={exampleIMG16} alt="" />
        </div>
        <div className={styles.example_img_block}>
          <img className={styles.example_img} src={exampleIMG17} alt="" />
          <img className={styles.example_img} src={exampleIMG18} alt="" />
          <img className={styles.example_img} src={exampleIMG19} alt="" />
          <img className={styles.example_img} src={exampleIMG20} alt="" />
        </div>
      </div>
    </div>
  );
};
