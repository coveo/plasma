import {PromptMetadata} from '@coveord/plasma-components-props-analyzer';
import PromptDemo from '@examples/layout/Prompt/Prompt.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="Prompt"
        sourcePath="/packages/mantine/src/components/prompt/Prompt.tsx"
        description="A Prompt is a visual communication from the system to the user."
        id="Prompt"
        propsMetadata={PromptMetadata}
        demo={<PromptDemo />}
    />
);
