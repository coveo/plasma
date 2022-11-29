import {ButtonMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/form/button/Button.demo.tsx';
import disabled from '@examples/legacy/form/button/Disabled.demo.tsx';
import iconAndLink from '@examples/legacy/form/button/IconAndLink.demo.tsx';
import loading from '@examples/legacy/form/button/Loading.demo.tsx';
import prepend from '@examples/legacy/form/button/Prepend.demo.tsx';
import primary from '@examples/legacy/form/button/Primary.demo.tsx';
import small from '@examples/legacy/form/button/Small.demo.tsx';
import withTooltip from '@examples/legacy/form/button/WithTooltip.demo.tsx';

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
