import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';

const getValue = (state: IReactVaporState, id: string): string =>
    _.findWhere(state.searchBars, {id})?.value?.trim() ?? '';

export const SearchBarSelector = {getValue};
