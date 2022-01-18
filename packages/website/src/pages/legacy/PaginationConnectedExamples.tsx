import * as React from 'react';
import {INavigationOwnProps, LoadingActions, NavigationConnected, turnOffLoading} from '@coveord/plasma-react';
import * as _ from 'underscore';

import {Store} from '../../Store';
import VaporComponent from '../../building-blocs/VaporComponent';

const navigationConnectedExampleId = 'navigation-connected';
const navigationConnectedExampleLoadingIds = ['loading-' + navigationConnectedExampleId];

// start-print

export class PaginationConnectedExamples extends React.PureComponent {
    static title: string = 'PaginationConnected';
    // Remove loading after a few seconds
    componentDidMount() {
        Store.subscribe(() => {
            if (_.contains([LoadingActions.turnOn, LoadingActions.add], Store.getState().lastAction.type)) {
                setTimeout(() => {
                    Store.dispatch(turnOffLoading(navigationConnectedExampleLoadingIds));
                }, 2000);
            }
        });
    }

    render() {
        const navigationProps: INavigationOwnProps = {
            id: navigationConnectedExampleId,
            totalPages: 10,
            totalEntries: 50,
            loadingIds: navigationConnectedExampleLoadingIds,
        };
        return (
            <VaporComponent id="PaginationConnected" title="Pagination Connected" withSource>
                <div className="mt2">
                    <div className="form-group">
                        <label className="form-control-label">Pagination with Redux state and loading</label>
                        <NavigationConnected {...navigationProps} />
                    </div>
                </div>
            </VaporComponent>
        );
    }
}
