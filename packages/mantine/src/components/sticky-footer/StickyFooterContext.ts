import {createSafeContext, type GetStylesApi} from '@mantine/core';
import type {StickyFooterFactory} from './StickyFooter';

interface StickyFooterContextType {
    getStyles: GetStylesApi<StickyFooterFactory>;
}

export const [StickyFooterProvider, useStickyFooterContext] = createSafeContext<StickyFooterContextType>(
    'StickyFooter component was not found in tree',
);
