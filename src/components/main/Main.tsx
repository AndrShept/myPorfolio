import React from 'react';
import video from '../../assets/pexels-cottonbro-studio-9667571-1920x1080-25fps.mp4';
import styles from './Main.module.scss';
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
export const Main: React.FC = () => {
  return (
    <section id='Main' className={styles.container}>
      <video className={styles.video} muted loop autoPlay typeof='video/mp4'>
        <source src={video} />
      </video>
      <div className={styles.wrap}></div>
      <div className={styles.title}>
        <h1>I'm Andriy Sheptyckiy</h1>

        <h2>
          I'm a
          <TypeAnimation
            sequence={[
              ' Developer', // Types 'One'
              2000, // Waits 1s
              ' Tech', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              ' Enthusiast',
              2000, // Types 'Three' without deleting 'Two'
            ]}
            wrapper='span'
            cursor={true}
            repeat={Infinity}
            style={{ color: 'red' }}
          />
        </h2>

        <div className={styles.iconsDiv}>
          <AiFillFacebook
            size={50}
            className={`${styles.icons} ${styles.facebook}`}
          />
          <AiFillLinkedin
            size={50}
            className={`${styles.icons} ${styles.link}`}
          />
          <AiFillGithub size={50} className={`${styles.icons} ${styles.git}`} />
        </div>
      </div>
    </section>
  );
};
