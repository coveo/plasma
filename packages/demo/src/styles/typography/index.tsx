import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Headings from './Headings';
import Links from './Links';
import Lists from './Lists';
import Utilities from './Utilities';

const Typography: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/headings`} component={Headings} />
        <Route path={`${match.url}/utilities`} component={Utilities} />
        <Route path={`${match.url}/lists`} component={Lists} />
        <Route path={`${match.url}/links`} component={Links} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/headings`} />} />
    </>
);

export default Typography;
