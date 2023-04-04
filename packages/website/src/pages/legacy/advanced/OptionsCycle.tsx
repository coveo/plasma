import {OptionsCycleConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import OptionsCycleDemo from '@examples/legacy/advanced/OptionsCycle/OptionsCycle.demo?demo';
import OptionsCycleButtonDemo from '@examples/legacy/advanced/OptionsCycle/OptionsCycleButton.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="OptionsCycle"
        title="Options Cycle"
        section="Advanced"
        description="Allows to cycle through an ordered list of options using right-left arrow buttons."
        demo={<OptionsCycleDemo center />}
        sourcePath="/packages/react/src/components/optionsCycle/OptionsCycle.tsx"
        propsMetadata={OptionsCycleConnectedMetadata}
        examples={{
            buttonStyle: <OptionsCycleButtonDemo center title="Styles like the Button" />,
        }}
    />
);

export default DemoPage;
