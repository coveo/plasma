import {Plasmantine} from '@coveord/plasma-mantine';
import type {Preview} from '@storybook/react-vite';
import '@mantine/core/styles.css';

const preview: Preview = {
    decorators: [
        (Story) => (
            <Plasmantine>
                <Story />
            </Plasmantine>
        ),
    ],
};

export default preview;
