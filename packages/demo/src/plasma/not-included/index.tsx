import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

export const NotIncludedRoutes: React.FunctionComponent = () => (
    <Switch>
        <Route path="/ActionBarConnected" component={() => <div />} />
        <Route path="/BlankSlate" component={() => <div />} />
        <Route path="/BrowserPreview" component={() => <div />} />
        <Route path="/cards/home" component={() => <div />} />
        <Route path="/cards/material" component={() => <div />} />
        <Route path="/cards/wizard" component={() => <div />} />
        <Route path="/Chart" component={() => <div />} />
        <Route path="/ColorDots" component={() => <div />} />
        <Route path="/ColorBar" component={() => <div />} />
        <Route path="/ColorPicker" component={() => <div />} />
        <Route path="/Cursor" component={() => <div />} />
        <Route path="/DatePicker" component={() => <div />} />
        <Route path="/FacetConnected" component={() => <div />} />
        <Route path="/Filepicker" component={() => <div />} />
        <Route path="/Footer" component={() => <div />} />
        <Route path="/IconBadge" component={() => <div />} />
        <Route path="/ItemFilter" component={() => <div />} />
        <Route path="/ItemFilterConnected" component={() => <div />} />
        <Route path="/JSONEditor" component={() => <div />} />
        <Route path="/LabeledValue" component={() => <div />} />
        <Route path="/LastUpdated" component={() => <div />} />
        <Route path="/LastUpdatedConnected" component={() => <div />} />
        <Route path="/LinkSvg" component={() => <div />} />
        <Route path="/ListBox" component={() => <div />} />
        <Route path="/Member" component={() => <div />} />
        <Route path="/ModalWizard" component={() => <div />} />
        <Route path="/MultiSelect" component={() => <div />} />
        <Route path="/PaginationConnected" component={() => <div />} />
        <Route path="/PartialstringMatch" component={() => <div />} />
        <Route path="/Popover" component={() => <div />} />
        <Route path="/Refresh" component={() => <div />} />
        <Route path="/Section" component={() => <div />} />
        <Route path="/Separator" component={() => <div />} />
        <Route path="/SidenavigationLoading" component={() => <div />} />
        <Route path="/Slidey" component={() => <div />} />
        <Route path="/SpacedBox" component={() => <div />} />
        <Route path="/SVG" component={() => <div />} />
        <Route path="/TableHOCwithBlankSlate" component={() => <div />} />
        <Route path="/TableHOCLoading" component={() => <div />} />
        <Route path="/TableHOCServer" component={() => <div />} />
        <Route path="/TabsConnected" component={() => <div />} />
        <Route path="/TextArea" component={() => <div />} />
        <Route path="/ToastConnected" component={() => <div />} />
        <Route path="/ToastContent" component={() => <div />} />
        <Route path="/transparency" component={() => <div />} />
        <Route path="/typography/headings" component={() => <div />} />
        <Route path="/utility/icon-colors" component={() => <div />} />
        <Route path="/typography/lists" component={() => <div />} />
        <Route path="/utility/text-colors" component={() => <div />} />
        <Route path="/utility/line-height" component={() => <div />} />
        <Route path="/typography/utilities" component={() => <div />} />
        <Route path="/utility/whitespace" component={() => <div />} />
    </Switch>
);
