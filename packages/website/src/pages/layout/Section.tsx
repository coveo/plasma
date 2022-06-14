const code = `
    import {Section} from '@coveord/plasma-react';

    export default () => (
        <Section title="Section title" description="Section description.">
            <Section level={2} mods={'mod-header-padding'}  title="Look at my cool mod">
                <div>Children</div>
            </Section>
        </Section>
    );
`;

const withLevel = `
    import {Section} from '@coveord/plasma-react';

    export default () => (
        <>
            <Section title="This is a level 1 section" description="Section description." level={1} />
            <Section title="This is a level 2 section" description="Section description." level={2} />
            <Section title="This is a level 3 section" description="Section description." level={3} />
        </>
    );
`;

const withMods = `
    import {Section} from '@coveord/plasma-react';

    export default () => (
        <>
            <Section mods={'mod-header-padding'} title="This is a level 1 section" description="Section description." />
            <Section mods={'mod-form-top-bottom-padding'}title="This is a level 2 section" description="Section description." />
            <Section mods={'material-card'}title="This is a level 3 section" description="Section description." />
        </>
    );
`;

const SectionExamples = () => (
    <PageLayout
        id="Section"
        componentSourcePath="/section/Section.tsx"
        title="Section"
        section="Layout"
        thumbnail="placeholder"
        code={code}
        examples={{
            withLevel: {code: withLevel, title: 'With Level option'},
            withMods: {code: withMods, title: 'With Mods option'},
        }}
    />
);

export default SectionExamples;
