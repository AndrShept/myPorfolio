import React from 'react';
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
} from 'react-icons/ai';
import { BsStickies } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import cn from 'classnames';
import styles from './Burger.module.scss';
import { icons } from '../sidebar/SideBar';
import { Link } from 'react-scroll';

export const Burger = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleClick = () => setIsVisible(!isVisible);

  return (
    <>
      {!isVisible ? (
        <RxHamburgerMenu
          onClick={handleClick}
          className={styles.burg}
          size={50}
        />
      ) : (
        <AiOutlineClose
          size={50}
          onClick={handleClick}
          className={styles.burg}
        />
      )}
      <section
        className={cn(
          isVisible ? [styles.containerActive] : [styles.container]
        )}
      >
        <div className={styles.blockIcons}>
          {icons.map((item) => (
            <Link key={item.name} to={item.to}>
            
              <li className={styles.list}>
                {item.icon}
                <span className={styles.text}>{item.name}</span>
              </li>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
