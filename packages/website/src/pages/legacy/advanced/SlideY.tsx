import {SlideYMetadata} from '@coveord/plasma-components-props-analyzer';
import SlideYDemo from '@examples/legacy/advanced/SlideY/main.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="SlideY"
        title="Slide Y"
        section="Advanced"
        description="Allows to hide and show content using a vertical expand animation."
        demo={<SlideYDemo />}
        sourcePath="/packages/react/src/animations/SlideY.tsx"
        propsMetadata={SlideYMetadata}
    />
);

export default DemoPage;
