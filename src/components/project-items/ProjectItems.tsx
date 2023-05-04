import React from 'react';
import styles from './ProjectItems.module.scss';

type ProjectItemsProps = {
  img: string;
};

export const ProjectItems: React.FC<ProjectItemsProps> = ({ img }) => {
  return (
    <div className={styles.list}>
   
        <img className={styles.img} src={img} alt='img1'/>

    
    </div>
  );
};
