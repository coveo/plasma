import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {ReduxUtils} from '../../../utils/ReduxUtils';
import {IListBoxState} from '../../listBox/ListBoxReducers';
import {fieldSelectId} from '../fieldSelect/FieldSelect';
import {operatorSelectId} from '../operatorSelect/OperatorSelect';
import {IValueSelectOwnProps, IValueSelectProps, IValueSelectStateProps, ValueSelect} from './ValueSelect';

const mapStateToProps = (state: IReactVaporState, ownProps: IValueSelectOwnProps): IValueSelectStateProps => {
    const operatorSelect: IListBoxState = _.findWhere(state.listBoxes, {id: `${ownProps.expressionEditorId}-${operatorSelectId}`});
    const fieldSelect: IListBoxState = _.findWhere(state.listBoxes, {id: `${ownProps.expressionEditorId}-${fieldSelectId}`});

    return {
        selectedOperator: operatorSelect && operatorSelect.selected ? operatorSelect.selected[0] : undefined,
        selectedField: fieldSelect && fieldSelect.selected ? fieldSelect.selected[0] : undefined,
    };
};

export const ValueSelectConnected: React.ComponentClass<IValueSelectProps> = connect(mapStateToProps, null, ReduxUtils.mergeProps)(ValueSelect);
