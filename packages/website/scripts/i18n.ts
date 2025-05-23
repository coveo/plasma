import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n.use(HttpBackend)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/lang/{{lng}}.json',
        },
        react: {
            useSuspense: true,
        },
        preload: ['en'],
        cache: {
            enabled: true,
            expirationTime: 7 * 24 * 60 * 60 * 1000,
        },
    });
