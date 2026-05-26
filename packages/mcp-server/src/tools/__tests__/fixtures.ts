import type {ComponentData, LlmsData} from '../types.js';

export const BUTTON: ComponentData = {
    name: 'Button',
    description: 'A clickable button component',
    content: `# Button\n\nUse the Button to trigger actions.\n\n## Props\n\n| Prop | Type | Default |\n|------|------|---------|\n| variant | string | 'filled' |\n| disabled | boolean | false |\n\n## Usage\n\nImport from \`@coveord/plasma-mantine\`.`,
};

export const MODAL: ComponentData = {
    name: 'Modal',
    description: 'A dialog overlay component',
    content: `# Modal\n\nUse the Modal to display overlay dialogs.\n\n## Usage\n\nImport from \`@coveord/plasma-mantine\`.`,
};

export const ALERT: ComponentData = {
    name: 'Alert',
    description: 'An alert notification component',
    content: `# Alert\n\nUse the Alert to display feedback messages.\n\n## Props\n\n| Prop | Type |\n|------|------|\n| color | string |\n\n## Usage\n\nImport from \`@coveord/plasma-mantine\`.`,
};

export const makeData = (components: ComponentData[] = [BUTTON, MODAL, ALERT]): LlmsData => ({
    index: 'index content',
    full: 'full content',
    skill: 'skill content',
    components,
});
