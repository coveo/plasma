import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Home from './Home';
import Limit from './Limit';
import Material from './Material';
import Wizard from './Wizard';

const Cards: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/home`} component={Home} />
        <Route path={`${match.url}/limit`} component={Limit} />
        <Route path={`${match.url}/material`} component={Material} />
        <Route path={`${match.url}/wizard`} component={Wizard} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/flippable`} />} />
    </>
);

export default Cards;
