import * as React from 'react';
import {DiffViewer, fakeJSON1, JSONToString, Section} from '@coveord/plasma-react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';
import {fakeJSON} from '../../utils/DiffViewerExmaplesCommon';

// start-print
export const DiffViewerExamples: React.FC = () => (
    <PlasmaComponent
        id="DiffViewer"
        title="Diff Viewer"
        usage="A diff viewer allows users to compare code files by showing them side by side and highlighting differences between them."
        withSource
    >
        <Section>
            <Section level={2} title="DiffViewer with split view">
                <DiffViewer oldValue={JSONToString(fakeJSON)} newValue={JSONToString(fakeJSON1)} />
            </Section>
            <Section level={2} title="DiffViewer with unified view">
                <DiffViewer oldValue={JSONToString(fakeJSON)} newValue={JSONToString(fakeJSON1)} splitView={false} />
            </Section>
            <Section level={2} title="DiffViewer with no changes">
                <DiffViewer
                    oldValue={JSONToString(fakeJSON)}
                    newValue={JSONToString(fakeJSON)}
                    noChangesLabel={'This is a no change label'}
                />
            </Section>
        </Section>
    </PlasmaComponent>
);
export default DiffViewerExamples;
