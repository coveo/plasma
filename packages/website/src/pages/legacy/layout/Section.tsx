import {SectionMetadata} from '@coveord/plasma-components-props-analyzer';
import SectionExample from '@examples/legacy/layout/Section/Section.example.tsx';
import SectionLevelExample from '@examples/legacy/layout/Section/SectionLevel.example.tsx';
import SectionWithModsExample from '@examples/legacy/layout/Section/SectionWithMods.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const SectionExamples = () => (
    <PageLayout
        id="Section"
        componentSourcePath="/section/Section.tsx"
        title="Section"
        section="Layout"
        thumbnail="placeholder"
        code={SectionExample}
        examples={{
            withLevel: {code: SectionLevelExample, title: 'With Level option'},
            withMods: {code: SectionWithModsExample, title: 'With Mods option'},
        }}
        propsMetadata={SectionMetadata}
    />
);

export default SectionExamples;
