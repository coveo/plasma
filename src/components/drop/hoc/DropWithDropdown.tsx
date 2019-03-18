import * as React from 'react';
import * as _ from 'underscore';
import {SlideY} from '../../../animations/SlideY';
import {IReactVaporState} from '../../../ReactVapor';
import {ConfigSupplier} from '../../../utils/HocUtils';
import {PropsToOmitUtils} from '../../../utils/react/PropsToOmitUtils';
import {ReduxConnect} from '../../../utils/ReduxUtils';
import {IDropOwnProps, IDropProps, IDropStateProps} from '../Drop';
import {DropPodPosition} from '../DropPod';
import {DropSelectors} from '../redux/DropReducers';

export type DropFormDropdownComponent<T = IDropProps> = React.ComponentClass<IDropProps>;

const mapStateToProps = (state: IReactVaporState, {id}: IDropOwnProps): IDropStateProps => ({
    isOpen: DropSelectors.isOpen(state, {id}),
});

export const dropFormDropdown = (supplier: ConfigSupplier = {}) => (Component: DropFormDropdownComponent): DropFormDropdownComponent => {

    @ReduxConnect(mapStateToProps)
    class DropFormDropdown extends React.PureComponent<IDropProps> {

        static defaultProps = {
            positions: [DropPodPosition.bottom, DropPodPosition.top],
        };

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

    return DropFormDropdown;
};
