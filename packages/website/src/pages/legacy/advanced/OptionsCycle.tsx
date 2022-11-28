import {OptionsCycleConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import OptionsCycleExample from '@examples/legacy/advanced/OptionsCycle/OptionsCycle.example.tsx';
import OptionsCycleButtonExample from '@examples/legacy/advanced/OptionsCycle/OptionsCycleButton.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="OptionsCycle"
        title="Options Cycle"
        section="Advanced"
        description="Allows to cycle through an ordered list of options using right-left arrow buttons."
        componentSourcePath="/optionsCycle/OptionsCycle.tsx"
        code={OptionsCycleExample}
        propsMetadata={OptionsCycleConnectedMetadata}
        examples={{
            buttonStyle: {code: OptionsCycleButtonExample, title: 'Styles like the Button'},
        }}
    />
);
