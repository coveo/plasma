import {InfoTokenMetadata} from '@coveord/plasma-components-props-analyzer';
import criticalExample from '@examples/legacy/advanced/InfoToken/critical.example.tsx';
import infoExample from '@examples/legacy/advanced/InfoToken/info.example.tsx';
import code from '@examples/legacy/advanced/InfoToken/main.example.tsx';
import questionExample from '@examples/legacy/advanced/InfoToken/question.example.tsx';
import successExample from '@examples/legacy/advanced/InfoToken/success.example.tsx';
import tipExample from '@examples/legacy/advanced/InfoToken/tip.example.tsx';
import warningExample from '@examples/legacy/advanced/InfoToken/warning.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="InfoToken"
        title="Info Token"
        section="Advanced"
        description="An InfoToken is a visual representation of the status of something."
        componentSourcePath="/info-token/InfoToken.tsx"
        code={code}
        propsMetadata={InfoTokenMetadata}
        examples={{
            info: {code: infoExample, title: 'Information'},
            success: {code: successExample, title: 'Success'},
            warning: {code: warningExample, title: 'Warning'},
            critical: {code: criticalExample, title: 'Critical'},
            tip: {code: tipExample, title: 'Tip'},
            question: {code: questionExample, title: 'Question'},
        }}
    />
);
