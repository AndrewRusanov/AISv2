import React from 'react';
import styles from './SidebarMenu.module.css';
import SidebarMenuList from '../__menuList/SidebarMenuList';

const SidebarMenu = props => {
  return (
    <nav className={styles.menuList}>
      <SidebarMenuList isHide={props.isHide} />
    </nav>
  );
};

export default SidebarMenu;
