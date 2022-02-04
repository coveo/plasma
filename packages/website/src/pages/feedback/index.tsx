import {ToastAction} from '@coveord/plasma-react';
import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {BadgeExamples} from './BadgeExamples';
import {ColorBarExamples} from './ColorBarExamples';
import {ColorDotsExamples} from './ColorDotExamples';
import {IconBadgeExamples} from './IconBadgeExamples';
import {LastUpdatedExamples} from './LastUpdatedExamples';
import {LoadingExamples} from './LoadingExamples';
import ProgressBarExamples from './ProgressBarExamples';
import {StatusCardExamples} from './StatusCardExamples';
import {StepProgressBarExamples} from './StepProgressBarExamples';
import {SyncFeedbackExample} from './SyncFeedbackExamples';
import {ToastConnectedExamples} from './ToastConnectedExamples';
import {ToastContentExample} from './ToastContentExamples';
import {ToastExamples} from './ToastExamples';
import {TooltipExamples} from './TooltipExamples';

export const FeedbackRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="Badge" element={<BadgeExamples />} />
        <Route path="ColorBar" element={<ColorBarExamples />} />
        <Route path="ColorDot" element={<ColorDotsExamples />} />
        <Route path="IconBadge" element={<IconBadgeExamples />} />
        <Route path="LastUpdated" element={<LastUpdatedExamples />} />
        <Route path="Loading" element={<LoadingExamples />} />
        <Route path="ProgressBar" element={<ProgressBarExamples />} />
        <Route path="StatusCard" element={<StatusCardExamples />} />
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
export default FeedbackRoutes;
