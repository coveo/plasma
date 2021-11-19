import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

export const LayoutRoutes: React.FunctionComponent = () => (
    <Switch>
        <Route exact path="/ActionBar" component={() => <div />} />
        <Route exact path="/Banner" component={() => <div />} />
        <Route exact path="/BorderedLine" component={() => <div />} />
        <Route exact path="/Card" component={() => <div />} />
        <Route exact path="/CommerceConfigCard" component={() => <div />} />
        <Route exact path="/Divider" component={() => <div />} />
        <Route exact path="/IconCard" component={() => <div />} />
        <Route exact path="/ModalWindow" component={() => <div />} />
        <Route exact path="/PageHeader" component={() => <div />} />
        <Route exact path="/TopBar" component={() => <div />} />
        <Route exact path="/SearchResultCard" component={() => <div />} />
        <Route exact path="/SplitLayout" component={() => <div />} />
        <Route exact path="/TableHOC" component={() => <div />} />
    </Switch>
);
