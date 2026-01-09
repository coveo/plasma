import {createSafeContext, type GetStylesApi} from '@mantine/core';
import type {HorizontalLayoutFactory} from './HorizontalLayout.js';

interface HorizontalLayoutContextType {
    getStyles: GetStylesApi<HorizontalLayoutFactory>;
}

export const [HorizontalLayoutProvider, useHorizontalLayout] = createSafeContext<HorizontalLayoutContextType>(
    'HorizontalLayout component was not found in tree',
);
