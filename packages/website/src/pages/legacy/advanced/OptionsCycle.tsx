import {OptionsCycleConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import OptionsCycleDemo from '@examples/legacy/advanced/OptionsCycle/OptionsCycle.demo.tsx';
import OptionsCycleButtonDemo from '@examples/legacy/advanced/OptionsCycle/OptionsCycleButton.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="OptionsCycle"
        title="Options Cycle"
        section="Advanced"
        description="Allows to cycle through an ordered list of options using right-left arrow buttons."
        componentSourcePath="/optionsCycle/OptionsCycle.tsx"
        demo={<OptionsCycleDemo center />}
        propsMetadata={OptionsCycleConnectedMetadata}
        examples={{
            buttonStyle: <OptionsCycleButtonDemo center title="Styles like the Button" />,
        }}
    />
);

export default DemoPage;
