import {ButtonMetadata} from '@coveord/plasma-components-props-analyzer';
import ButtonDemo from '@examples/form/button/Button.demo?demo';
import ButtonDestructiveDemo from '@examples/form/button/ButtonDestructive.demo?demo';
import ButtonDisabledDemo from '@examples/form/button/ButtonDisabled.demo?demo';
import ButtonSecondaryDemo from '@examples/form/button/ButtonSecondary.demo?demo';
import ButtonWithAsyncLoaderDemo from '@examples/form/button/ButtonWithAsyncLoader.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const ButtonPage = () => (
    <PageLayout
        id="Button"
        title="Button"
        section="Form"
        thumbnail="actionButton"
        description="A button draws attention to an important action and initializes this action when clicked."
        demo={<ButtonDemo center />}
        examples={{
            secondary: <ButtonSecondaryDemo center title="Secondary" />,
            destructive: <ButtonDestructiveDemo center title="Destructive" />,
            disabled: <ButtonDisabledDemo center title="Disabled" />,
            promiseHandler: <ButtonWithAsyncLoaderDemo center title="Async click handler" />,
        }}
        sourcePath="/packages/mantine/src/components/button/Button.tsx"
        propsMetadata={ButtonMetadata}
    />
);

export default ButtonPage;
