import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {ToastAction} from 'react-vapor';

import {ActionBarConnectedExamples} from './pages/ActionBarConnectedExamples';
import {BlankSlateExample} from './pages/BlankSlateExample';
import {BrowserPreviewExamples} from './pages/BrowserPreviewExamples';
import {CardRoutes} from './pages/cards';
import {ChartExamples} from './pages/ChartExamples';
import {ColorBarExamples} from './pages/ColorBarExamples';
import {ColorDots} from './pages/ColorDot';
import {ColorPickerExamples} from './pages/ColorPickerExamples';
import {Cursor} from './pages/Cursor';
import {DatePickerExamples} from './pages/DatePickerExamples';
import {FacetConnectedExamples} from './pages/FacetConnectedExamples';
import {FilepickerExamples} from './pages/FilepickerExamples';
import {FooterExample} from './pages/FooterExample';
import {IconBadgeExamples} from './pages/IconBadgeExamples';
import {ItemFilterConnectedExamples} from './pages/ItemFilterConnectedExamples';
import {ItemFilterExamples} from './pages/ItemFilterExamples';
import {JSONEditorExamples} from './pages/JSONEditorExamples';
import {LabeledValueExamples} from './pages/LabeledValueExamples';
import {LastUpdatedConnectedExamples} from './pages/LastUpdatedConnectedExamples';
import {LastUpdatedExamples} from './pages/LastUpdatedExamples';
import {LinkSvgExamples} from './pages/LinkSvgExamples';
import {ListBoxExamples} from './pages/ListBoxExamples';
import {Member} from './pages/Member';
import {ModalWizardExamples} from './pages/ModalWizardExamples';
import {MultiSelectExamples} from './pages/MultiSelectExamples';
import {PaginationConnectedExamples} from './pages/PaginationConnectedExamples';
import {PartialStringMatchExamples} from './pages/PartialStringMatchExamples';
import {PopoverExample} from './pages/PopoverConnectedExamples';
import {RefreshExamples} from './pages/RefreshExamples';
import {SectionExamples} from './pages/SectionExamples';
import {SeparatorExamples} from './pages/SeparatorExamples';
import {SideNavigationLoadingExample} from './pages/SideNavigationLoadingExample';
import {SlideYExamples} from './pages/SlideYExamples';
import {SpacedBoxes} from './pages/SpacedBoxes';
import {SvgExamples} from './pages/SvgExamples';
import {TabsConnectedExamples} from './pages/TabConnectedExample';
import {TableHocLoadingExamples} from './pages/TableHOCLoadingExamples';
import {TableHOCServerExamples} from './pages/TableHOCServerExamples';
import {TableHOCwithBlankSlateExamples} from './pages/TableHOCwithBlankSlateExamples';
import {TextAreaExamples} from './pages/TextAreaExamples';
import {ToastConnectedExamples} from './pages/ToastConnectedExamples';
import {ToastContentExample} from './pages/ToastContentExample';
import {TransparencyExamples} from './pages/transparency';
import {Typekit} from './pages/typekit';

/**
 * The aim of this component is to temporaily hold all the routes that haven't
 * been determined a place in the app yet. This component, and all of its
 * routes, are temporary
 */
export const NotIncludedRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/ActionBarConnected`} component={() => <ActionBarConnectedExamples />} />
            <Route path={`${path}/BlankSlate`} component={() => <BlankSlateExample />} />
            <Route path={`${path}/BrowserPreview`} component={() => <BrowserPreviewExamples />} />
            <Route path={`${path}/cards`} component={() => <CardRoutes />} />
            <Route path={`${path}/Chart`} component={() => <ChartExamples />} />
            <Route path={`${path}/ColorDots`} component={() => <ColorDots />} />
            <Route path={`${path}/ColorBar`} component={() => <ColorBarExamples />} />
            <Route path={`${path}/ColorPicker`} component={() => <ColorPickerExamples />} />
            <Route path={`${path}/Cursor`} component={() => <Cursor />} />
            <Route path={`${path}/DatePicker`} component={() => <DatePickerExamples />} />
            <Route path={`${path}/FacetConnected`} component={() => <FacetConnectedExamples />} />
            <Route path={`${path}/Filepicker`} component={() => <FilepickerExamples />} />
            <Route path={`${path}/Footer`} component={() => <FooterExample />} />
            <Route path={`${path}/IconBadge`} component={() => <IconBadgeExamples />} />
            <Route path={`${path}/ItemFilter`} component={() => <ItemFilterExamples />} />
            <Route path={`${path}/ItemFilterConnected`} component={() => <ItemFilterConnectedExamples />} />
            <Route path={`${path}/JSONEditor`} component={() => <JSONEditorExamples />} />
            <Route path={`${path}/LabeledValue`} component={() => <LabeledValueExamples />} />
            <Route path={`${path}/LastUpdated`} component={() => <LastUpdatedExamples />} />
            <Route path={`${path}/LastUpdatedConnected`} component={() => <LastUpdatedConnectedExamples />} />
            <Route path={`${path}/LinkSvg`} component={() => <LinkSvgExamples />} />
            <Route path={`${path}/ListBox`} component={() => <ListBoxExamples />} />
            <Route path={`${path}/Member`} component={() => <Member />} />
            <Route path={`${path}/ModalWizard`} component={() => <ModalWizardExamples />} />
            {/* MultiSelectExamples is trickier to convert to Function component */}
            <Route path={`${path}/MultiSelect`} component={MultiSelectExamples} />
            <Route path={`${path}/PaginationConnected`} component={() => <PaginationConnectedExamples />} />
            <Route path={`${path}/PartialstringMatch`} component={() => <PartialStringMatchExamples />} />
            <Route path={`${path}/Popover`} component={() => <PopoverExample />} />
            <Route path={`${path}/Refresh`} component={() => <RefreshExamples />} />
            <Route path={`${path}/Section`} component={() => <SectionExamples />} />
            <Route path={`${path}/Separator`} component={() => <SeparatorExamples />} />
            <Route path={`${path}/SidenavigationLoading`} component={() => <SideNavigationLoadingExample />} />
            <Route path={`${path}/Slidey`} component={() => <SlideYExamples />} />
            <Route path={`${path}/SpacedBox`} component={() => <SpacedBoxes />} />
            <Route path={`${path}/SVG`} component={() => <SvgExamples />} />
            <Route path={`${path}/TableHOCwithBlankSlate`} component={() => <TableHOCwithBlankSlateExamples />} />
            <Route path={`${path}/TableHOCLoading`} component={() => <TableHocLoadingExamples />} />
            <Route path={`${path}/TableHOCServer`} component={() => <TableHOCServerExamples />} />
            <Route path={`${path}/TabsConnected`} component={() => <TabsConnectedExamples />} />
            <Route path={`${path}/TextArea`} component={() => <TextAreaExamples />} />
            <Route
                path={`${path}/ToastConnected`}
                // this is just to get the demo working
                component={() => <ToastConnectedExamples addToast={() => ({type: ToastAction.addToast})} />}
            />
            <Route path={`${path}/ToastContent`} component={() => <ToastContentExample />} />
            <Route path={`${path}/Transparency`} component={() => <TransparencyExamples />} />
            <Route path={`${path}/typekit`} component={() => <Typekit />} />
        </Switch>
    );
};
