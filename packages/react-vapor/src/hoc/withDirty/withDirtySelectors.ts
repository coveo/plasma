import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';

const getIsDirty = (state: IReactVaporState, props: {id: string}): boolean =>
    _.contains(state.dirtyComponents || [], props.id);

export const WithDirtySelectors = {
    getIsDirty,
};
