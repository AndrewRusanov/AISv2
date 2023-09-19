import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SidebarMenuList.module.css';
import imgStack from '../../../../images/menu__stack.png';
import imgUser from '../../../../images/menu__user.png';
import imgBookmark from '../../../../images/menu__bookmark.png';

const SidebarMenuList = props => {
  const result = truth => {
    if (truth) {
      return (
        <ul className={styles.menu}>
          <li className={styles.list__item_hidden}>
            <NavLink to="/">
              <img
                className={styles.menulist__itemImage_hidden}
                src={imgStack}
                alt="Список элементов"
              />
            </NavLink>
          </li>
          <li className={styles.list__item_hidden}>
            <NavLink to="liked">
              <img className={styles.menulist__itemImage_hidden} src={imgBookmark} alt="Закладка" />
            </NavLink>
          </li>
          <li className={styles.list__item_hidden}>
            <NavLink to="profile">
              <img className={styles.menulist__itemImage_hidden} src={imgUser} alt="Пользователь" />
            </NavLink>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={styles.menu}>
          <li className={styles.list__item}>
            <NavLink to="/">
              <img className={styles.menulist__itemImage} src={imgStack} alt="Список элементов" />
              <p className={styles.list__itemText}>Список резюме</p>
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink to="liked">
              <img className={styles.menulist__itemImage} src={imgBookmark} alt="Закладка" />
              <p className={styles.list__itemText}>Избранное</p>
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink to="profile">
              <img className={styles.menulist__itemImage} src={imgUser} alt="Пользователь" />
              <p className={styles.list__itemText}>Профиль</p>
            </NavLink>
          </li>
        </ul>
      );
    }
  };

  return result(props.isHide);
};

export default SidebarMenuList;
