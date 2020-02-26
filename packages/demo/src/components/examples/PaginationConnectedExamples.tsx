import * as React from 'react';
import {INavigationOwnProps, LoadingActions, NavigationConnected, turnOffLoading} from 'react-vapor';
import * as _ from 'underscore';

import {Store} from '../../Store';

const navigationConnectedExampleId = 'navigation-connected';
const navigationConnectedExampleLoadingIds = ['loading-' + navigationConnectedExampleId];

export class PaginationConnectedExamples extends React.PureComponent {
    static title: string = 'PaginationConnected';
    // Remove loading after a few seconds
    componentWillMount() {
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
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Pagination with Redux state and loading</label>
                    <NavigationConnected {...navigationProps} />
                </div>
            </div>
        );
    }
}
