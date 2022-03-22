import code from '@examples/MultiSelect/main.example.tsx';
import withFilter from '@examples/MultiSelect/withFilter.example.tsx';
import withPredicates from '@examples/MultiSelect/withPredicates.example.tsx';
import * as React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="MultiSelectConnected"
        title="Multi Select"
        section="Form"
        description="A multi select allows users to select multiple options from a list. It is typically used when there are a large number of options."
        componentSourcePath="/select/MultiSelectConnected.tsx"
        code={code}
        examples={{
            withFilter: {code: withFilter, title: 'With a filter and custom values'},
            withPredicates: {code: withPredicates, title: 'With predicates'},
        }}
    />
);
