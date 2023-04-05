import {ListBoxMetadata} from '@coveord/plasma-components-props-analyzer';
import ListBoxEmptyDemo from '@examples/legacy/advanced/ListBox/empty.demo?demo';
import ListBoxLoadingDemo from '@examples/legacy/advanced/ListBox/loading.demo?demo';
import ListBoxDemo from '@examples/legacy/advanced/ListBox/main.demo?demo';
import ListBoxWithFooterDemo from '@examples/legacy/advanced/ListBox/withFooter.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="ListBox"
        title="List Box"
        section="Advanced"
        description="A list of items from which to choose from."
        demo={<ListBoxDemo center />}
        sourcePath="/packages/react/src/components/listBox/ListBox.tsx"
        propsMetadata={ListBoxMetadata}
        examples={{
            loading: <ListBoxLoadingDemo center title="Loading" />,
            empty: <ListBoxEmptyDemo center title="Empty state" />,
            withFooter: <ListBoxWithFooterDemo center title="List with a footer" />,
        }}
    />
);

export default DemoPage;
