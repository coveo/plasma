import {LinkSvgMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../../building-blocs/PageLayout';

const code = `
    import {LinkSvg} from '@coveord/plasma-react';
    import {ExternalSize16Px} from '@coveord/plasma-react-icons';

    export default () => (
        <LinkSvg url="https://www.coveo.com/" icon={ExternalSize16Px}>
            Learn more about Coveo
        </LinkSvg>
    );
`;

export default () => (
    <PageLayout
        id="LinkSvg"
        title="Link SVG"
        section="Advanced"
        description="A SVG that acts as a link."
        componentSourcePath="/svg/LinkSvg.tsx"
        code={code}
        propsMetadata={LinkSvgMetadata}
    />
);
