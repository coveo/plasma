import {SingleSelectConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/form/SingleSelect/main.demo.tsx';
import withFilter from '@examples/legacy/form/SingleSelect/withFilter.demo.tsx';
import withInfiniteScroll from '@examples/legacy/form/SingleSelect/withInfiniteScroll.demo.tsx';
import withPredicate from '@examples/legacy/form/SingleSelect/withPredicates.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="SingleSelectConnected"
        title="Single Select"
        section="Form"
        description="A single select allows users to select only one option from a list. It is typically used when there are a large number of options."
        componentSourcePath="/select/SingleSelectConnected.tsx"
        code={code}
        propsMetadata={SingleSelectConnectedMetadata}
        examples={{
            withFilter: {code: withFilter, title: 'With a filter box'},
            withPredicate: {code: withPredicate, title: 'With predicates options'},
            withInfiniteScroll: {
                code: withInfiniteScroll,
                title: 'With infinite scroll and server side handling of pagination and filtering',
            },
        }}
    />
);
