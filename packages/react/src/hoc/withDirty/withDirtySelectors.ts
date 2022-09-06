import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';

const getIsDirty = (state: PlasmaState, props: {id: string}): boolean =>
    _.contains(state.dirtyComponents || [], props.id);

export const WithDirtySelectors = {
    getIsDirty,
};
