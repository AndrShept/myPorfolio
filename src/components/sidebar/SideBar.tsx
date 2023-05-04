import React from 'react';
import styles from './SideBar.module.scss';
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsStickies } from 'react-icons/bs';
import { Link } from 'react-scroll';
export const icons = [
  {
    icon: <AiOutlineHome size={30} />,
    id: Math.round(Math.random() * 1000),
    to: 'Main',
    name: 'Home',
  },
  {
    icon: <BsStickies size={30} />,
    id: Math.round(Math.random() * 1000),
    to: 'Work',
    name: 'Work',
  },
  {
    icon: <AiOutlineProject size={30} />,
    id: Math.round(Math.random() * 1000),
    to: 'Projects',
    name: 'Projects',
  },
  {
    icon: <AiOutlineMail size={30} />,
    id: Math.round(Math.random() * 1000),
    to: 'Mail',
    name: 'Mail',
  },
];

export const SideBar: React.FC = () => {
  return (
    <section className={styles.container}>
      <ul>
        {icons.map((item) => (
          <li key={item.id} className={styles.icons}>
            <Link to={item.to}>{item.icon}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
