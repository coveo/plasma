import {LoadingMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {Loading} from '@coveord/plasma-react';

    export default () => <Loading />
`;

const fullContent = `
    import {Loading} from '@coveord/plasma-react';

    export default () => <Loading fullContent />
`;

const loadingSpinner = `
    import {LoadingSpinner} from '@coveord/plasma-react';

    export default () => (
        <>
            <LoadingSpinner size={16} />
            <LoadingSpinner />
            <LoadingSpinner size={32} />
        </>
    );
`;

export default () => (
    <PageLayout
        id="Loading"
        title="Loading Spinner"
        section="Feedback"
        description="A loading spinner indicates that content or data is actively being loaded."
        componentSourcePath="/loading/Loading.tsx"
        code={code}
        propsMetadata={LoadingMetadata}
        examples={{
            fullContent: {code: fullContent, title: 'Vertically centered'},
            loadingSpinner: {code: loadingSpinner, title: 'Loading spinner that can be used in other components'},
        }}
    />
);
