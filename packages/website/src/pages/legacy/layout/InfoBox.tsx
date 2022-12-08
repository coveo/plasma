import InfoBoxDemo from '@examples/legacy/layout/InfoBox/InfoBox.demo.tsx';
import InfoBoxCollapsibleDemo from '@examples/legacy/layout/InfoBox/InfoBoxCollapsible.demo.tsx';
import InfoBoxWarningDemo from '@examples/legacy/layout/InfoBox/InfoBoxWarning.demo.tsx';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const InfoBoxDemos: FunctionComponent = () => (
    <PageLayout
        id="InfoBox"
        title="Info Box"
        section="Layout"
        description="An info box displays contextual information."
        sourcePath="/packages/react/src/components/infoBox/InfoBox.tsx"
        demo={<InfoBoxDemo />}
        examples={{
            warning: <InfoBoxWarningDemo title="Warning InfoBox" />,
            collapsible: <InfoBoxCollapsibleDemo title="With collapsible content" />,
        }}
    />
);

export default InfoBoxDemos;
