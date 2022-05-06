import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {Loading} from '@coveord/plasma-react';

    export default () => <Loading />
`;

const fullContent = `
    import {Loading} from '@coveord/plasma-react';

    export default () => <Loading fullContent />
`;

export default () => (
    <PageLayout
        id="Loading"
        title="Loading Spinner"
        section="Feedback"
        description="A loading spinner indicates that content or data is actively being loaded."
        componentSourcePath="/loading/Loading.tsx"
        code={code}
        examples={{
            fullContent: {code: fullContent, title: 'Vertically centered'},
        }}
    />
);
