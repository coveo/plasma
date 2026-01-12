import {PropsWithChildren, HtmlHTMLAttributes, FunctionComponent} from 'react';
import {PropsWithChildren, connect} from 'react-redux';
import {PropsWithChildren, PlasmaState} from '../../PlasmaState';
import {PropsWithChildren, IDispatch} from '../../utils/ReduxUtils';
import {PropsWithChildren, Button, IButtonProps} from '../button/Button';
import {PropsWithChildren, RefreshCallBackActions} from './RefeshCallbackActions';
import {PropsWithChildren, IRefreshCallbackOwnProps, RefreshCallback} from './RefreshCallback';
import {PropsWithChildren, RefreshStatus, RefreshStatusSelectors} from './RefreshCallbackReducer';

export interface IButtonWithRefreshCallbackProps extends IRefreshCallbackOwnProps {
    buttonContainerProps?: HtmlHTMLAttributes<HTMLDivElement>;
    button: IButtonProps;
}

const mapStateToProps = (state: PlasmaState, ownProps: IButtonWithRefreshCallbackProps) => ({
    status: RefreshStatusSelectors.getRefreshStatus(state, {id: ownProps.id}),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IButtonWithRefreshCallbackProps) => ({
    start: () => dispatch(RefreshCallBackActions.start(ownProps.id)),
    stop: () => dispatch(RefreshCallBackActions.stop(ownProps.id)),
});

const isNotStopped = (status: string) => status !== RefreshStatus.stopped;

const buttonWithRefreshCallbackDisconnected: FunctionComponent<
    PropsWithChildren<
        IButtonWithRefreshCallbackProps &
            Partial<ReturnType<typeof mapStateToProps>> &
            Partial<ReturnType<typeof mapDispatchToProps>>
    >
> = ({button, buttonContainerProps, status, start, stop, ...refreshCallbackProps}) => (
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

/**
 * @deprecated Use Mantine instead
 */
export const ButtonWithRefreshCallback = connect(
    mapStateToProps,
    mapDispatchToProps,
)(buttonWithRefreshCallbackDisconnected);
