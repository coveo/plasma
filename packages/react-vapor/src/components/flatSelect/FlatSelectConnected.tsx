import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {FlatSelect, IFlatSelectDispatchProps, IFlatSelectOwnProps, IFlatSelectProps, IFlatSelectStateProps} from './FlatSelect';
import {addFlatSelect, removeFlatSelect, selectFlatSelect} from './FlatSelectActions';
import {IFlatSelectOptionProps} from './FlatSelectOption';
import {IFlatSelectState} from './FlatSelectReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IFlatSelectOwnProps): IFlatSelectStateProps => {
    const flatSelect: IFlatSelectState = _.findWhere(state.flatSelect, {id: ownProps.id});

    return {
        selectedOptionId: flatSelect && flatSelect.selectedOptionId
    }

};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IFlatSelectOwnProps): IFlatSelectDispatchProps => ({
    onRender: () => dispatch(addFlatSelect(ownProps.id, ownProps.defaultSelectedOptionId || ownProps.options.length && ownProps.options[0].id)),
    onDestroy: () => dispatch(removeFlatSelect(ownProps.id)),
    onOptionClick: (selected: IFlatSelectOptionProps) => dispatch(selectFlatSelect(ownProps.id, selected.id)),
});

export const FlatSelectConnected: React.ComponentClass<IFlatSelectProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(FlatSelect);
