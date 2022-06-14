const code = `
    import {LinkSvg} from '@coveord/plasma-react';

    export default () => (
        <LinkSvg url="https://www.coveo.com/" svg={{svgName: 'external', svgClass: 'icon mod-14 ml1'}}>
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
    />
);
