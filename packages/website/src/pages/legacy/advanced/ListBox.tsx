import {ListBoxMetadata} from '@coveord/plasma-components-props-analyzer';
import ListBoxEmptyDemo from '@examples/legacy/advanced/ListBox/empty.demo.tsx';
import ListBoxLoadingDemo from '@examples/legacy/advanced/ListBox/loading.demo.tsx';
import ListBoxDemo from '@examples/legacy/advanced/ListBox/main.demo.tsx';
import ListBoxWithFooterDemo from '@examples/legacy/advanced/ListBox/withFooter.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="ListBox"
        title="List Box"
        section="Advanced"
        description="A list of items from which to choose from."
        componentSourcePath="/listBox/ListBox.tsx"
        demo={<ListBoxDemo center />}
        propsMetadata={ListBoxMetadata}
        examples={{
            loading: <ListBoxLoadingDemo center title="Loading" />,
            empty: <ListBoxEmptyDemo center title="Empty state" />,
            withFooter: <ListBoxWithFooterDemo center title="List with a footer" />,
        }}
    />
);

export default DemoPage;
