import {FilterBoxConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import FilterBoxDemo from '@examples/legacy/form/FilterBox/FilterBox.demo?demo';
import FilterBoxDisabledDemo from '@examples/legacy/form/FilterBox/FilterBoxDisabled.demo?demo';
import FilterBoxMaxWidthDemo from '@examples/legacy/form/FilterBox/FilterBoxMaxWidth.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="FilterBoxConnected"
        title="Filter Box"
        section="Form"
        description="A filter box allows users to enter text to filter data. It is frequently used with tables and dropdown menus."
        sourcePath="/packages/react/src/components/filterBox/FilterBoxConnected.tsx"
        demo={<FilterBoxDemo center />}
        propsMetadata={FilterBoxConnectedMetadata}
        examples={{
            maxWidth: <FilterBoxMaxWidthDemo center title="Maximum width" />,
            disabled: <FilterBoxDisabledDemo center title="Disabled" />,
        }}
    />
);

export default Page;
