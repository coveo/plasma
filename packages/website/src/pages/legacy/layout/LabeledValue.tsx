import {LabeledValueMetadata} from '@coveord/plasma-components-props-analyzer';
import LabelledValueDemo from '@examples/legacy/layout/LabelledValue/LabelledValue.demo?demo';
import LabelledValueFullRowDemo from '@examples/legacy/layout/LabelledValue/LabelledValueFullRow.demo?demo';
import LabelledValueWithInformationDemo from '@examples/legacy/layout/LabelledValue/LabelledValueWithInformation.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const LabeledValueDemos = () => (
    <PageLayout
        id="LabeledValue"
        sourcePath="/packages/react/src/components/labeledValue/LabeledValue.tsx"
        title="Labeled value"
        section="Layout"
        thumbnail="placeholder"
        propsMetadata={LabeledValueMetadata}
        demo={<LabelledValueDemo />}
        examples={{
            withInformation: <LabelledValueWithInformationDemo title="With more information (tooltip)" />,
            fullRow: <LabelledValueFullRowDemo title="With fullRow option" />,
        }}
    />
);

export default LabeledValueDemos;
