import {flagg, sessionStore} from 'flagg';

export const FeatureFlags = flagg({
    store: sessionStore(),
    definitions: {
        'query-suggestions': {
            default: false,
        },
    },
});
