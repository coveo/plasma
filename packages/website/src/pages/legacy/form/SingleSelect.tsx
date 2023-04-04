import {SingleSelectConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import SingleSelectDemo from '@examples/legacy/form/SingleSelect/main.demo?demo';
import SingleSelectWithFilterDemo from '@examples/legacy/form/SingleSelect/withFilter.demo?demo';
import SingleSelectWithInfiniteScrollDemo from '@examples/legacy/form/SingleSelect/withInfiniteScroll.demo?demo';
import SingleSelectWithPredicateDemo from '@examples/legacy/form/SingleSelect/withPredicates.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="SingleSelectConnected"
        title="Single Select"
        section="Form"
        description="A single select allows users to select only one option from a list. It is typically used when there are a large number of options."
        sourcePath="/packages/react/src/components/select/SingleSelectConnected.tsx"
        demo={<SingleSelectDemo center />}
        propsMetadata={SingleSelectConnectedMetadata}
        examples={{
            withFilter: <SingleSelectWithFilterDemo center title="With a filter box" />,
            withPredicate: <SingleSelectWithPredicateDemo center title="With predicates options" />,
            withInfiniteScroll: (
                <SingleSelectWithInfiniteScrollDemo
                    center
                    title="With infinite scroll and server side handling of pagination and filtering"
                />
            ),
        }}
    />
);

export default Page;
