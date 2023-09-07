import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import logo from '../../../images/menu__logo.png';
import logo_hidden from '../../../images/menu__logo_hide.png';
import arrowLeftLink from '../../../images/menu__arrow-left.png';
import arrowRightLink from '../../../images/menu__arrow-right.png';
import SidebarLogo from './__logo/SidebarLogo';
import SidebarMenu from './__menu/SidebarMenu';
import SidebarBtnContainer from './__btncontainer/SidebarBtnContainer';
import SidebarHideBtn from './__hideBtn/SidebarHideBtn';

const Sidebar = () => {
  const [isHide, setIsHide] = useState(false); //Состояние для всего sidebar
  const [styleContainer, setStyleContainer] = useState(styles.sidebar); //Состояние для стилей sidebar
  const [styleLogo, setstyleLogo] = useState(styles.sidebar__logo); //Состояние для стилей лого в sidebar
  const [logoLink, setLogoLink] = useState(logo); //Состояние для ссылки на лого в sidebar
  const [hideImage, setHideImage] = useState(arrowLeftLink); //Сосотояние для ссылки на иконку кнопки открытия/скрытия
  const [hideBtnClass, setHideBtnClass] = useState(styles.btn__hide); //Состояние для стиелй на кнопку открытия/скрытия меню

  const hideSidebar = () => {
    setIsHide(!isHide);
    if (!isHide) {
      // Если скрытый
      setstyleLogo(styles.sidebar__logo_hidden);
      setStyleContainer(styles.sidebar_hidden);
      setLogoLink(logo_hidden);
      setHideImage(arrowRightLink);
      setHideBtnClass(styles.btn__hide_hidden);
    } else {
      // Если открытый (по умолчанию)
      setstyleLogo(styles.sidebar__logo);
      setStyleContainer(styles.sidebar);
      setLogoLink(logo);
      setHideImage(arrowLeftLink);
      setHideBtnClass(styles.btn__hide);
    }
  };

  return (
    <div className={styleContainer}>
      <SidebarLogo style={styleLogo} link={logoLink} />
      <SidebarMenu isHide={isHide} />
      <SidebarBtnContainer isHide={isHide} />
      <SidebarHideBtn style={hideBtnClass} link={hideImage} hideSidebar={hideSidebar} />
    </div>
  );
};

export default Sidebar;
