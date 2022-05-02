import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {FilterBoxConnected} from '@coveord/plasma-react';

    export default () => <FilterBoxConnected id="filter-box-id" filterPlaceholder="Custom Placeholder" />;
`;

const maxWidth = `
    import {FilterBoxConnected} from '@coveord/plasma-react';

    export default () => <FilterBoxConnected id="filter-box-id-2" maxWidth={160} />;
`;

export default () => (
    <PageLayout
        id="FilterBoxConnected"
        title="Filter Box"
        section="Form"
        description="A filter box allows users to enter text to filter data. It is frequently used with tables and dropdown menus."
        componentSourcePath="/filterBox/FilterBoxConnected.tsx"
        code={code}
        examples={{
            maxWidth: {code: maxWidth, title: 'Maximum width'},
        }}
    />
);
