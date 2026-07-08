import {createSafeContext, GetStylesApi} from '@mantine/core';
import type {PrerequisitesListFactory} from './PrerequisitesList.js';

interface PrerequisitesListContextType {
    getStyles: GetStylesApi<PrerequisitesListFactory>;
}

export const [PrerequisitesListProvider, usePrerequisitesListContext] = createSafeContext<PrerequisitesListContextType>(
    'PrerequisitesList component was not found in tree',
);
