import {ButtonMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/form/button/Button.example.tsx';
import disabled from '@examples/legacy/form/button/Disabled.example.tsx';
import iconAndLink from '@examples/legacy/form/button/IconAndLink.example.tsx';
import loading from '@examples/legacy/form/button/Loading.example.tsx';
import prepend from '@examples/legacy/form/button/Prepend.example.tsx';
import primary from '@examples/legacy/form/button/Primary.example.tsx';
import small from '@examples/legacy/form/button/Small.example.tsx';
import withTooltip from '@examples/legacy/form/button/WithTooltip.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="Button"
        title="Button"
        section="Form"
        thumbnail="actionButton"
        description="A button draws attention to an important action and initializes this action when clicked."
        code={code}
        examples={{
            primary: {code: primary, title: 'Primary, Default size'},
            small: {code: small, title: 'Secondary, Small size'},
            disabled: {code: disabled, title: 'Disabled'},
            loading: {code: loading, title: 'Loading'},
            prepend: {code: prepend, title: 'Prepended icon'},
            iconAndLink: {code: iconAndLink, title: 'Icon only with an hyperlink'},
            withTooltip: {code: withTooltip, title: 'With tooltop'},
        }}
        componentSourcePath="/button/Button.tsx"
        propsMetadata={ButtonMetadata}
    />
);
