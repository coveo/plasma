import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import HeaderPanel from './HeaderPanel';
import HeaderSite from './HeaderSite';

const Headers: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/panel`} component={HeaderPanel} />
            <Route path={`${match.url}/site`} component={HeaderSite} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/panel`} />} />
        </>
    );
};

export default Headers;
