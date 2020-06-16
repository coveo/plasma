import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';

const getValue = (state: IReactVaporState, id: string): string =>
    _.findWhere(state.searchBars, {id})?.value?.trim() ?? '';

export const SearchBarSelector = {getValue};
