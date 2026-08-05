import {createSafeContext, GetStylesApi} from '@mantine/core';
import {type CardLayoutFactory} from './CardLayout.js';

interface CardLayoutContextType {
    getStyles: GetStylesApi<CardLayoutFactory>;
}
export const [CardLayoutProvider, useCardLayout] = createSafeContext<CardLayoutContextType>(
    'CardLayout was not found in the component tree',
);
