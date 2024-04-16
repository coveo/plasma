import {CSSVariablesResolver, deepMerge} from '@mantine/core';

export const mergeCSSVariablesResolvers =
    (...resolvers: CSSVariablesResolver[]): CSSVariablesResolver =>
    (theme) =>
        resolvers.filter(Boolean).reduce((acc, resolver) => deepMerge(acc, resolver(theme)), {
            variables: {},
            dark: {},
            light: {},
        });
