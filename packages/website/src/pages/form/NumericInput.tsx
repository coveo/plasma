import {NumericInputConnectedMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {NumericInputConnected} from '@coveord/plasma-react';

    export default () => (
        <NumericInputConnected
            id="numeric-1"
            initialValue={500}
            step={50}
            min={25}
            max={950}
            maxLength={3}
            invalidMessage="The value must be between 25 and 950."
        />
    );
`;

const disabled = `
    import {NumericInputConnected} from '@coveord/plasma-react';

    export default () => (
        <NumericInputConnected id="numeric-2" initialValue={100} disabled />
    );
`;

const NumericInputExamples = () => (
    <PageLayout
        id="NumericInputConnected"
        title="Numeric Input"
        section="Form"
        description="A numeric input allows users to enter and edit numerical values, either manually or using an input stepper."
        componentSourcePath="/numericInput/NumericInputConnected.tsx"
        propsMetadata={NumericInputConnectedMetadata}
        code={code}
        examples={{disabled: {code: disabled, title: 'Disabled'}}}
    />
);

export default NumericInputExamples;
