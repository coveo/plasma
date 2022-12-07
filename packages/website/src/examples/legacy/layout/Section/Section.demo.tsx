import {Section} from '@coveord/plasma-react';

export default () => (
    <Section title="Section title" description="Section description.">
        <Section level={2} mods={'mod-header-padding'} title="Look at my cool mod">
            <div>Children</div>
        </Section>
    </Section>
);
