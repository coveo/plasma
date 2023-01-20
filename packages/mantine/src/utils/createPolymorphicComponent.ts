import {createPolymorphicComponent as mantineCreatePolymorphicComponent} from '@mantine/utils';

/*
 * createPolymorphicComponent is already exported from @mantine/core, but there is an issue when using pnpm + typescript
 * that forces us to use it directly from @mantine/utils (see https://github.com/microsoft/TypeScript/issues/47663)
 * We are simply rexporting it here to avoid having to deal with this issue everywhere
 */
export const createPolymorphicComponent = mantineCreatePolymorphicComponent;
