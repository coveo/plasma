import * as React from 'react';
import * as _ from 'underscore';
import {SlideY} from '../../../animations/SlideY';
import {IReactVaporState} from '../../../ReactVapor';
import {ConfigSupplier} from '../../../utils/HocUtils';
import {PropsToOmitUtils} from '../../../utils/react/PropsToOmitUtils';
import {ReduxConnect} from '../../../utils/ReduxUtils';
import {Drop, IDropOwnProps, IDropProps, IDropStateProps} from '../Drop';
import {DropPodPosition} from '../DropPod';
import {DefaultGroups} from '../redux/DropActions';
import {DropSelectors} from '../redux/DropReducers';

export type DropWithDropdownComponent<T = IDropProps> = React.ComponentClass<IDropProps>;

const mapStateToProps = (state: IReactVaporState, {id, group}: IDropOwnProps): IDropStateProps => ({
    isOpen: DropSelectors.isOpen(state, {id, group}),
});

export const dropWithDropdown = (supplier: ConfigSupplier = {}) => (Component: DropWithDropdownComponent): DropWithDropdownComponent => {

    @ReduxConnect(mapStateToProps)
    class DropWithDropdown extends React.PureComponent<IDropProps> {

        static defaultProps: Partial<IDropProps>;

        render() {
            return (
                <Component
                    {..._.omit(this.props, PropsToOmitUtils.internal)}
                >
                    <SlideY in={this.props.isOpen}>
                        {this.props.children}
                    </SlideY>
                </Component>
            );
        }
    }

    DropWithDropdown.defaultProps = {
        ...Drop.defaultProps,
        positions: [DropPodPosition.bottom, DropPodPosition.top],
        group: DefaultGroups.dropdown,
    };

    return DropWithDropdown;
};
