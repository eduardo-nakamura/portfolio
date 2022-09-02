import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';
import HttpApi from 'i18next-http-backend'

import { DateTime } from 'luxon';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['br', 'en'],
    fallbackLng: 'br',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: '/portfolio/locales/{{lng}}/translation.json',
    },
  })
  //http://localhost:3000/portfolio/logo192.png
  //http://localhost:3000/locales/en/translation.json
// .use(LanguageDetector)  
// .use(initReactI18next)
// .init({
//   debug: true,
//   fallbackLng: 'br',
//   interpolation: {
//     escapeValue: false,
//   },
//   resources: {
//     en: {
//       translation: {
//         home: "Home",
//         invoices: "Invoices",
//         about: "About",
//         description: {
//           part1: 'Edit <1>src/App.js</1> and save to reload.',
//           part2: 'Learn React'
//         }
//       }
//     },
//     br: {
//       translation: {
//         home: "Pagina Principal",
//         invoices: "Faturas",
//         about: "Sobre",
//         description: {
//           part1: 'Editar <1>src/App.js</1> e salve arquivo.',
//           part2: 'Aprenda React'
//         }
//       }
//     },
//   }
// });

export default i18n;