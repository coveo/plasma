import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

export const FoundationsRoutes: React.FunctionComponent = () => (
    <Switch>
        <Route exact path="/Effects" component={() => <div />} />
        <Route exact path="/Iconography" component={() => <div />} />
        <Route exact path="/Illustration" component={() => <div />} />
        <Route exact path="/Palette" component={() => <div />} />
        <Route exact path="/Typekit" component={() => <div />} />
    </Switch>
);
