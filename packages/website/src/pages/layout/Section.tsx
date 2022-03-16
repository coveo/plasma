import * as React from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {Section} from '@coveord/plasma-react';

    export default () => (
        <Section title="Section title" description="Section description.">
            <Section title="Section title inside the anoter Section">
                <div> I'm a div child inside a Section inside a Section yes I look weird</div>
            </Section>
        </Section>
    );
`;

const withLevel = `
    import * as React from 'react';
    import {Section} from '@coveord/plasma-react';

    export default () => (
        <>
            <Section title="This is a level 1 section" description="Section description." level={1} />
            <Section title="This is a level 2 section" description="Section description." level={2} />
            <Section title="This is a level 3 section" description="Section description." level={3} />
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
        examples={{withLevel: {code: withLevel, title: 'With Level option'}}}
    />
);

export default SectionExamples;
