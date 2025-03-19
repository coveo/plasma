import {createSafeContext, GetStylesApi} from '@mantine/core';
import {PromptFactory, PromptVariant} from './Prompt';

interface PromptContext {
    variant: PromptVariant;
    getStyles: GetStylesApi<PromptFactory>;
}

export const [PromptContextProvider, usePromptContext] = createSafeContext<PromptContext>(
    'Prompt component was not found in the tree',
);
