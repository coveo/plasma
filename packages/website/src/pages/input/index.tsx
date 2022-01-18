import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {ActionableItemExamples} from './ActionableItemExamples';
import {ButtonExamples} from './ButtonExamples';
import {CheckboxExamples} from './CheckboxExamples';
import {ChildFormExamples} from './ChildFormExamples';
import {CodeEditorExamples} from './CodeEditorExamples';
import {DatePickerExamples} from './DatePickerExamples';
import {DiffViewerExamples} from './DiffViewerExamples';
import {FacetConnectedExamples} from './FacetConnectedExamples';
import {FilepickerExamples} from './FilepickerExamples';
import {FilterBoxExamples} from './FilterBoxExamples';
import {JSONEditorExamples} from './JSONEditorExamples';
import {MultilineBoxExamples} from './MultilineBoxExamples';
import {MultiSelectExamples} from './MultiSelectExamples';
import {NumericInputExamples} from './NumericInputExamples';
import {RadioButtonExamples} from './RadioButtonExamples';
import {SearchBarExamples} from './SearchBarExamples';
import {SingleSelectExample} from './SingleSelectExamples';
import {SliderExamples} from './SliderExamples';
import {TextAreaExamples} from './TextAreaExamples';
import {TextInputExamples} from './TextInputExamples';
import ValuePopup from './ValuePopupExamples';

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
        <Route path="MultiSelect" element={<MultiSelectExamples />} />
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
