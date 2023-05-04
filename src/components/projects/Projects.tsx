import React from 'react';
import styles from './Projects.module.scss';
import { ProjectItems } from '../project-items/ProjectItems';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

export const Projects = () => {
  return (
    <section id='Projects' className={styles.container}>
      <h2 className={styles.text}>Projects</h2>
      <p className={styles.detail}>
        Parturient montes nascetur ridiculus mus mauris. Pellentesque id nibh
        tortor id. Et leo duis ut diam quam nulla porttitor massa id. Enim
        lobortis scelerisque fermentum dui. Habitant morbi tristique senectus et
        netus et malesuada fames ac. Lorem dolor sed viverra ipsum nunc aliquet
        bibendum. Congue quisque egestas diam in arcu. Pharetra diam sit amet
        nisl suscipit adipiscing bibendum est. In eu mi bibendum neque egestas
        congue quisque. A pellentesque sit amet porttitor eget dolor.
        Pellentesque pulvinar pellentesque habitant morbi tristique senectus.
        Egestas sed sed risus pretium quam vulputate dignissim.
      </p>
      <div className={styles.wrap}>
        <ProjectItems img={img1} />
        <ProjectItems img={img2} />
        <ProjectItems img={img3} />
        <ProjectItems img={img4} />
      </div>
    </section>
  );
};
