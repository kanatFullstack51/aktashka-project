import React from 'react';
import styles from './button.module.scss';

export const Button = ({ children, type = 'button', projectType = 'modal_btn', ...props }) => {
  return (
    <button type={type} className={styles[projectType]} {...props}>
      {children}
    </button>
  );
};
