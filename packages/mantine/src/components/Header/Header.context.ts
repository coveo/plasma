import {GetStylesApi, createSafeContext} from '@mantine/core';
import type {HeaderFactory, HeaderVariant} from './Header.js';

export interface HeaderContextValue {
    getStyles: GetStylesApi<HeaderFactory>;
    variant: HeaderVariant;
}

export const [HeaderProvider, useHeaderContext] = createSafeContext<HeaderContextValue>(
    'Header component was not found in tree',
);
