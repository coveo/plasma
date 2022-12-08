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
        componentSourcePath="/partial-string-match/PartialStringMatch.tsx"
        demo={<PartialStringMatchDemo />}
    />
);

export default DemoPage;
