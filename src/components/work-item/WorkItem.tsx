import React from 'react';
import styles from './WorkItem.module.scss'

type ItemProps = {
  year: number;
  title: string;
  duration: string;
  detail: string;
}

export const WorkItem:React.FC<ItemProps> = ({ detail, year, title, duration }) => {
  return (
    <ul className={styles.list}>
      <li>
        <div className={styles.marker}/>
        <p className={styles.text}>
            <span className={styles.year}>{year}</span>
            <span className={styles.title}>{title}</span>
            <span className={styles.duration}>{duration}</span>
        </p>
        <p className={styles.detail}>{detail}</p>
      </li>
    </ul>
  );
};
