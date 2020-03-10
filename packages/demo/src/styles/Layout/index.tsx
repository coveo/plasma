import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';
import SpacedBoxes from './SpacedBoxes';

const Layout: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/spaced-box`} component={SpacedBoxes} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/spaced-box`} />} />
    </>
);

export default Layout;
