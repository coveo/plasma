import {buildSearchEngine} from '@coveo/headless';

export const searchEngine = () =>
    buildSearchEngine({
        configuration: {
            organizationId: 'pwsadimtnwqkrvyrbxjuocz2g6m',
            accessToken: 'xx4dfa233d-3c49-4ade-b07a-e85277a23e9b',
            analytics: {enabled: true, deviceId: 'dummyDeviceId', userDisplayName: 'anonymous'},
            search: {
                pipeline: 'default',
                searchHub: 'plasma',
            },
        },
    });
