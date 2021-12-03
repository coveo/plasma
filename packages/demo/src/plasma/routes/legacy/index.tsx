import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../../NotFound';
import {BrowserPreviewExamples} from './pages/BrowserPreviewExamples';
import {CardRoutes} from './pages/cards';
import {ChartExamples} from './pages/ChartExamples';
import {ColorBarExamples} from './pages/ColorBarExamples';
import {ColorDots} from './pages/ColorDotExamples';
import {ColorPickerExamples} from './pages/ColorPickerExamples';
import {Cursor} from './pages/CursorExamples';
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
import {Member} from './pages/MemberExamples';
import {PaginationConnectedExamples} from './pages/PaginationConnectedExamples';
import {PartialStringMatchExamples} from './pages/PartialStringMatchExamples';
import {RefreshExamples} from './pages/RefreshExamples';
import {SeparatorExamples} from './pages/SeparatorExamples';
import {SideNavigationLoadingExample} from './pages/SideNavigationLoadingExamples';
import {SlideYExamples} from './pages/SlideYExamples';
import {SpacedBox} from './pages/SpacedBoxExamples';
import {TransparencyExamples} from './pages/transparencyExamples';

/**
 * The aim of this component is to temporaily hold all the routes that haven't
 * been determined a place in the app yet. This component, and all of its
 * routes, are temporary
 */
export const NotIncludedRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="BrowserPreview" element={<BrowserPreviewExamples />} />
        <Route path="cards/*" element={<CardRoutes />} />
        <Route path="Chart" element={<ChartExamples />} />
        <Route path="ColorDot" element={<ColorDots />} />
        <Route path="ColorBar" element={<ColorBarExamples />} />
        <Route path="ColorPicker" element={<ColorPickerExamples />} />
        <Route path="Cursor" element={<Cursor />} />
        <Route path="FacetConnected" element={<FacetConnectedExamples />} />
        <Route path="IconBadge" element={<IconBadgeExamples />} />
        <Route path="Input" element={<InputExamples />} />
        <Route path="ItemFilter" element={<ItemFilterExamples />} />
        <Route path="ItemFilterConnected" element={<ItemFilterConnectedExamples />} />
        <Route path="LabeledValue" element={<LabeledValueExamples />} />
        <Route path="LastUpdated" element={<LastUpdatedExamples />} />
        <Route path="LastUpdatedConnected" element={<LastUpdatedConnectedExamples />} />
        <Route path="LinkSvg" element={<LinkSvgExamples />} />
        <Route path="ListBox" element={<ListBoxExamples />} />
        <Route path="Member" element={<Member />} />
        <Route path="PaginationConnected" element={<PaginationConnectedExamples />} />
        <Route path="PartialstringMatch" element={<PartialStringMatchExamples />} />
        <Route path="Refresh" element={<RefreshExamples />} />
        <Route path="Separator" element={<SeparatorExamples />} />
        <Route path="SideNavigationLoading" element={<SideNavigationLoadingExample />} />
        <Route path="SlideY" element={<SlideYExamples />} />
        <Route path="SpacedBox" element={<SpacedBox />} />
        <Route path="Transparency" element={<TransparencyExamples />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
