import {flagg, localStore} from 'flagg';

export const FeatureFlags = flagg({
    store: localStore(),
    definitions: {
        'query-suggestions': {
            default: false,
        },
    },
});
