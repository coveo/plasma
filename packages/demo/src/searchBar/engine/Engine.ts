import {buildSearchEngine, getSampleSearchEngineConfiguration} from '@coveo/headless';

export const headlessEngine = () =>
    buildSearchEngine({
        configuration: getSampleSearchEngineConfiguration(),
    });

// export const headlessEngine = buildSearchEngine({
//   configuration: {
//     organizationId: '<ORGANIZATION_ID>',
//     accessToken: '<ACCESS_TOKEN>',
//     renewAccessToken: <CALLBACK>,
//   }
// });
