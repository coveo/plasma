import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Alignment from './Alignment';
import AppendPrepend from './AppendPrepend';
import Base from './Base';
import ColorModifiers from './ColorModifiers';
import Overview from './Overview';
import SizeModifiers from './SizeModifiers';

const Buttons: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/overview`} component={Overview} />
            <Route path={`${match.url}/base`} component={Base} />
            <Route path={`${match.url}/color-modifiers`} component={ColorModifiers} />
            <Route path={`${match.url}/size-modifiers`} component={SizeModifiers} />
            <Route path={`${match.url}/append-prepend`} component={AppendPrepend} />
            <Route path={`${match.url}/alignment`} component={Alignment} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/overview`} />} />
        </>
    );
};

export default Buttons;
