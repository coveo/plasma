import * as React from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {BannerContainer} from '@coveord/plasma-react';

    export default () => (
        <BannerContainer />
    );
`;

export const BannerExamples = () => (
    <PageLayout
        id="BannerContainer"
        componentSourcePath="/banner/BannerContainer.tsx"
        title="Banner"
        section="Layout"
        thumbnail="placeholder"
        code={code}
    />
);
export default BannerExamples;
