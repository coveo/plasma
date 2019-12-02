import {FunctionComponent} from 'react';
import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils/ReduxUtils';
import {Button, IButtonProps} from '../button/Button';
import {RefreshCallBackActions} from './RefeshCallbackActions';
import {IRefreshCallbackOwnProps, RefreshCallback} from './RefreshCallback';
import {RefreshStatus, RefreshStatusSelectors} from './RefreshCallbackReducer';

export interface IButtonWithRefreshCallbackProps extends IRefreshCallbackOwnProps {
    buttonContainerProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
    button: IButtonProps;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IButtonWithRefreshCallbackProps) => ({
    status: RefreshStatusSelectors.getRefreshStatus(state, {id: ownProps.id}),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IButtonWithRefreshCallbackProps) => ({
    start: () => dispatch(RefreshCallBackActions.start(ownProps.id)),
    stop: () => dispatch(RefreshCallBackActions.stop(ownProps.id)),
});

const isNotStopped = (status: string) => status !== RefreshStatus.stopped;

const buttonWithRefreshCallbackDisconnected: FunctionComponent<IButtonWithRefreshCallbackProps &
    Partial<ReturnType<typeof mapStateToProps>> &
    Partial<ReturnType<typeof mapDispatchToProps>>> = ({
    button,
    buttonContainerProps,
    status,
    start,
    stop,
    ...refreshCallbackProps
}) => (
    <>
        <div {...(buttonContainerProps || {})}>
            <Button
                {...button}
                onClick={() => {
                    stop();
                    refreshCallbackProps.callback?.(start);
                }}
                enabled={isNotStopped(status)}
            />
        </div>
        <RefreshCallback {...refreshCallbackProps} />
    </>
);

export const ButtonWithRefreshCallback = connect(
    mapStateToProps,
    mapDispatchToProps
)(buttonWithRefreshCallbackDisconnected);
