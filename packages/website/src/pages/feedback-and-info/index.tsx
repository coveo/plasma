import * as React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ToastAction} from '@coveord/plasma-react';

import {NotFound} from '../NotFound';
import {BadgeExamples} from './BadgeExamples';
import {FeedbackExamples} from './FeedbackExamples';
import {InfoBoxExamples} from './InfoBoxExamples';
import {InfoTokenExamples} from './InfoTokenExamples';
import {LimitExamples} from './LimitExamples';
import {LoadingExamples} from './LoadingExamples';
import {PopoverExample} from './PopoverExamples';
import ProgressBar from './ProgressBarExamples';
import {StatusCardExamples} from './StatusCardExamples';
import {StepProgressBarExamples} from './StepProgressBarExamples';
import {SyncFeedbackExample} from './SyncFeedbackExamples';
import {ToastConnectedExamples} from './ToastConnectedExamples';
import {ToastContentExample} from './ToastContentExamples';
import {ToastExamples} from './ToastExamples';
import {TooltipExamples} from './TooltipExamples';

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
