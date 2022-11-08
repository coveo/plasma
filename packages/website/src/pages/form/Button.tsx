import {ButtonMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/button/Button.example.tsx';
import disabled from '@examples/button/Disabled.example.tsx';
import iconAndLink from '@examples/button/IconAndLink.example.tsx';
import loading from '@examples/button/Loading.example.tsx';
import prepend from '@examples/button/Prepend.example.tsx';
import primary from '@examples/button/Primary.example.tsx';
import small from '@examples/button/Small.example.tsx';
import withTooltip from '@examples/button/WithTooltip.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

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
