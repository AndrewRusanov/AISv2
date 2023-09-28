import { v4 as uuid } from 'uuid';

const initialObject = {};

const Save = {
  totalPages: 2,
  totalElements: 20,
  size: 0,
  content: [
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Волохонский',
      name: 'Александр',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (999) 999-99-99'
        },
        {
          type: 'mail',
          value: 'namemailname_mailname@mail.ru'
        }
      ],
      position: 'Java-разработчик',
      age: 29,
      city: 'Москва',
      experience: {
        companyName: `ООО ТПК «Комфорт»`,
        startDate: '2010-09-26',
        endDate: '2023-09-26',
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Старший разработчик пользовательских интерфейсов
          R-Vision, Август 2020 — по настоящее время`
      },
      generalExperience: 0,
      salary: 30000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: false,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Воскобойников',
      name: 'Константин',
      contacts: [
        {
          type: 'mail',
          value: 'mailname_mailname@mail.ru'
        }
      ],
      position: 'Инженер-программист 2 категории',
      experience: {
        activity: {
          activityName: 'string',
          details: 'string'
        }
      },
      generalExperience: 0,
      salary: undefined,
      currency: undefined,
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: false,
        canOffer: false,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Христорождественская',
      name: 'Анастасия',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (000) 000-00-00'
        },
        {
          type: 'mail',
          value: 'namemailname_mailname@mail.ru'
        }
      ],
      position: 'Java-разработчик',
      age: 25,
      city: 'Новосибирск',
      experience: {
        companyName: `ТОО «1С: Франчайзинг Караганда»`,
        startDate: '2015-06-21',
        endDate: '2023-10-31',
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: undefined
      },
      generalExperience: 0,
      salary: 150000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: false,
        canOffer: true,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Дубровский',
      name: 'Владимир',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (987) 654-32-10'
        }
      ],
      position: 'Инженер-программст 2 категории',
      age: 23,
      city: 'Екатеринбург',
      experience: {
        companyName: `ООО «Тета Дата Солюшнс» («ZYFRA»)`,
        startDate: undefined,
        endDate: undefined,
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: undefined
      },
      generalExperience: 0,
      salary: undefined,
      currency: undefined,
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: false,
        canOffer: false,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Раскольников',
      name: 'Родион',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (012) 345-67-89'
        },
        {
          type: 'mail',
          value: 'mailname@mail.ru'
        }
      ],
      position: 'Java Developer',
      age: 21,
      city: 'Санкт-Петербург',
      experience: {
        companyName: `ООО ТПК «Комфорт»`,
        startDate: undefined,
        endDate: undefined,
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Старший разработчик пользовательских интерфейсов
          R-Vision, Август 2020 — по настоящее время`
      },
      generalExperience: 0,
      salary: 90000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: true,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Самойлова',
      name: 'Екатерина',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (999) 999-99-99'
        },
        {
          type: 'mail',
          value: 'mailname_mailname@mail.ru'
        }
      ],
      position: 'Бизнес-аналитик',
      age: 24,
      city: 'Хабаровск',
      experience: {
        companyName: `ООО ТПК «Комфорт»`,
        startDate: undefined,
        endDate: undefined,
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Старший разработчик пользовательских интерфейсов
          R-Vision, Август 2020 — по настоящее время`
      },
      generalExperience: 0,
      salary: 300000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: true,
        canReject: true,
        canCheckSecurity: true,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Воскобойников',
      name: 'Константин',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (999) 999-99-99'
        },
        {
          type: 'mail',
          value: 'mailname_mailname@mail.ru'
        }
      ],
      position: 'Frontend-разработчик (Junior frontend developer)',
      age: 19,
      city: 'Москва',
      experience: {
        companyName: undefined,
        startDate: '2010-12-23',
        endDate: '2022-12-23',
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Разработка и поддержка CRM системы для малого бизнеса  - amoCRM. Данный продукт распространяется по модели SaaS, когда клиенту не надо ничего устанавливать на компьютер, он работает в браузере в режиме Online.`
      },
      generalExperience: 0,
      salary: 400000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: false,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Волохонский',
      name: 'Александр',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (999) 999-99-99'
        },
        {
          type: 'mail',
          value: 'namemailname_mailname@mail.ru'
        }
      ],
      position: 'Java-разработчик',
      age: 29,
      city: 'Москва',
      experience: {
        companyName: `ООО ТПК «Комфорт»`,
        startDate: '2010-09-26',
        endDate: '2023-09-26',
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Старший разработчик пользовательских интерфейсов
          R-Vision, Август 2020 — по настоящее время`
      },
      generalExperience: 0,
      salary: 300000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: false,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Воскобойников',
      name: 'Константин',
      contacts: [
        {
          type: 'mail',
          value: 'mailname_mailname@mail.ru'
        }
      ],
      position: 'Инженер-программист 2 категории',
      experience: {
        activity: {
          activityName: 'string',
          details: 'string'
        }
      },
      generalExperience: 0,
      salary: undefined,
      currency: undefined,
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: false,
        canOffer: false,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Христорождественская',
      name: 'Анастасия',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (000) 000-00-00'
        },
        {
          type: 'mail',
          value: 'namemailname_mailname@mail.ru'
        }
      ],
      position: 'Java-разработчик',
      age: 25,
      city: 'Новосибирск',
      experience: {
        companyName: `ТОО «1С: Франчайзинг Караганда»`,
        startDate: '2015-06-21',
        endDate: '2023-10-31',
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: undefined
      },
      generalExperience: 0,
      salary: 150000,
      currency: 'доллары',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: false,
        canOffer: true,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Раскольников',
      name: 'Родион',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (012) 345-67-89'
        },
        {
          type: 'mail',
          value: 'mailname@mail.ru'
        }
      ],
      position: 'Java Developer',
      age: 21,
      city: 'Санкт-Петербург',
      experience: {
        companyName: `ООО ТПК «Комфорт»`,
        startDate: undefined,
        endDate: undefined,
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Старший разработчик пользовательских интерфейсов
          R-Vision, Август 2020 — по настоящее время`
      },
      generalExperience: 0,
      salary: 90000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: true,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Самойлова',
      name: 'Екатерина',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (999) 999-99-99'
        },
        {
          type: 'mail',
          value: 'mailname_mailname@mail.ru'
        }
      ],
      position: 'Бизнес-аналитик',
      age: 24,
      city: 'Хабаровск',
      experience: {
        companyName: `ООО ТПК «Комфорт»`,
        startDate: undefined,
        endDate: undefined,
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Старший разработчик пользовательских интерфейсов
          R-Vision, Август 2020 — по настоящее время`
      },
      generalExperience: 0,
      salary: 300000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: true,
        canReject: true,
        canCheckSecurity: true,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Воскобойников',
      name: 'Константин',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (999) 999-99-99'
        },
        {
          type: 'mail',
          value: 'mailname_mailname@mail.ru'
        }
      ],
      position: 'Frontend-разработчик (Junior frontend developer)',
      age: 19,
      city: 'Москва',
      experience: {
        companyName: undefined,
        startDate: '2010-12-23',
        endDate: '2022-12-23',
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Разработка и поддержка CRM системы для малого бизнеса  - amoCRM. Данный продукт распространяется по модели SaaS, когда клиенту не надо ничего устанавливать на компьютер, он работает в браузере в режиме Online.`
      },
      generalExperience: 0,
      salary: 400000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: false,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Дубровский',
      name: 'Владимир',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (987) 654-32-10'
        }
      ],
      position: 'Инженер-программст 2 категории',
      age: 23,
      city: 'Екатеринбург',
      experience: {
        companyName: `ООО «Тета Дата Солюшнс» («ZYFRA»)`,
        startDate: undefined,
        endDate: undefined,
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: undefined
      },
      generalExperience: 0,
      salary: undefined,
      currency: undefined,
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: false,
        canOffer: false,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Раскольников',
      name: 'Родион',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (012) 345-67-89'
        },
        {
          type: 'mail',
          value: 'mailname@mail.ru'
        }
      ],
      position: 'Java Developer',
      age: 21,
      city: 'Санкт-Петербург',
      experience: {
        companyName: `ООО ТПК «Комфорт»`,
        startDate: undefined,
        endDate: undefined,
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Старший разработчик пользовательских интерфейсов
          R-Vision, Август 2020 — по настоящее время`
      },
      generalExperience: 0,
      salary: 90000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: true,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Самойлова',
      name: 'Екатерина',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (999) 999-99-99'
        },
        {
          type: 'mail',
          value: 'mailname_mailname@mail.ru'
        }
      ],
      position: 'Бизнес-аналитик',
      age: 24,
      city: 'Хабаровск',
      experience: {
        companyName: `ООО ТПК «Комфорт»`,
        startDate: undefined,
        endDate: undefined,
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Старший разработчик пользовательских интерфейсов
          R-Vision, Август 2020 — по настоящее время`
      },
      generalExperience: 0,
      salary: 300000,
      currency: 'рубли',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: true,
        canReject: true,
        canCheckSecurity: true,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    },
    {
      state: 'new',
      id: uuid(),
      status: 'new',
      surname: 'Воскобойников',
      name: 'Константин',
      contacts: [
        {
          type: 'telephone',
          value: '+7 (999) 999-99-99'
        },
        {
          type: 'mail',
          value: 'mailname_mailname@mail.ru'
        }
      ],
      position: 'Frontend-разработчик (Junior frontend developer)',
      age: 19,
      city: 'Москва',
      experience: {
        companyName: undefined,
        startDate: '2010-12-23',
        endDate: '2022-01-23',
        site: 'Местоположение',
        activity: {
          activityName: 'string',
          details: 'string'
        },
        description: `Разработка и поддержка CRM системы для малого бизнеса  - amoCRM. Данный продукт распространяется по модели SaaS, когда клиенту не надо ничего устанавливать на компьютер, он работает в браузере в режиме Online.`
      },
      generalExperience: 0,
      salary: 400000,
      currency: 'евро',
      actions: {
        canImport: true,
        canCreate: true,
        canView: true,
        canEdit: true,
        canAddToList: true,
        canDeleteFromList: true,
        canDelete: true,
        canContact: true,
        canInterview: true,
        canOffer: false,
        canReject: false,
        canCheckSecurity: false,
        canRefuse: false,
        canFinishWork: false,
        canResetStatus: false,
        canInitialStatus: false,
        canSave: false
      }
    }
  ]
};

export default initialObject;
