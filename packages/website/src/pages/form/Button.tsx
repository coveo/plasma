import {ButtonMetadata} from '@coveord/plasma-components-props-analyzer';
import ButtonDemo from '@examples/form/button/Button.demo.tsx';
import ButtonDisabledDemo from '@examples/form/button/ButtonDisabled.demo.tsx';
import ButtonSecondaryDemo from '@examples/form/button/ButtonSecondary.demo.tsx';
import ButtonWithAsyncLoader from '@examples/form/button/ButtonWithAsyncLoader.demo.tsx';

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
            disabled: <ButtonDisabledDemo center title="Disabled" />,
            promiseHandler: <ButtonWithAsyncLoader center title="Async click handler" />,
        }}
        sourcePath="/packages/mantine/src/components/button/Button.tsx"
        propsMetadata={ButtonMetadata}
    />
);

export default ButtonPage;
