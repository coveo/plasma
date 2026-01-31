import {ComponentClass, PureComponent} from 'react';
import * as _ from 'underscore';
import {SlideY} from '../../../animations/SlideY';
import {PlasmaState} from '../../../PlasmaState';
import {PropsToOmitUtils} from '../../../utils/PropsToOmitUtils';
import {ReduxConnect} from '../../../utils/ReduxUtils';
import {DropPodPosition} from '../DomPositionCalculator';
import {IDropOwnProps, IDropProps, IDropStateProps} from '../Drop';
import {DefaultGroupIds} from '../redux/DropActions';
import {DropSelectors} from '../redux/DropReducers';

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
            static defaultProps: Partial<IDropProps> = {
                groupId: DefaultGroupIds.dropdown,
                positions: [DropPodPosition.bottom, DropPodPosition.top],
                closeOnClickDrop: true,
                closeOnClickOutside: true,
                listContainerProps: {},
                minHeight: 0,
                minWidth: 0,
                hasSameWidth: false,
            };

            render() {
                return (
                    <Component {..._.omit(this.props, PropsToOmitUtils.internal)}>
                        <SlideY in={this.props.isOpen}>{this.props.children}</SlideY>
                    </Component>
                );
            }
        }

        return DropWithDropdown;
    };
