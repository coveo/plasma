import {MultiSelectConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import MultiSelectDemo from '@examples/legacy/form/MultiSelect/main.demo.tsx';
import MultiSelectWithFilterDemo from '@examples/legacy/form/MultiSelect/withFilter.demo.tsx';
import MultiSelectWithPredicates from '@examples/legacy/form/MultiSelect/withPredicates.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="MultiSelectConnected"
        title="Multi Select"
        section="Form"
        description="A multi select allows users to select multiple options from a list. It is typically used when there are a large number of options."
        sourcePath="/packages/react/src/components/select/MultiSelectConnected.tsx"
        demo={<MultiSelectDemo center />}
        propsMetadata={MultiSelectConnectedMetadata}
        examples={{
            withFilter: <MultiSelectWithFilterDemo center title="With a filter and custom values" />,
            withPredicates: <MultiSelectWithPredicates center title="With predicates" />,
        }}
    />
);

export default Page;
