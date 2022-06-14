const code = `
    import {ColorPicker} from '@coveord/plasma-react';
    
    export default () => {
        const logColor = (color) => console.log(color);
        return (
            <ColorPicker id="color-picker-id" defaultColor="#F37231" onChangeComplete={logColor} />            
        );
    }
`;

const hiddenControls = `
    import {ColorPicker} from '@coveord/plasma-react';
    
    export default () => {
        return (
            <ColorPicker id="color-picker-id-2" styles={{default: {controls: {display: 'none'}}}} />            
        );
    }
`;

const selector = `
    import {useSelector} from 'react-redux';
    import {ColorPicker, PlasmaState, InputSelectors} from '@coveord/plasma-react';
    
    export default () => {
        const selected = useSelector((state: PlasmaState) =>
            InputSelectors.getValue(state, {
                id: 'color-picker-id-3',
            })
        );
        return (
            <>
                <ColorPicker id="color-picker-id-3" />
                Selected value: {selected}
            </>
        );
    };
`;

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
        code={code}
        examples={{
            hiddenControls: {code: hiddenControls, title: 'Hidden Controls'},
            selector: {code: selector, title: 'Selector'},
        }}
    />
);

export default ColorPickerExamples;
