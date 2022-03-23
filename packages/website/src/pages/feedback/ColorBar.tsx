import code from '@examples/ColorBar/ColorBar.example.tsx';
import partial from '@examples/ColorBar/ColorBarPartial.example.tsx';
import overflow from '@examples/ColorBar/ColorBarOverflow.example.tsx';
import * as React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="ColorBar"
        title="Color Bar"
        section="Feedback"
        description="A color bar is used to indicate the ratio between things."
        componentSourcePath="/colorBar/ColorBar.tsx"
        code={code}
        examples={{
            partial: {code: partial, title: 'Partially filled'},
            overflow: {code: overflow, title: 'Overflow'},
        }}
    />
);
