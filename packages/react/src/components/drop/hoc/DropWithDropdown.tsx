import {ComponentClass, PureComponent} from 'react';
import * as _ from 'underscore';
import {SlideY} from '../../../animations/SlideY.js';
import {PlasmaState} from '../../../PlasmaState.js';
import {PropsToOmitUtils} from '../../../utils/PropsToOmitUtils.js';
import {ReduxConnect} from '../../../utils/ReduxUtils.js';
import {DropPodPosition} from '../DomPositionCalculator.js';
import {Drop, IDropOwnProps, IDropProps, IDropStateProps} from '../Drop.js';
import {DefaultGroupIds} from '../redux/DropActions.js';
import {DropSelectors} from '../redux/DropReducers.js';

export type DropWithDropdownComponent<T = IDropProps> = ComponentClass<IDropProps>;

const mapStateToProps = (state: PlasmaState, {id, groupId}: IDropOwnProps): IDropStateProps => ({
    isOpen: DropSelectors.isOpen(state, {id, groupId}),
});

/**
 * @deprecated Use Mantine instead
 */
export const dropWithDropdown =
    () =>
    (Component: DropWithDropdownComponent): DropWithDropdownComponent => {
        @ReduxConnect(mapStateToProps)
        class DropWithDropdown extends PureComponent<IDropProps> {
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
