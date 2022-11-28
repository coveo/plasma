import {ColorBarMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/feedback/ColorBar/ColorBar.example.tsx';
import overflow from '@examples/legacy/feedback/ColorBar/ColorBarOverflow.example.tsx';
import partial from '@examples/legacy/feedback/ColorBar/ColorBarPartial.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="ColorBar"
        title="Color Bar"
        section="Feedback"
        description="A color bar is used to indicate the ratio between things."
        componentSourcePath="/colorBar/ColorBar.tsx"
        code={code}
        propsMetadata={ColorBarMetadata}
        examples={{
            partial: {code: partial, title: 'Partially filled'},
            overflow: {code: overflow, title: 'Overflow'},
        }}
    />
);
