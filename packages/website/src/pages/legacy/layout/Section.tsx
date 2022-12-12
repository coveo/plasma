import {SectionMetadata} from '@coveord/plasma-components-props-analyzer';
import SectionDemo from '@examples/legacy/layout/Section/Section.demo.tsx';
import SectionLevelDemo from '@examples/legacy/layout/Section/SectionLevel.demo.tsx';
import SectionWithModsDemo from '@examples/legacy/layout/Section/SectionWithMods.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const SectionDemos = () => (
    <PageLayout
        id="Section"
        sourcePath="/packages/react/src/components/section/Section.tsx"
        title="Section"
        section="Layout"
        thumbnail="placeholder"
        demo={<SectionDemo />}
        examples={{
            withLevel: <SectionLevelDemo title="With Level option" />,
            withMods: <SectionWithModsDemo title="With Mods option" />,
        }}
        propsMetadata={SectionMetadata}
    />
);

export default SectionDemos;
