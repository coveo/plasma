import {Section} from '@coveord/plasma-react';

const Demo = () => (
    <>
        <Section mods={'mod-header-padding'} title="This is a level 1 section" description="Section description." />
        <Section
            mods={'mod-form-top-bottom-padding'}
            title="This is a level 2 section"
            description="Section description."
        />
        <Section mods={'material-card'} title="This is a level 3 section" description="Section description." />
    </>
);
export default Demo;
