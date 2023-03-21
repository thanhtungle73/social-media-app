import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import vi from '../locales/vi';

export const locales: { [key: string]: string } = {
  en: 'English',
  vi: 'Tiếng Việt',
};

const resources = { en, vi };

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  defaultNS: 'common',
  ns: ['common', 'home'],
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
