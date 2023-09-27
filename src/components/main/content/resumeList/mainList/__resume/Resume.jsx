import React from 'react';
import styles from './Resume.module.css';
import NameContainer from './nameContainer/NameContainer';
import Experience from './experience/Experience';
import Contacts from './contacts/Contacts';
import Salary from './salary/Salary';
import Statusbar from './statusbar/Statusbar';

// TODO. Сделать массив-балванку, чтобы через map передавать туда нужные элементы

// Функция для сохранения контактной информации о
const getContactObject = array => {
  let contactObject = {};
  array.map(item => {
    return (contactObject[item.type] = item.value);
  });
  return contactObject;
};

const Resume = props => {
  return (
    <div className={styles.resume__wrapper}>
      <NameContainer
        name={props.info.name}
        surname={props.info.surname}
        age={props.info.age}
        city={props.info.city}
      />
      <Experience position={props.info.position} experience={props.info.experience.description} />
      <Contacts contacts={getContactObject(props.info.contacts)} />
      <Salary value={props.info.salary} currency={props.info.currency} />
      <Statusbar />
    </div>
  );
};

export default Resume;
