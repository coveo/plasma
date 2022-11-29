import {ColorPickerMetadata} from '@coveord/plasma-components-props-analyzer';
import ColorPickerExample from '@examples/legacy/form/ColorPicker/ColorPicker.example.tsx';
import ColorPickerHiddenControlsExample from '@examples/legacy/form/ColorPicker/ColorPickerHiddenControls.example.tsx';
import ColorPickerSelectorExample from '@examples/legacy/form/ColorPicker/ColorPickerSelector.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const ColorPickerExamples = () => (
    <PageLayout
        id="ColorPicker"
        title="Color Picker"
        section="Form"
        description={
            <>
                A color picker is a visual interface that allows users to select a color. Built using{' '}
                <a href="https://github.com/casesandberg/react-color/">React Color</a>
            </>
        }
        componentSourcePath="/color-picker/ColorPicker.tsx"
        code={ColorPickerExample}
        propsMetadata={ColorPickerMetadata}
        examples={{
            hiddenControls: {code: ColorPickerHiddenControlsExample, title: 'Hidden Controls'},
            selector: {code: ColorPickerSelectorExample, title: 'Selector'},
        }}
    />
);

export default ColorPickerExamples;
