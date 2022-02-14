import * as React from 'react';
import {NumericInputConnected, Section} from '@coveord/plasma-react';

import {ExampleComponent} from '../../utils/ExamplesUtils';
import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print
export const NumericInputExamples: ExampleComponent = () => (
    <PlasmaComponent
        id="NumericInput"
        title="Numeric Inputs"
        usage="A numeric input allows users to enter and edit numerical values, either manually or using an input stepper."
        withSource
    >
        <Section title="Numeric Inputs Examples">
            <NumericInputs />
        </Section>
    </PlasmaComponent>
);
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
