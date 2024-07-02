import {PromptMetadata} from '@coveord/plasma-components-props-analyzer';
import PromptInfoDemo from '@examples/layout/Prompt/Prompt.demo?demo';
import PromptSuccessDemo from '@examples/layout/Prompt/PromptSuccess.demo?demo';
import PromptWarningDemo from '@examples/layout/Prompt/PromptWarning.demo?demo';
import PromptCriticalDemo from '@examples/layout/Prompt/PromptCritical.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="Prompt"
        sourcePath="/packages/mantine/src/components/prompt/Prompt.tsx"
        description="A Prompt is a visual communication from the system to the user."
        id="Prompt"
        propsMetadata={PromptMetadata}
        demo={<PromptInfoDemo />}
        examples={{
            success: <PromptSuccessDemo title="Success prompt" />,
            warning: <PromptWarningDemo title="Warning prompt" />,
            critical: <PromptCriticalDemo title="Critical prompt" />,
        }}
    />
);
