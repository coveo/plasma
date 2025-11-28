import {createSafeContext, GetStylesApi} from '@mantine/core';
import {type RowLayoutFactory} from './RowLayout.js';

interface RowLayoutContextType {
    getStyles: GetStylesApi<RowLayoutFactory>;
}
export const [RowLayoutProvider, useRowLayout] = createSafeContext<RowLayoutContextType>(
    'RowLayout was not found in the component tree',
);
