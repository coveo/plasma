const code = `
    import {SplitLayout} from '@coveord/plasma-react';

    export default () => (
        <SplitLayout
            leftChildren={<p className="p1">Hello from the left!</p>}
            rightChildren={<p className="p1">Hello from the right!</p>}
        />
    );
`;

const noBorder = `
    import {SplitLayout, SplitLayoutMods} from '@coveord/plasma-react';

    export default () => (
        <SplitLayout
            mods={SplitLayoutMods.noBorder}
            leftChildren={<p className="p1">Hello from the left!</p>}
            rightChildren={<p className="p1">Hello from the right!</p>}
        />
    );
`;

const SplitLayoutExamples = () => (
    <PageLayout
        id="SplitLayout"
        title="Split Layout"
        section="Layout"
        description="A split layout organizes information in two vertical columns."
        componentSourcePath="/splitlayout/SplitLayout.tsx"
        code={code}
        layout="vertical"
        examples={{noBorder: {code: noBorder, title: 'Without a border'}}}
    />
);

export default SplitLayoutExamples;
