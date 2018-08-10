import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {ReduxUtils} from '../../../utils/ReduxUtils';
import { IDropdownOption } from '../../dropdownSearch/DropdownSearch';
import { IDropdownSearchState } from '../../dropdownSearch/DropdownSearchReducers';
import {IListBoxState} from '../../listBox/ListBoxReducers';
import {fieldSelectId} from '../fieldSelect/FieldSelect';
import {operatorSelectId} from '../operatorSelect/OperatorSelect';
import { IValueSelectStringOwnProps, IValueSelectStringProps, IValueSelectStringStateProps, ValueSelectString } from './ValueSelectString';

// TODO : : Is this the only way to get the selectedOption? + Duplication of code with ExpressionEditorConnected.tsx
function getSelectedOption(options: IDropdownOption[]): string {
    const selectedOption: IDropdownOption = _.findWhere(options, {selected: true});
    return selectedOption.value;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IValueSelectStringOwnProps): IValueSelectStringStateProps => {
    const operatorSelect: IListBoxState = _.findWhere(state.listBoxes, {id: `${ownProps.expressionEditorId}-${operatorSelectId}`});
    const fieldSelect: IDropdownSearchState = _.findWhere(state.dropdownSearch, {id: `${ownProps.expressionEditorId}-${fieldSelectId}`});

    return {
        selectedOperator: operatorSelect && operatorSelect.selected ? operatorSelect.selected[0] : undefined,
        selectedField: fieldSelect && fieldSelect.options ? getSelectedOption(fieldSelect.options) : undefined,
    };
};

export const ValueSelectStringConnected: React.ComponentClass<IValueSelectStringProps> = connect(mapStateToProps, null, ReduxUtils.mergeProps)(ValueSelectString);
