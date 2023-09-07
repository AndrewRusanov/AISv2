import React from 'react';
import { NavLink } from 'react-router-dom';

const Content = () => {
  return (
    <p>
      профиль
      <NavLink to="/mainPage">К списку резюме</NavLink>
      <NavLink to="profile">К профилю</NavLink>
    </p>
  );
};

export default Content;
