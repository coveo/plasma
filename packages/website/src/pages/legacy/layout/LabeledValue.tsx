import {LabeledValueMetadata} from '@coveord/plasma-components-props-analyzer';
import LabelledValueExample from '@examples/legacy/layout/LabelledValue/LabelledValue.example.tsx';
import LabelledValueFullRowExample from '@examples/legacy/layout/LabelledValue/LabelledValueFullRow.example.tsx';
import LabelledValueWithInformationExample from '@examples/legacy/layout/LabelledValue/LabelledValueWithInformation.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const LabeledValueExamples = () => (
    <PageLayout
        id="LabeledValue"
        componentSourcePath="/labeledValue/LabeledValue.tsx"
        title="Labeled value"
        section="Layout"
        thumbnail="placeholder"
        propsMetadata={LabeledValueMetadata}
        code={LabelledValueExample}
        examples={{
            withInformation: {code: LabelledValueWithInformationExample, title: 'With more information (tooltip)'},
            fullRow: {code: LabelledValueFullRowExample, title: 'With fullRow option'},
        }}
    />
);

export default LabeledValueExamples;
