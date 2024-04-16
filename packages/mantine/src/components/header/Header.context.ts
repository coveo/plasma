import {GetStylesApi, createSafeContext} from '@mantine/core';
import type {HeaderFactory} from './Header';

export interface HeaderContextValue {
    getStyles: GetStylesApi<HeaderFactory>;
}

export const [HeaderProvider, useHeaderContext] = createSafeContext<HeaderContextValue>(
    'Header component was not found in tree',
);
