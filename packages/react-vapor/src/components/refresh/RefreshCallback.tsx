import * as React from 'react';
import {connect} from 'react-redux';
import {Defaults} from '../../Defaults';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils/ReduxUtils';
import {RefreshCallBackActions} from './RefeshCallbackActions';
import {RefreshStatus, RefreshStatusSelectors} from './RefreshCallbackReducer';

export interface IRefreshCallbackOwnProps {
    id: string;
    delay?: number;
    renderCount?: (count: number) => React.ReactNode;
    callback: (start: () => void) => void;
}

export interface IRefreshCallbackState {
    count: number;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IRefreshCallbackOwnProps) => ({
    status: RefreshStatusSelectors.getRefreshStatus(state, {id: ownProps.id}),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IRefreshCallbackOwnProps) => ({
    start: () => dispatch(RefreshCallBackActions.start(ownProps.id)),
    stop: () => dispatch(RefreshCallBackActions.stop(ownProps.id)),
    inProgress: () => dispatch(RefreshCallBackActions.inProgress(ownProps.id)),
});

export type IRefreshCallbackProps = IRefreshCallbackOwnProps &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

class RefreshCallbackDisconnected extends React.PureComponent<IRefreshCallbackProps, IRefreshCallbackState> {
    static defaultProps: Partial<IRefreshCallbackProps> = {
        delay: 10,
        renderCount: (count: number) => <span>Auto refresh in {count} seconds</span>,
    };

    private activeInterval: number;

    state = {
        count: this.props.delay,
    };

    get isInProgress() {
        return this.state.count === 0 && this.props.status === RefreshStatus.inProgress;
    }

    get isStopped() {
        return this.props.status === RefreshStatus.stopped;
    }

    get isStarted() {
        return this.props.status === RefreshStatus.started;
    }

    private stopInterval() {
        clearInterval(this.activeInterval);
    }

    private startInterval() {
        this.activeInterval = window.setInterval(() => {
            this.setState((prevState: IRefreshCallbackState) => ({
                count: prevState.count - 1,
            }));
        }, Defaults.REFRESH_CALLBACK_INTERVAL_MS);
        this.props.inProgress();
    }

    componentDidMount() {
        this.startInterval();
    }

    componentDidUpdate(prevProps: Readonly<IRefreshCallbackProps>, prevState: Readonly<IRefreshCallbackState>) {
        if (this.isStarted) {
            this.stopInterval();
            this.setState({
                count: this.props.delay,
            });
            this.startInterval();
        } else if (this.isStopped) {
            this.stopInterval();
        }
    }

    componentWillUnmount() {
        this.stopInterval();
    }

    render() {
        if (this.isInProgress) {
            this.stopInterval();
            this.props.stop();
            this.props.callback?.(this.props.start);
        }

        return this.props.renderCount(this.state.count);
    }
}

export const RefreshCallback = connect(mapStateToProps, mapDispatchToProps)(RefreshCallbackDisconnected);
