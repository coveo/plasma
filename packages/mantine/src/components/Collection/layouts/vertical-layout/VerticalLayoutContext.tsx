import {createSafeContext, type GetStylesApi} from '@mantine/core';
import type {VerticalLayoutFactory} from './VerticalLayout.js';

interface VerticalLayoutContextType {
    getStyles: GetStylesApi<VerticalLayoutFactory>;
}

export const [VerticalLayoutProvider, useVerticalLayout] = createSafeContext<VerticalLayoutContextType>(
    'VerticalLayout component was not found in tree',
);
