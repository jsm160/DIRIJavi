// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configuración de idiomas
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          reference: 'Reference',
          faq: 'Frequently Asked Questions',
          description: 'Here you will find documentation and additional references.',
        },
      },
      es: {
        translation: {
          reference: 'Referencia',
          faq: 'Preguntas frecuentes',
          description: 'Aquí encontrarás documentación y referencias adicionales.',
        },
      },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Idioma por defecto si no hay traducción
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar
    },
  });

export default i18n;
