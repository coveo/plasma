import ChipDemo from '@examples/form/chip/Chip.demo?demo';
import ChipDisabledDemo from '@examples/form/chip/ChipDisabled.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const ChipPage = () => (
    <PageLayout
        id="Chip"
        title="Chip"
        section="Form"
        description="A chip is a versatile UI element for selecting or representing values."
        demo={<ChipDemo center />}
        examples={{
            disabled: <ChipDisabledDemo center title="Disabled" />,
        }}
        sourcePath="/packages/mantine/src/components/chip/Chip.tsx"
    />
);

export default ChipPage;
