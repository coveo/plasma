import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import {ActionableItemExamples} from './pages/ActionableItemExamples';
import {ButtonExamples} from './pages/ButtonExamples';
import {CheckboxExamples} from './pages/CheckboxExamples';
import {ChildFormExamples} from './pages/ChildFormExamples';
import {CodeEditorExamples} from './pages/CodeEditorExamples';
import {DatePickerExamples} from './pages/DatePickerExamples';
import {DiffViewerExamples} from './pages/DiffViewerExamples';
import {FacetConnectedExamples} from './pages/FacetConnectedExamples';
import {FilepickerExamples} from './pages/FilepickerExamples';
import {FilterBoxExamples} from './pages/FilterBoxExamples';
import {JSONEditorExamples} from './pages/JSONEditorExamples';
import {MultilineBoxExamples} from './pages/MultilineBoxExamples';
import {MultiSelectExamples} from './pages/MultiSelectExamples';
import {NumericInputExamples} from './pages/NumericInputExamples';
import {RadioButtonExamples} from './pages/RadioExamples';
import {SearchBarExamples} from './pages/SearchBarExamples';
import {SingleSelectExample} from './pages/SingleSelectExamples';
import {SliderExamples} from './pages/SliderExamples';
import {TextAreaExamples} from './pages/TextAreaExamples';
import {TextInputExamples} from './pages/TextInputExamples';
import ValuePopup from './pages/ValuePopup';

export const InputRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/ActionableItem`} component={() => <ActionableItemExamples />} />
            <Route path={`${path}/AddRemove`} component={() => <div />} />
            <Route path={`${path}/Button`} component={() => <ButtonExamples />} />
            <Route path={`${path}/Checkbox`} component={() => <CheckboxExamples />} />
            <Route path={`${path}/Childform`} component={() => <ChildFormExamples />} />
            <Route path={`${path}/CodeEditor`} component={() => <CodeEditorExamples />} />
            <Route path={`${path}/DatePicker`} component={() => <DatePickerExamples />} />
            <Route path={`${path}/DiffViewer`} component={() => <DiffViewerExamples />} />
            <Route path={`${path}/Dropdown`} component={() => <div />} />
            <Route path={`${path}/Facet`} component={() => <FacetConnectedExamples />} />
            <Route path={`${path}/FilePicker`} component={() => <FilepickerExamples />} />
            <Route path={`${path}/FilterBox`} component={() => <FilterBoxExamples />} />
            <Route path={`${path}/JSONEditor`} component={() => <JSONEditorExamples />} />
            <Route path={`${path}/links`} component={() => <div />} />
            <Route path={`${path}/MultilineBox`} component={() => <MultilineBoxExamples />} />
            <Route path={`${path}/MultiSelect`} component={MultiSelectExamples} />
            <Route path={`${path}/NumericInput`} component={() => <NumericInputExamples />} />
            <Route path={`${path}/RadioButton`} component={() => <RadioButtonExamples />} />
            <Route path={`${path}/SearchBar`} component={() => <SearchBarExamples />} />
            <Route path={`${path}/SingleSelect`} component={() => <SingleSelectExample />} />
            <Route path={`${path}/Slider`} component={() => <SliderExamples />} />
            <Route path={`${path}/TextArea`} component={() => <TextAreaExamples />} />
            <Route path={`${path}/TextInput`} component={() => <TextInputExamples />} />
            <Route path={`${path}/Toggle`} component={() => <div />} />
            <Route path={`${path}/ValuePopup`} component={() => <ValuePopup />} />
        </Switch>
    );
};
