import {CSSVariablesResolver, deepMerge} from '@mantine/core';

export const mergeCSSVariablesResolvers =
    (...resolvers: Array<CSSVariablesResolver | undefined>): CSSVariablesResolver =>
    (theme) =>
        resolvers
            .filter((resolver): resolver is CSSVariablesResolver => Boolean(resolver))
            .reduce((acc, resolver) => deepMerge(acc, resolver(theme)), {
                variables: {},
                dark: {},
                light: {},
            });
