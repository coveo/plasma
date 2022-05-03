import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
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
        withPropsTable={false}
        section="Layout"
        thumbnail="placeholder"
        code={code}
    />
);
export default BannerExamples;
