import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import {IconsList} from './pages/IconsList';
import {SvgExamples} from './pages/SvgExamples';
import {Typekit} from './pages/typekit';

export const FoundationsRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/Effects`} component={() => <div />} />
            <Route path={`${path}/Iconography`} component={() => <IconsList />} />
            <Route path={`${path}/SVG`} component={() => <SvgExamples />} />
            <Route path={`${path}/Illustration`} component={() => <div />} />
            <Route path={`${path}/Palette`} component={() => <div />} />
            {/* TODO: roll existing Typekit components... */}
            <Route path={`${path}/typekit`} component={() => <Typekit />} />
            {/* ...into new Typekit section */}
            <Route path={`${path}/Typekit`} component={() => <div />} />
        </Switch>
    );
};
