import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './dropdown.module.scss';
import { Button } from 'src/widgets/Button';

export const Dropdown = ({ TextContent, TitleContent }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((open) => !open);
  const ref = useRef();

  return (
    <div className={styles.dropdown}>
      <div className={styles.triangle}></div>
      <Button onClick={toggleOpen} projectType="dropdown" children={TitleContent} />
      <CSSTransition in={open} timeout={100} classNames="alert" unmountOnExit>
        <div className={styles.dropdown_content}>{TextContent}</div>
      </CSSTransition>
    </div>
  );
};
