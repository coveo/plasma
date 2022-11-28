import InfoBoxExample from '@examples/legacy/layout/InfoBox/InfoBox.example.tsx';
import InfoBoxCollapsibleExample from '@examples/legacy/layout/InfoBox/InfoBoxCollapsible.example.tsx';
import InfoBoxWarningExample from '@examples/legacy/layout/InfoBox/InfoBoxWarning.example.tsx';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const InfoBoxExamples: FunctionComponent = () => (
    <PageLayout
        id="InfoBox"
        title="Info Box"
        section="Layout"
        description="An info box displays contextual information."
        componentSourcePath="/infoBox/InfoBox.tsx"
        code={InfoBoxExample}
        examples={{
            warning: {code: InfoBoxWarningExample, title: 'Warning InfoBox'},
            collapsible: {code: InfoBoxCollapsibleExample, title: 'With collapsible content'},
        }}
    />
);

export default InfoBoxExamples;
