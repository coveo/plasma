import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

const code = `
    import {InfoBox} from '@coveord/plasma-react';

    export default () => <InfoBox>Some contextual information.</InfoBox>;
    `;

const warning = `
    import {InfoBox} from '@coveord/plasma-react';

    export default () => (
        <InfoBox className="mod-warning">
            Be aware that this is a warning.
        </InfoBox>
    );
`;

const collapsible = `
    import {InfoBox, CollapsibleConnected} from '@coveord/plasma-react';

    export default () => (
        <InfoBox className="py0">
            <CollapsibleConnected
                headerClasses="py2"
                id="info-box-collapsible"
                headerContent={<h6>Some contextual information</h6>}
                expandedOnMount
            >
                <div className="pb2">
                    <p>Some information about the current component.</p>
                    <p className="mt2">Or some other piece of information</p>
                </div>
            </CollapsibleConnected>
        </InfoBox>
    );
`;

export const InfoBoxExamples: FunctionComponent = () => (
    <PageLayout
        id="InfoBox"
        title="Info Box"
        section="Layout"
        description="An info box displays contextual information."
        componentSourcePath="/infoBox/InfoBox.tsx"
        code={code}
        examples={{
            warning: {code: warning, title: 'Warning InfoBox'},
            collapsible: {code: collapsible, title: 'With collapsible content'},
        }}
    />
);

export default InfoBoxExamples;
