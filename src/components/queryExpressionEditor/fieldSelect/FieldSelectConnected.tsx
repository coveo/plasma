import {connect} from 'react-redux';
import {IReduxActionsPayload} from '../../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils';
import {IDropdownOption} from '../../dropdownSearch/DropdownSearch';
import {updateOptionsDropdownSearch} from '../../dropdownSearch/DropdownSearchActions';
import {FieldSelect, IFieldSelectDispatchProps, IFieldSelectProps} from './FieldSelect';

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void): IFieldSelectDispatchProps => ({
    onOptionsChanged: (id: string, options: IDropdownOption[]) => dispatch(updateOptionsDropdownSearch(id, options)),
});

export const FieldSelectConnected: React.ComponentClass<IFieldSelectProps> = connect(null, mapDispatchToProps, ReduxUtils.mergeProps)(FieldSelect);
