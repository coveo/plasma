import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import {BrowserPreviewExamples} from './pages/BrowserPreviewExamples';
import {CardRoutes} from './pages/cards';
import {ChartExamples} from './pages/ChartExamples';
import {ColorBarExamples} from './pages/ColorBarExamples';
import {ColorDots} from './pages/ColorDot';
import {ColorPickerExamples} from './pages/ColorPickerExamples';
import {Cursor} from './pages/Cursor';
import {FacetConnectedExamples} from './pages/FacetConnectedExamples';
import {IconBadgeExamples} from './pages/IconBadgeExamples';
import {InputExamples} from './pages/InputExamples';
import {ItemFilterConnectedExamples} from './pages/ItemFilterConnectedExamples';
import {ItemFilterExamples} from './pages/ItemFilterExamples';
import {LabeledValueExamples} from './pages/LabeledValueExamples';
import {LastUpdatedConnectedExamples} from './pages/LastUpdatedConnectedExamples';
import {LastUpdatedExamples} from './pages/LastUpdatedExamples';
import {LinkSvgExamples} from './pages/LinkSvgExamples';
import {ListBoxExamples} from './pages/ListBoxExamples';
import {Member} from './pages/Member';
import {PaginationConnectedExamples} from './pages/PaginationConnectedExamples';
import {PartialStringMatchExamples} from './pages/PartialStringMatchExamples';
import {RefreshExamples} from './pages/RefreshExamples';
import {SeparatorExamples} from './pages/SeparatorExamples';
import {SideNavigationLoadingExample} from './pages/SideNavigationLoadingExample';
import {SlideYExamples} from './pages/SlideYExamples';
import {SpacedBoxes} from './pages/SpacedBoxes';
import {SvgExamples} from './pages/SvgExamples';
import {TransparencyExamples} from './pages/transparency';

/**
 * The aim of this component is to temporaily hold all the routes that haven't
 * been determined a place in the app yet. This component, and all of its
 * routes, are temporary
 */
export const NotIncludedRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/BrowserPreview`} component={() => <BrowserPreviewExamples />} />
            <Route path={`${path}/cards`} component={() => <CardRoutes />} />
            <Route path={`${path}/Chart`} component={() => <ChartExamples />} />
            <Route path={`${path}/ColorDots`} component={() => <ColorDots />} />
            <Route path={`${path}/ColorBar`} component={() => <ColorBarExamples />} />
            <Route path={`${path}/ColorPicker`} component={() => <ColorPickerExamples />} />
            <Route path={`${path}/Cursor`} component={() => <Cursor />} />
            <Route path={`${path}/FacetConnected`} component={() => <FacetConnectedExamples />} />
            <Route path={`${path}/IconBadge`} component={() => <IconBadgeExamples />} />
            <Route path={`${path}/InputExamples`} component={() => <InputExamples />} />
            <Route path={`${path}/ItemFilter`} component={() => <ItemFilterExamples />} />
            <Route path={`${path}/ItemFilterConnected`} component={() => <ItemFilterConnectedExamples />} />
            <Route path={`${path}/LabeledValue`} component={() => <LabeledValueExamples />} />
            <Route path={`${path}/LastUpdated`} component={() => <LastUpdatedExamples />} />
            <Route path={`${path}/LastUpdatedConnected`} component={() => <LastUpdatedConnectedExamples />} />
            <Route path={`${path}/LinkSvg`} component={() => <LinkSvgExamples />} />
            <Route path={`${path}/ListBox`} component={() => <ListBoxExamples />} />
            <Route path={`${path}/Member`} component={() => <Member />} />
            <Route path={`${path}/PaginationConnected`} component={() => <PaginationConnectedExamples />} />
            <Route path={`${path}/PartialstringMatch`} component={() => <PartialStringMatchExamples />} />
            <Route path={`${path}/Refresh`} component={() => <RefreshExamples />} />
            <Route path={`${path}/Separator`} component={() => <SeparatorExamples />} />
            <Route path={`${path}/SidenavigationLoading`} component={() => <SideNavigationLoadingExample />} />
            <Route path={`${path}/Slidey`} component={() => <SlideYExamples />} />
            <Route path={`${path}/SpacedBox`} component={() => <SpacedBoxes />} />
            <Route path={`${path}/SVG`} component={() => <SvgExamples />} />
            <Route path={`${path}/Transparency`} component={() => <TransparencyExamples />} />
        </Switch>
    );
};
