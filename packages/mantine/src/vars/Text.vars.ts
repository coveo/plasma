import {PartialVarsResolver, TextFactory, getFontSize} from '@mantine/core';

export const TextVars: PartialVarsResolver<TextFactory> = (theme, props) => {
    if (!props.size) {
        return {root: {'--text-fz': getFontSize('sm')}};
    }
    return {root: {}};
};
