import * as _ from 'underscore';

import {PlasmaState} from '../../ReactVaporState';

const getValue = (state: PlasmaState, id: string): string => _.findWhere(state.searchBars, {id})?.value?.trim() ?? '';

export const SearchBarSelector = {getValue};
