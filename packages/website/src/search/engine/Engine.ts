import {buildSearchEngine} from '@coveo/atomic-react';

export const searchEngine = () =>
    buildSearchEngine({
        configuration: {
            platformUrl: 'https://platform.cloud.coveo.com',
            organizationId: 'pwsadimtnwqkrvyrbxjuocz2g6m',
            // file deepcode ignore HardcodedNonCryptoSecret: <respect the documentation suggestion https://docs.coveo.com/en/105/build-a-search-ui/api-key-authentication>
            accessToken: 'xx4dfa233d-3c49-4ade-b07a-e85277a23e9b',
            analytics: {enabled: true, deviceId: 'dummyDeviceId', userDisplayName: 'anonymous'},
            search: {
                pipeline: 'default',
                searchHub: 'plasma',
            },
        },
    });
