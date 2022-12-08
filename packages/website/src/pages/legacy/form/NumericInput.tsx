import {NumericInputConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import NumericInputDemo from '@examples/legacy/form/NumericInput/NumericInput.demo.tsx';
import NumericInputDisabledDemo from '@examples/legacy/form/NumericInput/NumericInputDisabled.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const NumericInputDemos = () => (
    <PageLayout
        id="NumericInputConnected"
        title="Numeric Input"
        section="Form"
        description="A numeric input allows users to enter and edit numerical values, either manually or using an input stepper."
        componentSourcePath="/numericInput/NumericInputConnected.tsx"
        propsMetadata={NumericInputConnectedMetadata}
        demo={<NumericInputDemo center />}
        examples={{disabled: <NumericInputDisabledDemo center title="Disabled" />}}
    />
);

export default NumericInputDemos;
