import type {ComponentData, LlmsData} from '../types.js';

export const makeComponent = (name: string, description: string, content: string): ComponentData => ({
    name,
    description,
    content,
});

export const BUTTON: ComponentData = makeComponent(
    'Button',
    'A clickable button component',
    `# Button\n\nUse the Button to trigger actions.\n\n## Props\n\n| Prop | Type | Default |\n|------|------|---------|\n| variant | string | 'filled' |\n| disabled | boolean | false |\n\n## Usage\n\nImport from \`@coveord/plasma-mantine\`.`,
);

export const MODAL: ComponentData = makeComponent(
    'Modal',
    'A dialog overlay component',
    `# Modal\n\nUse the Modal to display overlay dialogs.\n\n## Usage\n\nImport from \`@coveord/plasma-mantine\`.`,
);

export const ALERT: ComponentData = makeComponent(
    'Alert',
    'An alert notification component',
    `# Alert\n\nUse the Alert to display feedback messages.\n\n## Props\n\n| Prop | Type |\n|------|------|\n| color | string |\n\n## Usage\n\nImport from \`@coveord/plasma-mantine\`.`,
);

export const makeData = (components: ComponentData[] = [BUTTON, MODAL, ALERT]): LlmsData => ({
    index: 'index content',
    full: 'full content',
    skill: 'skill content',
    components,
});
