import {buildSearchEngine} from '@coveo/headless';

export const headlessEngine = () =>
    buildSearchEngine({
        configuration: {
            platformUrl: 'https://platformdev.cloud.coveo.com',
            organizationId: 'donotdeleteplasmadesignsystempxjjjimz',
            accessToken: 'xxd5ed9d85-41bb-463c-b133-d188698de758',
            analytics: {enabled: true},
        },
    });

// The accessToken is following the recommandation for the access level fro the offical Coveo Documentation
// https://docs.coveo.com/en/105/build-a-search-ui/api-key-authentication
