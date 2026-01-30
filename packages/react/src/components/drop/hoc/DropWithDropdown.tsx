import {ComponentClass, PureComponent} from 'react';
import * as _ from 'underscore';
import {SlideY} from '../../../animations/SlideY';
import {PlasmaState} from '../../../PlasmaState';
import {PropsToOmitUtils} from '../../../utils/PropsToOmitUtils';
import {ReduxConnect} from '../../../utils/ReduxUtils';
import {DropPodPosition} from '../DomPositionCalculator';
import {Drop, IDropOwnProps, IDropProps, IDropStateProps} from '../Drop';
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
                ...Drop.defaultProps,
                positions: [DropPodPosition.bottom, DropPodPosition.top],
                groupId: DefaultGroupIds.dropdown,
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
