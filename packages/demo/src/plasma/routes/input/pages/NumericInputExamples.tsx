import * as React from 'react';
import {NumericInputConnected, Section} from 'react-vapor';

import {ExampleComponent} from '../../../utils/ExamplesUtils';
import {useMarkdown} from '../../../../demo-building-blocs/useMarkdown';
import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print
export const NumericInputExamples: ExampleComponent = () => {
    const markdown = useMarkdown('NumericInput');
    return (
        <VaporComponent id="numeric-inputs" title="Numeric Inputs" markdown={markdown} withSource>
            <Section title="Numeric Inputs Examples">
                <NumericInputs />
            </Section>
        </VaporComponent>
    );
};
NumericInputExamples.description =
    'Numeric inputs are used to require the input of a numeric value. They can be configured in discrete jumps, when precision is not mandatory (e.g., 0, 5, 10, etc.).';

const NumericInputs: React.FunctionComponent = () => (
    <Section level={2} title="Numeric input examples">
        <Section level={3} title="A numeric input with an initial value">
            <NumericInputConnected id="numeric-0" initialValue={5} />
        </Section>
        <Section
            level={3}
            title="A numeric with an initial value of 500, a step of 50, a minimum of 25 and a max of 950 with three digits. Its inital value is 500."
        >
            <NumericInputConnected
                id="numeric-1"
                initialValue={500}
                step={50}
                min={25}
                max={950}
                maxLength={3}
                invalidMessage="The value must be between 25 and 999."
            />
        </Section>
        <Section level={3} title="a disabled numeric input">
            <Section level={3} title="A numeric input with an initial value">
                <NumericInputConnected id="numeric-2" initialValue={100} disabled />
            </Section>
        </Section>
    </Section>
);
