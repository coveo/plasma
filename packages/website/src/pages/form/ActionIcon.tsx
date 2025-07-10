import {ActionIconMetadata} from '@coveord/plasma-components-props-analyzer';
import ActionIconDemo from '@examples/form/action-icon/ActionIcon.demo?demo';
import ActionIconDisabledDemo from '@examples/form/action-icon/ActionIconDisabled.demo?demo';
import ActionIconWithAsyncLoaderDemo from '../../examples/form/action-icon/ActionIconWithAsyncLoader.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const ActionIconPage = () => (
    <PageLayout
        id="ActionIcon"
        title="Action Icon"
        section="Form"
        thumbnail="actionButton"
        description="An ActionIcon is an icon-only button."
        demo={<ActionIconDemo center />}
        examples={{
            disabled: <ActionIconDisabledDemo center title="Disabled" />,
            promiseHandler: <ActionIconWithAsyncLoaderDemo center title="Async click handler" />,
        }}
        sourcePath="/packages/mantine/src/components/action-icon/ActionIcon.tsx"
        propsMetadata={ActionIconMetadata}
    />
);

export default ActionIconPage;
