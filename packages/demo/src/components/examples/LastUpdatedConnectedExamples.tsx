import * as React from 'react';
import {changeLastUpdated, ILastUpdatedPayload, IReduxAction, LastUpdatedConnected, ReduxConnect} from 'react-vapor';

export interface ILastUpdateConnectedExamplesProps {
    onRefresh?: () => void;
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<ILastUpdatedPayload>) => void
): ILastUpdateConnectedExamplesProps => {
    return {
        onRefresh: () => {
            dispatch(changeLastUpdated('LastUpdatedConnectedExampleComponent'));
        },
    };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class LastUpdatedConnectedExamples extends React.Component<ILastUpdateConnectedExamplesProps, any> {
    componentDidMount() {
        setInterval(() => {
            this.props.onRefresh();
        }, 10000);
    }

    render() {
        return (
            <div className="form-group" style={{width: 400}}>
                <div>
                    <label className="form-control-label">
                        Last update updating with Redux (every 10 seconds here with the changeLastUpdated action with
                        the id)
                    </label>
                    <LastUpdatedConnected id="LastUpdatedConnectedExampleComponent" />
                </div>
            </div>
        );
    }
}
