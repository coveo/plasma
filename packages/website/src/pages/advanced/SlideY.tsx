import code from '@examples/SlideY/main.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="SlideY"
        title="Slide Y"
        section="Advanced"
        description="Allows to hide and show content using a vertical expand animation."
        sourcePath="packages/react/src/animations/SlideY.tsx"
        code={code}
    />
);
