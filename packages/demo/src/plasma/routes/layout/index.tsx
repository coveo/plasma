import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import {ActionBarConnectedExamples} from './pages/ActionBarConnectedExamples';
import {ActionBarExamples} from './pages/ActionBarExamples';
import {BannerExamples} from './pages/BannerExamples';
import {BlankSlateExample} from './pages/BlankSlateExample';
import {BorderedLineExamples} from './pages/BorderedLineExamples';
import {CardExample} from './pages/CardExamples';
import {FooterExample} from './pages/FooterExample';
import {IconCardExamples} from './pages/IconCardExamples';
import {ModalWindowExamples} from './pages/ModalWindowExamples';
import {SimpleHeader} from './pages/PageHeader';
import {SectionExamples} from './pages/SectionExamples';
import {SplitLayoutExamples} from './pages/SplitLayoutExamples';
import {TabsConnectedExamples} from './pages/TabConnectedExample';
import {TabsExamples} from './pages/TabsExamples';
import {TableHOCExamples} from './pages/TableHOCExamples';
import {TableHocLoadingExamples} from './pages/TableHOCLoadingExamples';
import {TableHOCServerExamples} from './pages/TableHOCServerExamples';
import {TableHOCwithBlankSlateExamples} from './pages/TableHOCwithBlankSlateExamples';
import {ModalWizardExamples} from './pages/ModalWizardExamples';

export const LayoutRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/ActionBar`} component={() => <ActionBarExamples />} />
            <Route path={`${path}/ActionBarConnected`} component={() => <ActionBarConnectedExamples />} />
            <Route path={`${path}/Banner`} component={() => <BannerExamples />} />
            <Route path={`${path}/BlankSlate`} component={() => <BlankSlateExample />} />
            <Route path={`${path}/BorderedLine`} component={() => <BorderedLineExamples />} />
            <Route path={`${path}/Card`} component={() => <CardExample />} />
            <Route path={`${path}/CommerceConfigCard`} component={() => <div />} />
            <Route path={`${path}/Divider`} component={() => <div />} />
            <Route path={`${path}/Footer`} component={() => <FooterExample />} />
            <Route path={`${path}/IconCard`} component={() => <IconCardExamples />} />
            <Route path={`${path}/ModalWindow`} component={() => <ModalWindowExamples />} />
            <Route path={`${path}/ModalWizard`} component={() => <ModalWizardExamples />} />
            <Route path={`${path}/PageHeader`} component={() => <SimpleHeader />} />
            <Route path={`${path}/SearchResultCard`} component={() => <div />} />
            <Route path={`${path}/Section`} component={() => <SectionExamples />} />
            <Route path={`${path}/SplitLayout`} component={() => <SplitLayoutExamples />} />
            <Route path={`${path}/Tabs`} component={() => <TabsExamples />} />
            <Route path={`${path}/TabsConnected`} component={() => <TabsConnectedExamples />} />
            <Route path={`${path}/TableHOC`} component={() => <TableHOCExamples />} />
            <Route path={`${path}/TableHOCwithBlankSlate`} component={() => <TableHOCwithBlankSlateExamples />} />
            <Route path={`${path}/TableHOCLoading`} component={() => <TableHocLoadingExamples />} />
            <Route path={`${path}/TableHOCServer`} component={() => <TableHOCServerExamples />} />
            <Route path={`${path}/TopBar`} component={() => <div />} />
        </Switch>
    );
};
