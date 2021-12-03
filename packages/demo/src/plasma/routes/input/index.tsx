import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../../NotFound';
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
import {NumericInputExamples} from './pages/NumericInputExamples';
import {RadioButtonExamples} from './pages/RadioButtonExamples';
import {SearchBarExamples} from './pages/SearchBarExamples';
import {SingleSelectExample} from './pages/SingleSelectExamples';
import {SliderExamples} from './pages/SliderExamples';
import {TextAreaExamples} from './pages/TextAreaExamples';
import {TextInputExamples} from './pages/TextInputExamples';
import ValuePopup from './pages/ValuePopupExamples';

export const InputRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="ActionableItem" element={<ActionableItemExamples />} />
        <Route path="AddRemove" element={<div />} />
        <Route path="Button" element={<ButtonExamples />} />
        <Route path="Checkbox" element={<CheckboxExamples />} />
        <Route path="Childform" element={<ChildFormExamples />} />
        <Route path="CodeEditor" element={<CodeEditorExamples />} />
        <Route path="DatePicker" element={<DatePickerExamples />} />
        <Route path="DiffViewer" element={<DiffViewerExamples />} />
        <Route path="Dropdown" element={<div />} />
        <Route path="Facet" element={<FacetConnectedExamples />} />
        <Route path="FilePicker" element={<FilepickerExamples />} />
        <Route path="FilterBox" element={<FilterBoxExamples />} />
        <Route path="JSONEditor" element={<JSONEditorExamples />} />
        <Route path="links" element={<div />} />
        <Route path="MultilineBox" element={<MultilineBoxExamples />} />
        {/* TODO - <Route path="MultiSelect" component={MultiSelectExamples} /> */}
        <Route path="NumericInput" element={<NumericInputExamples />} />
        <Route path="RadioButton" element={<RadioButtonExamples />} />
        <Route path="SearchBar" element={<SearchBarExamples />} />
        <Route path="SingleSelect" element={<SingleSelectExample />} />
        <Route path="Slider" element={<SliderExamples />} />
        <Route path="TextArea" element={<TextAreaExamples />} />
        <Route path="TextInput" element={<TextInputExamples />} />
        <Route path="Toggle" element={<div />} />
        <Route path="ValuePopup" element={<ValuePopup />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
