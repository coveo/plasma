import {LastUpdatedMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/LastUpdated/LastUpdated.example.tsx';
import specificTime from '@examples/LastUpdated/LastUpdatedSpecifiedTime.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="LastUpdated"
        title="Last Updated"
        section="Feedback"
        description="A “last updated” string displays the time a set of data has been last updated by a system."
        componentSourcePath="/lastUpdated/LastUpdated.tsx"
        code={code}
        propsMetadata={LastUpdatedMetadata}
        examples={{specificTime: {code: specificTime, title: 'Specific date'}}}
    />
);
