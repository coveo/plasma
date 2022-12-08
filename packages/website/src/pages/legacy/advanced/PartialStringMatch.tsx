import {PartialStringMatchMetadata} from '@coveord/plasma-components-props-analyzer';
import PartialStringMatchDemo from '@examples/legacy/advanced/PartialStringMatch/PartialStringMatch.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="PartialStringMatch"
        title="Partial String Match"
        section="Advanced"
        propsMetadata={PartialStringMatchMetadata}
        description="Highlights a string searched for in any DOM tree."
        demo={<PartialStringMatchDemo />}
        sourcePath="/packages/react/src/components/partial-string-match/PartialStringMatch.tsx"
    />
);

export default DemoPage;
