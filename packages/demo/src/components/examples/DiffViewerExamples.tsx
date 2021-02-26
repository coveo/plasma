import * as React from 'react';
import {DiffViewer, Section} from 'react-vapor';

import {fakeJSON, fakeJSON1, JSONToString} from './DiffViewerExmaplesCommon';

export const DiffViewerExamples: React.FC = () => (
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
);
