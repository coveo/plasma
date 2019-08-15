import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Checkboxes from './Checkboxes';
import CheckboxesInfos from './CheckboxesInfos';
import Dropdown from './Dropdown';
import DropdownModifiers from './DropdownModifiers';
import FileInput from './FileInput';
import FilterBox from './FilterBox';
import FlatSelect from './FlatSelect';
import FlatSelectModifiers from './FlatSelectBtnGroup';
import FlatSelectPrepend from './FlatSelectPrepend';
import InputSlider from './InputSlider';
import MultilineInput from './MultilineInput';
import NumericSpinner from './NumericSpinner';
import ProgressBar from './ProgressBar';
import RadioButton from './RadioButtons';
import SlideToggle from './SlideToggle';
import SlideToggleDouble from './SlideToggleDouble';
import SlideToggleModifiers from './SlideToggleModifiers';
import StepProgressBar from './StepProgressBar';
import TextInput from './TextInput';

const FormControls: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/text-input`} component={TextInput} />
            <Route path={`${match.url}/numeric-spinner`} component={NumericSpinner} />
            <Route path={`${match.url}/checkboxes-info`} component={CheckboxesInfos} />
            <Route path={`${match.url}/checkboxes`} component={Checkboxes} />
            <Route path={`${match.url}/radio-buttons`} component={RadioButton} />
            <Route path={`${match.url}/slide-toggle`} component={SlideToggle} />
            <Route path={`${match.url}/slide-toggle-modifiers`} component={SlideToggleModifiers} />
            <Route path={`${match.url}/slide-toggle-double`} component={SlideToggleDouble} />
            <Route path={`${match.url}/filter-box`} component={FilterBox} />
            <Route path={`${match.url}/input-slider`} component={InputSlider} />
            <Route path={`${match.url}/dropdown`} component={Dropdown} />
            <Route path={`${match.url}/dropdown-modifiers`} component={DropdownModifiers} />
            <Route path={`${match.url}/flat-select`} component={FlatSelect} />
            <Route path={`${match.url}/flat-select-prepend`} component={FlatSelectPrepend} />
            <Route path={`${match.url}/flat-select-modifiers`} component={FlatSelectModifiers} />
            <Route path={`${match.url}/multiline-input`} component={MultilineInput} />
            <Route path={`${match.url}/progress-bar`} component={ProgressBar} />
            <Route path={`${match.url}/step-progress-bar`} component={StepProgressBar} />
            <Route path={`${match.url}/file-input`} component={FileInput} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/text-input`} />} />
        </>
    );
};

export default FormControls;
