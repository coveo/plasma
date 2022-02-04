import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {BannerExamples} from './BannerExamples';
import {BlankSlateExample} from './BlankSlateExamples';
import {BorderedLineExamples} from './BorderedLineExamples';
import {BrowserPreviewExamples} from './BrowserPreviewExamples';
import {ChartExamples} from './ChartExamples';
import {CollapsibleExamples} from './CollapsibleExamples';
import {FooterExample} from './FooterExamples';
import {IconCardExamples} from './IconCardExamples';
import {InfoBoxExamples} from './InfoBoxExamples';
import {LabeledValueExamples} from './LabeledValueExamples';
import {LimitExamples} from './LimitExamples';
import {ModalWindowExamples} from './ModalWindowExamples';
import {ModalWizardExamples} from './ModalWizardExamples';
import {SimpleHeader} from './PageHeaderExamples';
import {SectionExamples} from './SectionExamples';
import {SplitLayoutExamples} from './SplitLayoutExamples';
import {TableHOCExamples} from './TableHOCExamples';
import {TableHocLoadingExamples} from './TableHOCLoadingExamples';
import {TableHOCServerExamples} from './TableHOCServerExamples';
import {TableHOCwithBlankSlateExamples} from './TableHOCwithBlankSlateExamples';

export const LayoutRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="Banner" element={<BannerExamples />} />
        <Route path="BlankSlate" element={<BlankSlateExample />} />
        <Route path="BorderedLine" element={<BorderedLineExamples />} />
        <Route path="BrowserPreview" element={<BrowserPreviewExamples />} />
        <Route path="Chart" element={<ChartExamples />} />
        <Route path="Collapsible" element={<CollapsibleExamples />} />
        <Route path="Footer" element={<FooterExample />} />
        <Route path="IconCard" element={<IconCardExamples />} />
        <Route path="InfoBox" element={<InfoBoxExamples />} />
        <Route path="LabeledValue" element={<LabeledValueExamples />} />
        <Route path="Limit" element={<LimitExamples />} />
        <Route path="ModalWindow" element={<ModalWindowExamples />} />
        <Route path="ModalWizard" element={<ModalWizardExamples />} />
        <Route path="PageHeader" element={<SimpleHeader />} />
        <Route path="Section" element={<SectionExamples />} />
        <Route path="SplitLayout" element={<SplitLayoutExamples />} />
        <Route path="TableHOC" element={<TableHOCExamples />} />
        <Route path="TableHOCwithBlankSlate" element={<TableHOCwithBlankSlateExamples />} />
        <Route path="TableHOCLoading" element={<TableHocLoadingExamples />} />
        <Route path="TableHOCServer" element={<TableHOCServerExamples />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
export default LayoutRoutes;
