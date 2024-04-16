import {InlineConfirmMetadata} from '@coveord/plasma-components-props-analyzer';
import InlineConfirmDemo from '@examples/form/inline-confirm/InlineConfirm.demo?demo';
import InlineConfirmStyleDemo from '@examples/form/inline-confirm/InlineConfirmStyle.demo?demo';
import InlineConfirmMenuDemo from '@examples/form/inline-confirm/InlineConfirmMenu.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const ButtonPage = () => (
    <PageLayout
        id="InlineConfirm"
        title="Inline Confirm"
        section="Form"
        thumbnail="actionButton"
        description="An inline confirm is used to make the user confirm destructive operations inline."
        demo={<InlineConfirmDemo center />}
        examples={{
            customLook: <InlineConfirmStyleDemo center title="Stylized" />,
            menu: <InlineConfirmMenuDemo center title="Menu item" />,
        }}
        sourcePath="/packages/mantine/src/components/inline-confirm/InlineConfirm.tsx"
        propsMetadata={InlineConfirmMetadata}
    />
);

export default ButtonPage;
