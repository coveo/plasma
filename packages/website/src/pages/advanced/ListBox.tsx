import code from '@examples/ListBox/main.example.tsx';
import * as React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';
import loadingExample from '../../examples/ListBox/loading.example.tsx';

export default () => (
    <PageLayout
        id="ListBox"
        title="List Box"
        section="Advanced"
        description="A list of items from which to choose from."
        componentSourcePath="/listBox/ListBox.tsx"
        code={code}
        examples={{
            loading: {code: loadingExample, title: 'Loading'},
        }}
    />
);
