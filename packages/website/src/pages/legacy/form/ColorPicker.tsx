import {ColorPickerMetadata} from '@coveord/plasma-components-props-analyzer';
import ColorPickerDemo from '@examples/legacy/form/ColorPicker/ColorPicker.demo.tsx';
import ColorPickerHiddenControlsDemo from '@examples/legacy/form/ColorPicker/ColorPickerHiddenControls.demo.tsx';
import ColorPickerSelectorDemo from '@examples/legacy/form/ColorPicker/ColorPickerSelector.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const ColorPickerDemos = () => (
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
        demo={<ColorPickerDemo center />}
        propsMetadata={ColorPickerMetadata}
        examples={{
            hiddenControls: <ColorPickerHiddenControlsDemo center title="Hidden Controls" />,
            selector: <ColorPickerSelectorDemo center title="Selector" />,
        }}
    />
);

export default ColorPickerDemos;
