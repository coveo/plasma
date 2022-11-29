import {MultiSelectConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/form/MultiSelect/main.demo.tsx';
import withFilter from '@examples/legacy/form/MultiSelect/withFilter.demo.tsx';
import withPredicates from '@examples/legacy/form/MultiSelect/withPredicates.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="MultiSelectConnected"
        title="Multi Select"
        section="Form"
        description="A multi select allows users to select multiple options from a list. It is typically used when there are a large number of options."
        componentSourcePath="/select/MultiSelectConnected.tsx"
        code={code}
        propsMetadata={MultiSelectConnectedMetadata}
        examples={{
            withFilter: {code: withFilter, title: 'With a filter and custom values'},
            withPredicates: {code: withPredicates, title: 'With predicates'},
        }}
    />
);
