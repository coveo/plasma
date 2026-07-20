import type {ComponentData, ContentGuidelineData, LlmsData} from '../types.js';

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

export const VOICE_GUIDELINE: ContentGuidelineData = {
    name: 'Content Guidelines — Voice',
    slug: 'Voice',
    description: "Coveo's required voice qualities (clear, human, helpful) and how to apply tone by context.",
    content: `## Voice of Coveo\n\nVoice is fixed. Every piece of UX copy must be **clear**, **human**, and **helpful**.\n\n### Clear\n\nUse plain words. Be as short as possible.\n\n### Human\n\nSpeak directly to the user.\n\n### Helpful\n\nExplain what the user can do, not what the system did.`,
};

export const WRITING_MECHANICS_GUIDELINE: ContentGuidelineData = {
    name: 'Content Guidelines — Writing Mechanics',
    slug: 'WritingMechanics',
    description: 'Required rules for grammar, punctuation, capitalization, structure, and length in Coveo UX copy.',
    content: `## Capitalization\n\nUse sentence case for all UI text.\n\n## Punctuation\n\nAdd a period after full sentences. Do not add a period after fragments.`,
};

export const makeData = (
    components: ComponentData[] = [BUTTON, MODAL, ALERT],
    contentGuidelines: ContentGuidelineData[] = [VOICE_GUIDELINE, WRITING_MECHANICS_GUIDELINE],
): LlmsData => ({
    index: 'index content',
    full: 'full content',
    skill: 'skill content',
    components,
    contentGuidelines,
});
