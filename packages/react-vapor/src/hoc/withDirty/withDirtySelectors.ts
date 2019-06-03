import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';

const getIsDirty = (state: IReactVaporState, props: {id: string}): boolean => {
    return _.contains(state.dirtyComponents || [], props.id);
};

export const WithDirtySelectors = {
    getIsDirty,
};
