import React from 'react';
import styles from './ProjectItems.module.scss';

type ProjectItemsProps = {
  img: string;
};

export const ProjectItems: React.FC<ProjectItemsProps> = ({ img }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <img className={styles.img} src={img} alt='img1'/>
          {' '}
          {/* <div className={styles.wrap}>adsadsads</div> */}
        
      </li>
    </ul>
  );
};
