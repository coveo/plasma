import {Plasmantine} from '@coveord/plasma-mantine';
import type {Preview} from '@storybook/react';
import '@mantine/core/styles.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <Plasmantine>
                <Story />
            </Plasmantine>
        ),
    ],
};

export default preview;
