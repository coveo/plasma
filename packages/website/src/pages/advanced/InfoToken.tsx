import code from '@examples/InfoToken/main.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';
import criticalExample from '../../examples/InfoToken/critical.example.tsx';
import infoExample from '../../examples/InfoToken/info.example.tsx';
import questionExample from '../../examples/InfoToken/question.example.tsx';
import successExample from '../../examples/InfoToken/success.example.tsx';
import tipExample from '../../examples/InfoToken/tip.example.tsx';
import warningExample from '../../examples/InfoToken/warning.example.tsx';

export default () => (
    <PageLayout
        id="InfoToken"
        title="Info Token"
        section="Advanced"
        description="An InfoToken is a visual representation of the status of something."
        componentSourcePath="/info-token/InfoToken.tsx"
        code={code}
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
