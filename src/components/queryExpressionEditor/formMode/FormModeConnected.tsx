import {connect} from 'react-redux';
import {IReactVaporState, IReduxActionsPayload} from '../../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils';
import {selectListBoxOption} from '../../listBox/ListBoxActions';
import {FormMode, IFormModeDispatchProps, IFormModeProps, IFormModeStateProps} from './FormMode';

const mapStateToProps = (state: IReactVaporState): IFormModeStateProps => {
    return {
        expressionEditorsState: state.expressionEditors && state.expressionEditors,
    };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void): IFormModeDispatchProps => ({
    selectListBoxOption: (id: string, multi: boolean, value: string) => dispatch(selectListBoxOption(id, multi, value)),
});

export const FormModeConnected: React.ComponentClass<IFormModeProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(FormMode);
