import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IDispatch} from '../../utils/ReduxUtils';
import {Button, IButtonProps} from '../button/Button';
import {RefreshCallBackActions} from './RefeshCallbackActions';
import {IRefreshCallbackProps} from './RefreshCallback';
import {RefreshStatus, RefreshStatusSelectors} from './RefreshCallbackReducer';

export interface IRefreshCallbackWithButtonProps
    extends IRefreshCallbackProps,
        Partial<ReturnType<typeof mapStateToProps>>,
        Partial<ReturnType<typeof mapDispatchToProps>> {}

export interface IRefreshCallbackWithButtonConfig {
    buttonContainerProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
    button: IButtonProps;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IRefreshCallbackWithButtonProps) => ({
    status: RefreshStatusSelectors.getRefreshStatus(state, {id: ownProps.id}),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IRefreshCallbackWithButtonProps) => ({
    start: () => dispatch(RefreshCallBackActions.start(ownProps.id)),
    stop: () => dispatch(RefreshCallBackActions.stop(ownProps.id)),
});

export const refreshCallbackWithButton = (config: IRefreshCallbackWithButtonConfig) => (
    Component: React.ComponentClass<IRefreshCallbackWithButtonProps>
): React.ComponentClass<Partial<IRefreshCallbackWithButtonProps>> => {
    class ComponentWithButton extends React.PureComponent<IRefreshCallbackWithButtonProps> {
        render() {
            return (
                <>
                    <div {...(config.buttonContainerProps || {})}>
                        <Button
                            {...config.button}
                            onClick={() => {
                                this.props.stop();
                                callIfDefined(this.props.callback, this.props.start);
                            }}
                            enabled={this.props.status !== RefreshStatus.stop}
                        />
                    </div>
                    <Component {...this.props}>{this.props.children}</Component>
                </>
            );
        }
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(ComponentWithButton);
};
