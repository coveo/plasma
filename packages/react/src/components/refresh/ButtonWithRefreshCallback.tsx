import {PropsWithChildren, HtmlHTMLAttributes, FunctionComponent} from 'react';
import {connect} from 'react-redux';
import {PlasmaState} from '../../PlasmaState';
import {IDispatch} from '../../utils/ReduxUtils';
import {Button, IButtonProps} from '../button/Button';
import {RefreshCallBackActions} from './RefeshCallbackActions';
import {IRefreshCallbackOwnProps, RefreshCallback} from './RefreshCallback';
import {RefreshStatus, RefreshStatusSelectors} from './RefreshCallbackReducer';

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
