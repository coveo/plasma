import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IModalSelectState, modalSelectInitialState} from './ModalSelectReducers';

const get = (state: IReactVaporState, {id}: {id: string}): IModalSelectState =>
    _.findWhere(state.modalSelects, {id}) || modalSelectInitialState;

const getValue = createSelector(get, (modalSelect: IModalSelectState) => modalSelect && modalSelect.value);

export const ModalSelectSelectors = {
    get,
    getValue,
};
