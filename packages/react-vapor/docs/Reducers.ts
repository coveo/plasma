import * as Redux from 'redux';

import {
    IListBoxExampleCompositeState,
    listBoxExampleReducer,
} from '../src/components/listBox/examples/ListBoxExampleReducer';
import {IExampleServerTableState} from '../src/components/table-hoc/examples/TableHOCServerExample';
import {IReactVaporState} from '../src/ReactVapor';
import {ReactVaporReducers} from '../src/ReactVaporReducers';

export interface IReactVaporExampleState extends IReactVaporState {
    listBoxExampleState?: IListBoxExampleCompositeState;
    tableHOCExample?: IExampleServerTableState;
}

export const Reducers: Redux.Reducer<IReactVaporExampleState> = Redux.combineReducers<IReactVaporExampleState>({
    ...ReactVaporReducers,
    listBoxExampleState: listBoxExampleReducer,
});
