import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {BrowserPreviewExamples} from './BrowserPreviewExamples';
import {CardRoutes} from './cards';
import {ChartExamples} from './ChartExamples';
import {ColorBarExamples} from './ColorBarExamples';
import {ColorDots} from './ColorDotExamples';
import {ColorPickerExamples} from './ColorPickerExamples';
import {Cursor} from './CursorExamples';
import {FacetConnectedExamples} from './FacetConnectedExamples';
import {IconBadgeExamples} from './IconBadgeExamples';
import {InputExamples} from './InputExamples';
import {ItemFilterConnectedExamples} from './ItemFilterConnectedExamples';
import {ItemFilterExamples} from './ItemFilterExamples';
import {LabeledValueExamples} from './LabeledValueExamples';
import {LastUpdatedConnectedExamples} from './LastUpdatedConnectedExamples';
import {LastUpdatedExamples} from './LastUpdatedExamples';
import {LinkSvgExamples} from './LinkSvgExamples';
import {ListBoxExamples} from './ListBoxExamples';
import {Member} from './MemberExamples';
import {PaginationConnectedExamples} from './PaginationConnectedExamples';
import {PartialStringMatchExamples} from './PartialStringMatchExamples';
import {RefreshExamples} from './RefreshExamples';
import {SeparatorExamples} from './SeparatorExamples';
import {SideNavigationLoadingExample} from './SideNavigationLoadingExamples';
import {SlideYExamples} from './SlideYExamples';
import {SpacedBox} from './SpacedBoxExamples';
import {TransparencyExamples} from './transparencyExamples';

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
