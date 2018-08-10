import 'codemirror/lib/codemirror.css';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import './style.scss';

import * as React from 'react';
import {render as ReactDOMRender} from 'react-dom';
import {Provider} from 'react-redux';

import {QueryExpressionEditorExample} from '../src/components/queryExpressionEditor/examples/QueryExpressionEditorExample';

// import {DatePickerBoxConnectedExamples} from '../src/components/datePicker/examples/DatePickerBoxConnectedExamples';
// import {DatePickerBoxExamples} from '../src/components/datePicker/examples/DatePickerBoxExamples';
// import {DatePickerDropdownConnectedExamples} from '../src/components/datePicker/examples/DatePickerDropdownConnectedExamples';
import {DatePickerDropdownConnectedSingleDateExamples} from '../src/components/datePicker/examples/DatePickerDropdownConnectedSingleDateExamples';
// import {MultiSelectExamples} from '../src/components/select/examples/MultiSelectExamples';
import {DropdownSearchExamples} from '../src/components/dropdownSearch/examples/DropdownSearchExamples';

// import {DatesSelectionConnectedExamples} from '../src/components/datePicker/examples/DatesSelectionConnectedExamples';
// import {DatesSelectionExamples} from '../src/components/datePicker/examples/DatesSelectionExamples';
// import {RadioExamples} from '../src/components/radio/examples/RadioExamples';
// import {InputConnectedExamples} from '../src/components/input/examples/InputConnectedExamples';

import {ReactVaporStore} from './ReactVaporStore';

class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={ReactVaporStore}>

                <div className='coveo-form'>
                    {/* TODO : incorporer un Provider/store dans le QueryExpressionEditor? */}
                    <QueryExpressionEditorExample />

                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    {/* <DatePickerBoxConnectedExamples />
                    <DatePickerBoxExamples />
                    <DatePickerDropdownConnectedExamples />
                    */}
                    {/* <DatesSelectionConnectedExamples /> */}
                    {/* <DatesSelectionExamples />
                    <MultiSelectExamples />
                    <RadioExamples /> */}
                    <DatePickerDropdownConnectedSingleDateExamples />
                    {/* <InputConnectedExamples /> */}

                    <DropdownSearchExamples />
                </div>
            </Provider>
        );
    }
}

ReactDOMRender(<App />, document.getElementById('App'));
