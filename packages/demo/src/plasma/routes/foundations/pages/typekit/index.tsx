import * as React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';

import {Headings} from './HeadingsExamples';
import {IconColor} from './IconColorExamples';
import {LineHeight} from './LineHeightExamples';
import {Links} from './LinksExamples';
import {Lists} from './ListsExamples';
import {TextColor} from './TextColorExamples';
import {Utilities} from './UtilitiesExamples';
import {Whitespace} from './WhitespaceExamples';

export const Typekit: React.FunctionComponent = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/Headings`} component={Headings} />
            <Route path={`${path}/IconColor`} component={IconColor} />
            <Route path={`${path}/LineHeight`} component={LineHeight} />
            <Route path={`${path}/Links`} component={Links} />
            <Route path={`${path}/Lists`} component={Lists} />
            <Route path={`${path}/TextColor`} component={TextColor} />
            <Route path={`${path}/Utilities`} component={Utilities} />
            <Route path={`${path}/Whitespace`} component={Whitespace} />
            <Route exact path={`${path}/`} component={() => <Redirect to={`${path}/Headings`} />} />
        </Switch>
    );
};
