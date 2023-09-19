import React from 'react';
import styles from './MainLsit.module.css';
import Resume from './__resume/Resume';
import { v4 as uuid } from 'uuid';
//тут будет массив элементов, который я получаю с сервера
// const initValue = {
//   totalPages: 0,
//   totalElements: 0,
//   size: 0,
//   content: [
//     {
//       state: 'new',
//       id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//       status: 'new',
//       surname: 'string',
//       name: 'string',
//       contacts: [
//         {
//           id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//           type: 'string',
//           value: 'string'
//         }
//       ],
//       position: 'string',
//       age: 0,
//       city: 'string',
//       experience: {
//         id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//         position: 'string',
//         companyName: 'string',
//         startDate: '2023-09-11',
//         endDate: '2023-09-11',
//         site: 'string',
//         activity: {
//           activityName: 'string',
//           details: ['string']
//         },
//         description: 'string'
//       },
//       generalExperience: 0,
//       salary: 0,
//       currency: 'string',
//       actions: {
//         applicant: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//         canImport: true,
//         canCreate: true,
//         canView: true,
//         canEdit: true,
//         canAddToList: true,
//         canDeleteFromList: true,
//         canDelete: true,
//         canContact: true,
//         canInterview: true,
//         canOffer: true,
//         canReject: true,
//         canCheckSecurity: true,
//         canRefuse: true,
//         canFinishWork: true,
//         canResetStatus: true,
//         canInitialStatus: true,
//         canSave: true
//       },
//       favouriteListIds: ['3fa85f64-5717-4562-b3fc-2c963f66afa6']
//     }
//   ],
//   number: 0,
//   sort: {
//     empty: true,
//     unsorted: true,
//     sorted: true
//   },
//   pageable: {
//     offset: 0,
//     sort: {
//       empty: true,
//       unsorted: true,
//       sorted: true
//     },
//     pageNumber: 0,
//     pageSize: 0,
//     unpaged: true,
//     paged: true
//   },
//   numberOfElements: 0,
//   first: true,
//   last: true,
//   empty: true
// };

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
    nameBlock: {
      name: 'Константин Воскобойников'
    },
    experienceBlock: {
      jobTitle: 'Инженер-программист 2 категории'
    },
    contactBlock: {
      mail: 'namemailname_mailname@mail.ru'
    },
    salary: undefined,
    staus: 'Не в работе'
  },
  {
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
  }
];

const MainLsit = () => {
  return (
    <section className={styles.resume__wrapper}>
      <Resume />
      <Resume />
      <Resume />
      <Resume />
    </section>
  );
};

export default MainLsit;
