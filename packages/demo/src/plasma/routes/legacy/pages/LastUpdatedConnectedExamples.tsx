import * as React from 'react';
import {changeLastUpdated, ILastUpdatedPayload, IReduxAction, LastUpdatedConnected, ReduxConnect} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

export interface ILastUpdateConnectedExamplesProps {
    onRefresh?: () => void;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<ILastUpdatedPayload>) => void
): ILastUpdateConnectedExamplesProps => ({
    onRefresh: () => {
        dispatch(changeLastUpdated('LastUpdatedConnectedExampleComponent'));
    },
});

// start-print

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class LastUpdatedConnectedExamples extends React.Component<ILastUpdateConnectedExamplesProps, any> {
    componentDidMount() {
        setInterval(() => {
            this.props.onRefresh();
        }, 10000);
    }

    render() {
        return (
            <VaporComponent id="LastUpdatedConnected" title="Last Updated Connected" withSource>
                <div className="form-group" style={{width: 400}}>
                    <div>
                        <label className="form-control-label">
                            Last update updating with Redux (every 10 seconds here with the changeLastUpdated action
                            with the id)
                        </label>
                        <LastUpdatedConnected id="LastUpdatedConnectedExampleComponent" />
                    </div>
                </div>
            </VaporComponent>
        );
    }
}
