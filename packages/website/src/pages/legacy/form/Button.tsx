import {ButtonLegacyMetadata} from '@coveord/plasma-components-props-analyzer';
import ButtonDemo from '@examples/legacy/form/button/Button.demo.tsx';
import ButtonDisabledDemo from '@examples/legacy/form/button/Disabled.demo.tsx';
import ButtonWithIconAndLinkDemo from '@examples/legacy/form/button/IconAndLink.demo.tsx';
import ButtonLoadingDemo from '@examples/legacy/form/button/Loading.demo.tsx';
import ButtonPrependDemo from '@examples/legacy/form/button/Prepend.demo.tsx';
import ButtonPrimaryDemo from '@examples/legacy/form/button/Primary.demo.tsx';
import ButtonSmallDemo from '@examples/legacy/form/button/Small.demo.tsx';
import ButtonWithTooltipDemo from '@examples/legacy/form/button/WithTooltip.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const ButtonPage = () => (
    <PageLayout
        id="Button"
        title="Button"
        section="Form"
        thumbnail="actionButton"
        description="A button draws attention to an important action and initializes this action when clicked."
        demo={<ButtonDemo center />}
        examples={{
            primary: <ButtonPrimaryDemo center title="Primary, Default size" />,
            small: <ButtonSmallDemo center title="Secondary, Small size" />,
            disabled: <ButtonDisabledDemo center title="Disabled" />,
            loading: <ButtonLoadingDemo center title="Loading" />,
            prepend: <ButtonPrependDemo center title="Prepended icon" />,
            iconAndLink: <ButtonWithIconAndLinkDemo center title="Icon only with an hyperlink" />,
            withTooltip: <ButtonWithTooltipDemo center title="With tooltip" />,
        }}
        sourcePath="/packages/react/src/components/button/Button.tsx"
        propsMetadata={ButtonLegacyMetadata}
    />
);

export default ButtonPage;
