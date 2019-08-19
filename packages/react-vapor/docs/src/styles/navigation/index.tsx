import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import VaporComponent from '../demo-building-blocs/VaporComponent';
import NavigationComponent from './Navigation';
import NavigationLoading from './NavigationLoading';
import SubNavigation from './SubNavigation';

const Navigation: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/navigation`} component={NavigationComponent} />
            <Route path={`${match.url}/sub-navigation`} component={SubNavigation} />
            <Route path={`${match.url}/navigation-loading`} component={NavigationLoading} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/navigation`} />} />

            <VaporComponent
                id="navigation-loading"
                title="Navigation Loading"
                usage="A navigation loading used during the time the real navigation is shown."
                withSource
            >
                <NavigationLoading />
            </VaporComponent>
        </>
    );
};

export default Navigation;
