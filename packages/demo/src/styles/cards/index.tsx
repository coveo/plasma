import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Card from './Card';
import Home from './Home';
import Material from './Material';
import Wizard from './Wizard';

const Cards: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/card`} component={Card} />
        <Route path={`${match.url}/home`} component={Home} />
        <Route path={`${match.url}/material`} component={Material} />
        <Route path={`${match.url}/wizard`} component={Wizard} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/card`} />} />
    </>
);

export default Cards;
