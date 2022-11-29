import {NumericInputConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import NumericInputExample from '@examples/legacy/form/NumericInput/NumericInput.demo.tsx';
import NumericInputDisabledExample from '@examples/legacy/form/NumericInput/NumericInputDisabled.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const NumericInputExamples = () => (
    <PageLayout
        id="NumericInputConnected"
        title="Numeric Input"
        section="Form"
        description="A numeric input allows users to enter and edit numerical values, either manually or using an input stepper."
        componentSourcePath="/numericInput/NumericInputConnected.tsx"
        propsMetadata={NumericInputConnectedMetadata}
        code={NumericInputExample}
        examples={{disabled: {code: NumericInputDisabledExample, title: 'Disabled'}}}
    />
);

export default NumericInputExamples;
