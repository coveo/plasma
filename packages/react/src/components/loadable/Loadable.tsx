import loadable, {DefaultComponent, OptionsWithoutResolver} from '@loadable/component';

import {Loading} from '../loading/Loading.js';

/**
 * @deprecated Use Mantine instead
 */
export const Loadable = <T extends unknown>(
    doImport: (props: T) => Promise<DefaultComponent<T>>,
    options?: OptionsWithoutResolver<T>
) => loadable<T>(doImport, {fallback: <Loading fullContent />, ...options});
