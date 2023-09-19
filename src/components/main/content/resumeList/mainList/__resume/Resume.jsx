import React from 'react';
import styles from './Resume.module.css';
import NameContainer from './nameContainer/NameContainer';
import Experience from './experience/Experience';
import Contacts from './contacts/Contacts';
import Salary from './salary/Salary';

// TODO. Сделать массив-балванку, чтобы через map передавать туда нужные элементы

const Resume = props => {
  return (
    <div className={styles.resume__wrapper}>
      <NameContainer
        name={props.info.nameBlock.name}
        age={props.info.nameBlock.age}
        city={props.info.nameBlock.city}
      />
      <Experience
        jobTitle={props.info.experienceBlock.jobTitle}
        experience={props.info.experienceBlock.experience}
      />
      <Contacts tel={props.info.contactBlock.tel} mail={props.info.contactBlock.mail} />
      <Salary value={props.info.salary} />
      {/* Статус */}
    </div>
  );
};

export default Resume;
