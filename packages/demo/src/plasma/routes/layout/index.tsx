import * as React from 'react';
import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../../NotFound';

import {ActionBarConnectedExamples} from './pages/ActionBarConnectedExamples';
import {ActionBarExamples} from './pages/ActionBarExamples';
import {BannerExamples} from './pages/BannerExamples';
import {BlankSlateExample} from './pages/BlankSlateExamples';
import {BorderedLineExamples} from './pages/BorderedLineExamples';
import {CardExample} from './pages/CardExamples';
import {FooterExample} from './pages/FooterExamples';
import {IconCardExamples} from './pages/IconCardExamples';
import {ModalWindowExamples} from './pages/ModalWindowExamples';
import {ModalWizardExamples} from './pages/ModalWizardExamples';
import {SimpleHeader} from './pages/PageHeaderExamples';
import {SectionExamples} from './pages/SectionExamples';
import {SplitLayoutExamples} from './pages/SplitLayoutExamples';
import {TableHOCExamples} from './pages/TableHOCExamples';
import {TableHocLoadingExamples} from './pages/TableHOCLoadingExamples';
import {TableHOCServerExamples} from './pages/TableHOCServerExamples';
import {TableHOCwithBlankSlateExamples} from './pages/TableHOCwithBlankSlateExamples';
import {TabsConnectedExamples} from './pages/TabsConnectedExamples';
import {TabsExamples} from './pages/TabsExamples';

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
