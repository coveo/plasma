import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IDispatch} from '../../utils/ReduxUtils';
import {RefreshCallBackActions} from './RefeshCallbackActions';
import {RefreshStatus, RefreshStatusSelectors} from './RefreshCallbackReducer';

export interface IRefreshCallbackOwnProps {
    id: string;
    time?: number;
    incremental?: number;
    intervalInMs?: number;
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
        time: 10,
        incremental: 1,
        intervalInMs: 1000,
        renderCount: (count: number) => <span>Auto refresh in {count} seconds</span>,
    };

    private activeInterval: NodeJS.Timeout;

    constructor(props: IRefreshCallbackProps) {
        super(props);
        this.state = {
            count: this.props.time,
        };
    }

    private startInterval() {
        this.activeInterval = setInterval(() => {
            this.setState((prevState: IRefreshCallbackState) => ({
                count: prevState.count - this.props.incremental,
            }));
        }, this.props.intervalInMs);
        this.props.inProgress();
    }

    componentDidMount() {
        this.startInterval();
    }

    componentDidUpdate(prevProps: Readonly<IRefreshCallbackProps>, prevState: Readonly<IRefreshCallbackState>) {
        if (this.props.status === RefreshStatus.start) {
            clearInterval(this.activeInterval);
            this.setState({
                count: this.props.time,
            });
            this.startInterval();
        } else if (this.props.status === RefreshStatus.stop) {
            clearInterval(this.activeInterval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.activeInterval);
    }

    render() {
        if (this.state.count === 0 && this.props.status === RefreshStatus.inProgress) {
            clearInterval(this.activeInterval);
            this.props.stop();
            callIfDefined(this.props.callback, this.props.start);
        }

        return this.props.renderCount(this.state.count);
    }
}

export const RefreshCallback = connect(mapStateToProps, mapDispatchToProps)(RefreshCallbackDisconnected);
