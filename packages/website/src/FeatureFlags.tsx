import {flagg, sessionStore} from 'flagg';

export const FeatureFlags = flagg({
    store: sessionStore(),
    definitions: {
        'plasma-search-bar': {
            default: false,
        },
    },
});
