import {LoadingMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../../building-blocs/PageLayout';
import LoadingDemo from '../../../examples/legacy/feedback/Loading/Loading.demo.tsx';
import LoadingFullcontent from '../../../examples/legacy/feedback/Loading/LoadingFullcontent.demo.tsx';
import LoadingSpinner from '../../../examples/legacy/feedback/Loading/LoadingSpinner.demo.tsx';

const DemoPage = () => (
    <PageLayout
        id="Loading"
        title="Loading Spinner"
        section="Feedback"
        description="A loading spinner indicates that content or data is actively being loaded."
        componentSourcePath="/loading/Loading.tsx"
        demo={<LoadingDemo center />}
        propsMetadata={LoadingMetadata}
        examples={{
            fullContent: <LoadingFullcontent center title="Vertically centered" />,
            loadingSpinner: <LoadingSpinner center title="Loading spinner that can be used in other components" />,
        }}
    />
);

export default DemoPage;
