import React, { useState } from 'react';
import styles from './Sidebar.module.css';

import logo from '../../../images/menu__logo.png';
import logo_hidden from '../../../images/menu__logo_hide.png';
import arrowLeftLink from '../../../images/menu__arrow-left.png';
import arrowRightLink from '../../../images/menu__arrow-right.png';

const Sidebar = () => {
  const [isHide, setIsHide] = useState(false); //Состояние для всего sidebar
  const [styleLogo, setstyleLogo] = useState(styles.sidebar__logo); //Состояние для стилей лого в sidebar
  const [logoLink, setLogoLink] = useState(logo); //Состояние для ссылки на лого в sidebar
  const [hideImage, setHideImage] = useState(arrowLeftLink); //Сосотояние для ссылки на иконку кнопки открытия/скрытия
  const [hideBtnClass, setHideBtnClass] = useState(styles.btn__hide); //Состояние для стиелй на кнопку открытия/скрытия меню
  const [menuImgClass, setMenuImgClass] = useState(styles.list__item); //Состояние для стилей кнопок меню

  const hideSidebar = () => {
    setIsHide(!isHide);
    if (!isHide) {
      // Если скрытый
      setstyleLogo(styles.sidebar__logo_hidden);
      setLogoLink(logo_hidden);
      setHideImage(arrowRightLink);
      setHideBtnClass(styles.btn__hide_hidden);
      setMenuImgClass(styles.list__item_hidden);
    } else {
      // Если открытый (по умолчанию)
      setstyleLogo(styles.sidebar__logo);
      setLogoLink(logo);
      setHideImage(arrowLeftLink);
      setHideBtnClass(styles.btn__hide);
      setMenuImgClass(styles.list__item);
    }
  };

  const result = truth => {
    if (truth) {
      return <div className={styles.sidebar_hidden}>Пизда</div>;
    } else {
      return <div className={styles.sidebar}>{/* Если открытый (по умолчанию) */}</div>;
    }
  };

  return result(!isHide);
};

export default Sidebar;
