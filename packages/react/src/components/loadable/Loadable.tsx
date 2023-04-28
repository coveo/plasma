import loadableModule, {DefaultComponent, OptionsWithoutResolver} from '@loadable/component';

import {Loading} from '../loading/Loading';

// https://github.com/gregberge/loadable-components/issues/849#issuecomment-1105187553
const unwrap = <T,>(module: T | {__esModule: boolean; default: T}): T => {
    if (typeof module === 'object' && '__esModule' in module && 'default' in module) {
        return module.default;
    }
    return module;
};

const loadable = unwrap(loadableModule);

/**
 * @deprecated Use Mantine instead
 */
export const Loadable = <T extends unknown>(
    doImport: (props: T) => Promise<DefaultComponent<T>>,
    options?: OptionsWithoutResolver<T>
) => loadable<T>(doImport, {fallback: <Loading fullContent />, ...options});
