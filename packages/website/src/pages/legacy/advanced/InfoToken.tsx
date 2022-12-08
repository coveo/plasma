import {InfoTokenMetadata} from '@coveord/plasma-components-props-analyzer';
import InfoTokenCriticalDemo from '@examples/legacy/advanced/InfoToken/critical.demo.tsx';
import InfoTokenInfoDemo from '@examples/legacy/advanced/InfoToken/info.demo.tsx';
import InfoTokenDemo from '@examples/legacy/advanced/InfoToken/main.demo.tsx';
import InfoTokenQuestionDemo from '@examples/legacy/advanced/InfoToken/question.demo.tsx';
import InfoTokenSuccessDemo from '@examples/legacy/advanced/InfoToken/success.demo.tsx';
import InfoTokenTipDemo from '@examples/legacy/advanced/InfoToken/tip.demo.tsx';
import InfoTokenWarningDemo from '@examples/legacy/advanced/InfoToken/warning.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="InfoToken"
        title="Info Token"
        section="Advanced"
        description="An InfoToken is a visual representation of the status of something."
        demo={<InfoTokenDemo center />}
        sourcePath="/packages/react/src/components/info-token/InfoToken.tsx"
        propsMetadata={InfoTokenMetadata}
        examples={{
            info: <InfoTokenInfoDemo center title="Information" />,
            success: <InfoTokenSuccessDemo center title="Success" />,
            warning: <InfoTokenWarningDemo center title="Warning" />,
            critical: <InfoTokenCriticalDemo center title="Critical" />,
            tip: <InfoTokenTipDemo center title="Tip" />,
            question: <InfoTokenQuestionDemo center title="Question" />,
        }}
    />
);

export default DemoPage;
