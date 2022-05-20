import code from '@examples/ListBox/main.example.tsx';
import emptyExample from '@examples/ListBox/empty.example.tsx';
import withFooterExample from '@examples/ListBox/withFooter.example.tsx';
import loadingExample from '../../examples/ListBox/loading.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

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
            empty: {code: emptyExample, title: 'Empty state'},
            withFooter: {code: withFooterExample, title: 'List with a footer'},
        }}
    />
);
