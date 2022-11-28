import {LoadingMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../../building-blocs/PageLayout';
import LoadingExample from '../../../examples/legacy/feedback/Loading/Loading.example.tsx';
import LoadingFullcontent from '../../../examples/legacy/feedback/Loading/LoadingFullcontent.example.tsx';
import LoadingSpinner from '../../../examples/legacy/feedback/Loading/LoadingSpinner.example.tsx';

export default () => (
    <PageLayout
        id="Loading"
        title="Loading Spinner"
        section="Feedback"
        description="A loading spinner indicates that content or data is actively being loaded."
        componentSourcePath="/loading/Loading.tsx"
        code={LoadingExample}
        propsMetadata={LoadingMetadata}
        examples={{
            fullContent: {code: LoadingFullcontent, title: 'Vertically centered'},
            loadingSpinner: {code: LoadingSpinner, title: 'Loading spinner that can be used in other components'},
        }}
    />
);
