import {PartialStringMatchMetadata} from '@coveord/plasma-components-props-analyzer';
import PartialStringMatchExample from '@examples/legacy/advanced/PartialStringMatch/PartialStringMatch.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="PartialStringMatch"
        title="Partial String Match"
        section="Advanced"
        propsMetadata={PartialStringMatchMetadata}
        description="Highlights a string searched for in any DOM tree."
        componentSourcePath="/partial-string-match/PartialStringMatch.tsx"
        code={PartialStringMatchExample}
    />
);
