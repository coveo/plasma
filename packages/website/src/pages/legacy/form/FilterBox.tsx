import {FilterBoxConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import FilterBoxExample from '@examples/legacy/form/FilterBox/FilterBox.example.tsx';
import FilterBoxDisabledExample from '@examples/legacy/form/FilterBox/FilterBoxDisabled.example.tsx';
import FilterBoxMaxWidthExample from '@examples/legacy/form/FilterBox/FilterBoxMaxWidth.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="FilterBoxConnected"
        title="Filter Box"
        section="Form"
        description="A filter box allows users to enter text to filter data. It is frequently used with tables and dropdown menus."
        componentSourcePath="/filterBox/FilterBoxConnected.tsx"
        code={FilterBoxExample}
        propsMetadata={FilterBoxConnectedMetadata}
        examples={{
            maxWidth: {code: FilterBoxMaxWidthExample, title: 'Maximum width'},
            disabled: {code: FilterBoxDisabledExample, title: 'Disabled'},
        }}
    />
);
