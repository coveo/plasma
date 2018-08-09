import {connect} from 'react-redux';
import {IReactVaporState} from '../../../ReactVapor';
import {ReduxUtils} from '../../../utils/ReduxUtils';
import {FormMode, IFormModeProps, IFormModeStateProps} from './FormMode';

const mapStateToProps = (state: IReactVaporState): IFormModeStateProps => {
    return {
        expressionEditorsState: state.expressionEditors && state.expressionEditors,
    };
};

export const FormModeConnected: React.ComponentClass<IFormModeProps> = connect(mapStateToProps, null, ReduxUtils.mergeProps)(FormMode);
