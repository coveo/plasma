import * as React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ToastAction} from '@coveord/plasma-react';

import {NotFound} from '../../NotFound';
import {BadgeExamples} from './pages/BadgeExamples';
import {FeedbackExamples} from './pages/FeedbackExamples';
import {InfoBoxExamples} from './pages/InfoBoxExamples';
import {InfoTokenExamples} from './pages/InfoTokenExamples';
import {LimitExamples} from './pages/LimitExamples';
import {LoadingExamples} from './pages/LoadingExamples';
import {PopoverExample} from './pages/PopoverExamples';
import ProgressBar from './pages/ProgressBarExamples';
import {StatusCardExamples} from './pages/StatusCardExamples';
import {StepProgressBarExamples} from './pages/StepProgressBarExamples';
import {SyncFeedbackExample} from './pages/SyncFeedbackExamples';
import {ToastConnectedExamples} from './pages/ToastConnectedExamples';
import {ToastContentExample} from './pages/ToastContentExamples';
import {ToastExamples} from './pages/ToastExamples';
import {TooltipExamples} from './pages/TooltipExamples';

export const FeedbackAndInfoRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="Badge" element={<BadgeExamples />} />
        <Route path="Feedback" element={<FeedbackExamples />} />
        <Route path="InfoToken" element={<InfoTokenExamples />} />
        <Route path="InfoBox" element={<InfoBoxExamples />} />
        <Route path="Limit" element={<LimitExamples />} />
        <Route path="Loading" element={<LoadingExamples />} />
        <Route path="Popover" element={<PopoverExample />} />
        <Route path="ProgressBar" element={<ProgressBar />} />
        <Route path="Prompt" element={<div />} />
        <Route path="StatusCard" element={<StatusCardExamples />} />
        <Route path="StatusToken" element={<div />} />
        <Route path="StatusWidget" element={<div />} />
        <Route path="StepProgressBar" element={<StepProgressBarExamples />} />
        <Route path="SyncFeedback" element={<SyncFeedbackExample />} />
        <Route path="Toast" element={<ToastExamples />} />
        <Route
            path="ToastConnected"
            // this is just to get the demo working
            element={<ToastConnectedExamples addToast={() => ({type: ToastAction.addToast})} />}
        />
        <Route path="ToastContent" element={<ToastContentExample />} />
        <Route path="Tooltip" element={<TooltipExamples />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
