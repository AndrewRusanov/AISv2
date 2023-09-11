import React from 'react';
import styles from './MainLsit.module.css';
import Resume from './__resume/Resume';

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

const MainLsit = () => {
  return (
    <section className={styles.resume__wrapper}>
      <Resume />
      <Resume />
      {/* резюме 1 */}
      {/* резюме 2 */}
      {/* резюме 3 */}
    </section>
  );
};

export default MainLsit;
