import React from 'react';
import styles from './Work.module.scss';
import { data } from './data.js';
import { WorkItem } from '../work-item/WorkItem';



export const Work = () => {
  return (
    <section id='Work' className={styles.container}>
      <h2 className={styles.text}>Work</h2>
      {data.map((item) => (
        <WorkItem key={item.title}
          detail={item.detail}
          year={item.year}
          title={item.title}
          duration={item.duration}
        />
      ))}
    </section>
  );
};
