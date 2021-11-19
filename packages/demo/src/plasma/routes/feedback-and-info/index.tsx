import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

export const FeedbackAndInfoRoutes: React.FunctionComponent = () => (
    <Switch>
        <Route path="/Badge" component={() => <div />} />
        <Route path="/InfoToken" component={() => <div />} />
        <Route path="/InfoBox" component={() => <div />} />
        <Route path="/Limit" component={() => <div />} />
        <Route path="/Prompt" component={() => <div />} />
        <Route path="/Loading" component={() => <div />} />
        <Route path="/progress-bar" component={() => <div />} />
        <Route path="/StatusCard" component={() => <div />} />
        <Route path="/StatusToken" component={() => <div />} />
        <Route path="/StatusWidget" component={() => <div />} />
        <Route path="/StepProgressBar" component={() => <div />} />
        <Route path="/SyncFeedback" component={() => <div />} />
        <Route path="/Toast" component={() => <div />} />
        <Route path="/Tooltip" component={() => <div />} />
    </Switch>
);
