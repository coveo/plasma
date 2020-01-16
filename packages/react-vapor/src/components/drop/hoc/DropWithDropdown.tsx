import * as React from 'react';
import * as _ from 'underscore';
import {SlideY} from '../../../animations/SlideY';
import {IReactVaporState} from '../../../ReactVapor';
import {PropsToOmitUtils} from '../../../utils/PropsToOmitUtils';
import {ReduxConnect} from '../../../utils/ReduxUtils';
import {DropPodPosition} from '../DomPositionCalculator';
import {Drop, IDropOwnProps, IDropProps, IDropStateProps} from '../Drop';
import {DefaultGroupIds} from '../redux/DropActions';
import {DropSelectors} from '../redux/DropReducers';

export type DropWithDropdownComponent<T = IDropProps> = React.ComponentClass<IDropProps>;

const mapStateToProps = (state: IReactVaporState, {id, groupId}: IDropOwnProps): IDropStateProps => ({
    isOpen: DropSelectors.isOpen(state, {id, groupId}),
});

export const dropWithDropdown = () => (Component: DropWithDropdownComponent): DropWithDropdownComponent => {
    @ReduxConnect(mapStateToProps)
    class DropWithDropdown extends React.PureComponent<IDropProps> {
        static defaultProps: Partial<IDropProps>;

        render() {
            return (
                <Component {..._.omit(this.props, PropsToOmitUtils.internal)}>
                    <SlideY in={this.props.isOpen}>{this.props.children}</SlideY>
                </Component>
            );
        }
    }

    DropWithDropdown.defaultProps = {
        ...Drop.defaultProps,
        positions: [DropPodPosition.bottom, DropPodPosition.top],
        groupId: DefaultGroupIds.dropdown,
    };

    return DropWithDropdown;
};
