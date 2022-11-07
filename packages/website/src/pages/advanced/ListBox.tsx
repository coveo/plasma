import {ListBoxMetadata} from '@coveord/plasma-components-props-analyzer';
import emptyExample from '@examples/ListBox/empty.example.tsx';
import code from '@examples/ListBox/main.example.tsx';
import withFooterExample from '@examples/ListBox/withFooter.example.tsx';

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
        propsMetadata={ListBoxMetadata}
        examples={{
            loading: {code: loadingExample, title: 'Loading'},
            empty: {code: emptyExample, title: 'Empty state'},
            withFooter: {code: withFooterExample, title: 'List with a footer'},
        }}
    />
);
