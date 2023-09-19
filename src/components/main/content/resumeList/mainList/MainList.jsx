import React from 'react';
import styles from './MainLsit.module.css';
import Resume from './__resume/Resume';
import { v4 as uuid } from 'uuid';

const initialList = [
  {
    id: uuid(),
    nameBlock: {
      name: 'Александр Волхонский',
      age: 29,
      city: 'Москва'
    },
    experienceBlock: {
      jobTitle: 'Java-разработчик',
      experience: `ООО ТПК «Комфорт». Старший разработчик пользовательских интерфейсов
      R-Vision, Август 2020 — по настоящее время`
    },
    contactBlock: {
      tel: '+7 (999) 999-99-99',
      mail: 'namemailname_mailname@mail.ru'
    },
    salary: 300000,
    staus: 'Собеседование'
  },
  {
    id: uuid(),
    nameBlock: {
      name: 'Анастасия Христорождественская',
      age: 25,
      city: 'Новосибирск'
    },
    experienceBlock: {
      jobTitle: 'Ведущий программист 1С',
      experience: `ТОО «1С: Франчайзинг Караганда»`
    },
    contactBlock: {
      tel: '+7 (000) 000-00-00',
      mail: 'namemailname_mailname@mail.ru'
    },
    salary: 150000,
    staus: 'Отправка оффера'
  },
  {
    id: uuid(),
    nameBlock: {
      name: 'Владимир Дубровкский',
      age: 23,
      city: 'Екатеринбург'
    },
    experienceBlock: {
      jobTitle: 'Инженер-программист 2 категории',
      experience: `ООО «Тета Дата Солюшнс» («ZYFRA»)`
    },
    contactBlock: {
      tel: '+7 (987) 654-32-10'
    },
    salary: 0,
    staus: 'Связь с кандидатом'
  },
  {
    id: uuid(),
    nameBlock: {
      name: 'Родион Раскольников',
      age: 21,
      city: 'Санкт-Петербург'
    },
    experienceBlock: {
      jobTitle: 'Java developer',
      experience: `ООО ТПК «Комфорт». Старший разработчик пользовательских интерфейсов
      R-Vision, Август 2020 — по настоящее время`
    },
    contactBlock: {
      tel: '+7 (012) 345-67-89',
      mail: 'mailname@mail.ru'
    },
    salary: 90000,
    staus: 'Собеседование'
  },
  {
    id: uuid(),
    nameBlock: {
      name: 'Екатерина Самойлова',
      age: 24,
      city: 'Хабаровск'
    },
    experienceBlock: {
      jobTitle: 'Бизнес-аналитик',
      experience: `ООО ТПК «Комфорт». Старший разработчик пользовательских интерфейсов
      R-Vision, Август 2020 — по настоящее время`
    },
    contactBlock: {
      tel: '+7 (999) 999-99-99',
      mail: 'mailname@mail.ru'
    },
    salary: 300000,
    staus: 'Проверка СБ'
  },
  {
    id: uuid(),
    nameBlock: {
      name: 'Константин Воскобойников',
      age: 19,
      city: 'Москва'
    },
    experienceBlock: {
      jobTitle: 'Frontend-разработчик (Junior frontend developer)',
      experience: `Разработка и поддержка CRM системы для малого бизнеса  - amoCRM. Данный продукт распространяется по модели SaaS, когда клиенту не надо ничего устанавливать на компьютер, он работает в браузере в режиме Online.`
    },
    contactBlock: {
      tel: '+7 (999) 999-99-99',
      mail: 'mailname@mail.ru'
    },
    salary: 400000,
    staus: 'Собеседование'
  },
  {
    id: uuid(),
    nameBlock: {
      name: 'Константин Воскобойников',
      age: 19,
      city: 'Москва'
    },
    experienceBlock: {
      jobTitle: 'Frontend-разработчик (Junior frontend developer)',
      experience: `Разработка и поддержка CRM системы для малого бизнеса  - amoCRM. Данный продукт распространяется по модели SaaS, когда клиенту не надо ничего устанавливать на компьютер, он работает в браузере в режиме Online.`
    },
    contactBlock: {
      tel: '+7 (999) 999-99-99',
      mail: 'mailname@mail.ru'
    },
    salary: 400000,
    staus: 'Собеседование'
  }
];

const MainLsit = () => {
  return (
    <section className={styles.resume__wrapper}>
      {initialList.map(item => {
        return <Resume info={item} />;
      })}
    </section>
  );
};
export default MainLsit;
