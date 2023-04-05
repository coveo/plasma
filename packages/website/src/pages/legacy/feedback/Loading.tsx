import {LoadingMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../../building-blocs/PageLayout';
import LoadingDemo from '../../../examples/legacy/feedback/Loading/Loading.demo?demo';
import LoadingFullContentDemo from '../../../examples/legacy/feedback/Loading/LoadingFullcontent.demo?demo';
import LoadingSpinnerDemo from '../../../examples/legacy/feedback/Loading/LoadingSpinner.demo?demo';

const DemoPage = () => (
    <PageLayout
        id="Loading"
        title="Loading Spinner"
        section="Feedback"
        description="A loading spinner indicates that content or data is actively being loaded."
        demo={<LoadingDemo center />}
        sourcePath="/packages/react/src/components/loading/Loading.tsx"
        propsMetadata={LoadingMetadata}
        examples={{
            fullContent: <LoadingFullContentDemo center title="Vertically centered" />,
            loadingSpinner: <LoadingSpinnerDemo center title="Loading spinner that can be used in other components" />,
        }}
    />
);

export default DemoPage;
