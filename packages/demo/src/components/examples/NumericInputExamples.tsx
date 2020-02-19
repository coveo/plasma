import * as React from 'react';
import {NumericInputConnected, Section} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

export const NumericInputExamples: ExampleComponent = () => (
    <Section title="Numeric Inputs Examples">
        <NumericInputs />
    </Section>
);
NumericInputExamples.description =
    'Numeric inputs are used to require the input of a numeric value. They can be configured in discrete jumps, when precision is not mandatory (e.g., 0, 5, 10, etc.).';

const NumericInputs: React.FunctionComponent = () => (
    <Section level={2} title="Numeric input examples">
        <Section level={3} title="A numeric input with an initial value">
            <NumericInputConnected id="numeric-2" initialValue={5} />
        </Section>
        <Section
            level={3}
            title="A numeric with an initial value of 500, a step of 50, a minimum of 25 and a max of 950 with three digits. Its inital value is 500."
        >
            <NumericInputConnected
                id="numeric-4"
                initialValue={500}
                step={50}
                min={25}
                max={950}
                maxLength={3}
                invalidMessage="The value must be between 25 and 999."
            />
        </Section>
        <Section level={3}></Section>
    </Section>
);
