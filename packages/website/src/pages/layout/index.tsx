import * as React from 'react';
import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../NotFound';

import {ActionBarConnectedExamples} from './ActionBarConnectedExamples';
import {ActionBarExamples} from './ActionBarExamples';
import {BannerExamples} from './BannerExamples';
import {BlankSlateExample} from './BlankSlateExamples';
import {BorderedLineExamples} from './BorderedLineExamples';
import {CardExample} from './CardExamples';
import {FooterExample} from './FooterExamples';
import {IconCardExamples} from './IconCardExamples';
import {ModalWindowExamples} from './ModalWindowExamples';
import {ModalWizardExamples} from './ModalWizardExamples';
import {SimpleHeader} from './PageHeaderExamples';
import {SectionExamples} from './SectionExamples';
import {SplitLayoutExamples} from './SplitLayoutExamples';
import {TableHOCExamples} from './TableHOCExamples';
import {TableHocLoadingExamples} from './TableHOCLoadingExamples';
import {TableHOCServerExamples} from './TableHOCServerExamples';
import {TableHOCwithBlankSlateExamples} from './TableHOCwithBlankSlateExamples';
import {TabsConnectedExamples} from './TabsConnectedExamples';
import {TabsExamples} from './TabsExamples';

export const LayoutRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="ActionBar" element={<ActionBarExamples />} />
        <Route path="ActionBarConnected" element={<ActionBarConnectedExamples />} />
        <Route path="Banner" element={<BannerExamples />} />
        <Route path="BlankSlate" element={<BlankSlateExample />} />
        <Route path="BorderedLine" element={<BorderedLineExamples />} />
        <Route path="Card" element={<CardExample />} />
        <Route path="CommerceConfigCard" element={<div />} />
        <Route path="Divider" element={<div />} />
        <Route path="Footer" element={<FooterExample />} />
        <Route path="IconCard" element={<IconCardExamples />} />
        <Route path="ModalWindow" element={<ModalWindowExamples />} />
        <Route path="ModalWizard" element={<ModalWizardExamples />} />
        <Route path="PageHeader" element={<SimpleHeader />} />
        <Route path="SearchResultCard" element={<div />} />
        <Route path="Section" element={<SectionExamples />} />
        <Route path="SplitLayout" element={<SplitLayoutExamples />} />
        <Route path="Tabs" element={<TabsExamples />} />
        <Route path="TabsConnected" element={<TabsConnectedExamples />} />
        <Route path="TableHOC" element={<TableHOCExamples />} />
        <Route path="TableHOCwithBlankSlate" element={<TableHOCwithBlankSlateExamples />} />
        <Route path="TableHOCLoading" element={<TableHocLoadingExamples />} />
        <Route path="TableHOCServer" element={<TableHOCServerExamples />} />
        <Route path="TopBar" element={<div />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
