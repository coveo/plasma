import {
    BadgeCritical,
    BadgeInfo,
    BadgePrimary,
    BadgeRecommended,
    BadgeSecondary,
    BadgeTertiary,
    BadgeWarning,
    Group,
    Stack,
} from '@coveord/plasma-mantine';

const Demo = () => (
    <Stack gap="sm">
        <Group gap="sm">
            <BadgePrimary>Primary</BadgePrimary>
            <BadgeSecondary>Secondary</BadgeSecondary>
            <BadgeTertiary>Tertiary</BadgeTertiary>
        </Group>
        <Group gap="sm">
            <BadgeInfo>Info</BadgeInfo>
            <BadgeRecommended>Recommended</BadgeRecommended>
            <BadgeWarning>Warning</BadgeWarning>
            <BadgeCritical>Critical</BadgeCritical>
        </Group>
    </Stack>
);
export default Demo;
