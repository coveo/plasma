import * as React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';

import {Headings} from './Headings';
import {IconColor} from './IconColor';
import {LineHeight} from './LineHeight';
import {Links} from './Links';
import {Lists} from './Lists';
import {TextColor} from './TextColor';
import {Utilities} from './Utilities';
import {Whitespace} from './Whitespace';

export const Typekit: React.FunctionComponent = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/Headings`} component={Headings} />
            <Route path={`${path}/IconColors`} component={IconColor} />
            <Route path={`${path}/LineHeight`} component={LineHeight} />
            <Route path={`${path}/Links`} component={Links} />
            <Route path={`${path}/Lists`} component={Lists} />
            <Route path={`${path}/TextColors`} component={TextColor} />
            <Route path={`${path}/Utilities`} component={Utilities} />
            <Route path={`${path}/Whitespace`} component={Whitespace} />
            <Route exact path={`${path}/`} component={() => <Redirect to={`${path}/Headings`} />} />
        </Switch>
    );
};
