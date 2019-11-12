import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IDispatch} from '../../utils/ReduxUtils';
import {RefreshCallBackActions} from './RefeshCallbackActions';

export interface IRefreshCallbackOwnProps {
    id: string;
    time?: number;
    interval?: number;
    callBack: (start: () => void) => void;
    renderCount?: (count: number) => React.ReactNode;
}

export interface IRefreshCallbackState {
    count: number;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IRefreshCallbackOwnProps) => ({
    status: state.refreshCallback[ownProps.id],
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IRefreshCallbackOwnProps) => ({
    start: () => dispatch(RefreshCallBackActions.start(ownProps.id)),
    stop: () => dispatch(RefreshCallBackActions.stop(ownProps.id)),
    inProgress: () => dispatch(RefreshCallBackActions.inProgress(ownProps.id)),
});

export interface IRefreshCallbackProps
    extends IRefreshCallbackOwnProps,
        Partial<ReturnType<typeof mapStateToProps>>,
        Partial<ReturnType<typeof mapDispatchToProps>> {}

class RefreshCallbackDisconnected extends React.PureComponent<IRefreshCallbackProps, IRefreshCallbackState> {
    static defaultProps: Partial<IRefreshCallbackProps> = {
        time: 10,
        interval: 1,
        renderCount: (count: number) => <span>Auto refresh in {count} seconds</span>,
    };

    private activeInterval: any;

    constructor(props: IRefreshCallbackProps) {
        super(props);
        this.state = {
            count: this.props.time,
        };
    }

    private startInterval() {
        this.activeInterval = setInterval(() => {
            this.setState((prevState: IRefreshCallbackState) => ({
                count: prevState.count - this.props.interval,
            }));
        }, 1000);
        this.props.inProgress();
    }

    componentDidMount() {
        this.startInterval();
    }

    componentDidUpdate(prevProps: Readonly<IRefreshCallbackProps>, prevState: Readonly<IRefreshCallbackState>) {
        if (this.props.status === 'start') {
            clearInterval(this.activeInterval);
            this.setState({
                count: this.props.time,
            });
            this.startInterval();
        } else if (this.props.status === 'stop') {
            clearInterval(this.activeInterval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.activeInterval);
    }

    render() {
        if (this.state.count === 0 && this.props.status === 'inProgress') {
            clearInterval(this.activeInterval);
            this.props.stop();
            callIfDefined(this.props.callBack, this.props.start);
        }

        return this.props.renderCount(this.state.count);
    }
}

export const RefreshCallback = connect(
    mapStateToProps,
    mapDispatchToProps
)(RefreshCallbackDisconnected);
