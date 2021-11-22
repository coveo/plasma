import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import {ActionBarExamples} from './pages/ActionBarExamples';
import {BannerExamples} from './pages/BannerExamples';
import {BorderedLineExamples} from './pages/BorderedLineExamples';
import {CardExample} from './pages/CardExamples';
import {IconCardExamples} from './pages/IconCardExamples';
import {ModalWindowExamples} from './pages/modalWindowExamples';
import {SimpleHeader} from './pages/PageHeader';
import {SplitLayoutExamples} from './pages/SplitLayoutExamples';
import {TableHOCExamples} from './pages/TableHOCExamples';

export const LayoutRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/ActionBar`} component={() => <ActionBarExamples />} />
            <Route path={`${path}/Banner`} component={() => <BannerExamples />} />
            <Route path={`${path}/BorderedLine`} component={() => <BorderedLineExamples />} />
            <Route path={`${path}/Card`} component={() => <CardExample />} />
            <Route path={`${path}/CommerceConfigCard`} component={() => <div />} />
            <Route path={`${path}/Divider`} component={() => <div />} />
            <Route path={`${path}/IconCard`} component={() => <IconCardExamples />} />
            <Route path={`${path}/ModalWindow`} component={() => <ModalWindowExamples />} />
            <Route path={`${path}/PageHeader`} component={() => <SimpleHeader />} />
            <Route path={`${path}/SearchResultCard`} component={() => <div />} />
            <Route path={`${path}/SplitLayout`} component={() => <SplitLayoutExamples />} />
            <Route path={`${path}/TableHOC`} component={() => <TableHOCExamples />} />
            <Route path={`${path}/TopBar`} component={() => <div />} />
        </Switch>
    );
};
