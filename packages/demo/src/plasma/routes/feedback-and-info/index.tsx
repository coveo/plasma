import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {ToastAction} from 'react-vapor';

import {BadgeExamples} from './pages/BadgeExamples';
import {InfoBoxExamples} from './pages/InfoBoxExamples';
import {InfoTokenExamples} from './pages/InfoTokenExamples';
import {LimitExamples} from './pages/LimitExamples';
import {LoadingExamples} from './pages/LoadingExamples';
import {PopoverExample} from './pages/PopoverConnectedExamples';
import ProgressBar from './pages/ProgressBar';
import {StatusCardExamples} from './pages/StatusCardExamples';
import {StepProgressBarExamples} from './pages/StepProgressBarExamples';
import {SyncFeedbackExample} from './pages/SyncFeedbackExample';
import {ToastConnectedExamples} from './pages/ToastConnectedExamples';
import {ToastContentExample} from './pages/ToastContentExample';
import {ToastExamples} from './pages/ToastExamples';
import {TooltipExamples} from './pages/TooltipExamples';

export const FeedbackAndInfoRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/Badge`} component={() => <BadgeExamples />} />
            <Route path={`${path}/InfoToken`} component={() => <InfoTokenExamples />} />
            <Route path={`${path}/InfoBox`} component={() => <InfoBoxExamples />} />
            <Route path={`${path}/Limit`} component={() => <LimitExamples />} />
            <Route path={`${path}/Loading`} component={() => <LoadingExamples />} />
            <Route path={`${path}/Popover`} component={() => <PopoverExample />} />
            <Route path={`${path}/ProgressBar`} component={() => <ProgressBar />} />
            <Route path={`${path}/Prompt`} component={() => <div />} />
            <Route path={`${path}/StatusCard`} component={() => <StatusCardExamples />} />
            <Route path={`${path}/StatusToken`} component={() => <div />} />
            <Route path={`${path}/StatusWidget`} component={() => <div />} />
            <Route path={`${path}/StepProgressBar`} component={() => <StepProgressBarExamples />} />
            <Route path={`${path}/SyncFeedback`} component={() => <SyncFeedbackExample />} />
            <Route path={`${path}/Toast`} component={() => <ToastExamples />} />
            <Route
                path={`${path}/ToastConnected`}
                // this is just to get the demo working
                component={() => <ToastConnectedExamples addToast={() => ({type: ToastAction.addToast})} />}
            />
            <Route path={`${path}/ToastContent`} component={() => <ToastContentExample />} />
            <Route path={`${path}/Tooltip`} component={() => <TooltipExamples />} />
        </Switch>
    );
};
