import {Button as MantineButton, Group, Stack} from '@coveord/plasma-mantine';
import {Section} from '@coveord/plasma-react';

export const Button = () => {
    const somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));

    return (
        <Section className="section">
            <h2>Button</h2>
            <Stack spacing="sm">
                <Group spacing="sm">
                    <MantineButton>Primary button</MantineButton>
                    <MantineButton variant="outline">Secondary button</MantineButton>
                    <MantineButton disabled>disabled</MantineButton>
                    <MantineButton
                        onClick={async () => {
                            await somethingAsync(300);
                        }}
                    >
                        Save button
                    </MantineButton>
                </Group>
                <Group spacing="sm">
                    <MantineButton variant="subtle">Subtle button</MantineButton>
                    <MantineButton variant="light">Light button</MantineButton>
                    <MantineButton>Filled button</MantineButton>
                    <MantineButton variant="outline">Outline button</MantineButton>
                    <MantineButton variant="default">Default button</MantineButton>
                </Group>
                <Group spacing="sm">
                    <MantineButton color="info">Info button</MantineButton>
                    <MantineButton color="critical">Critical button</MantineButton>
                    <MantineButton color="new">New button</MantineButton>
                    <MantineButton color="warning">Warning button</MantineButton>
                    <MantineButton color="success">Success button</MantineButton>
                </Group>
                <Group spacing="sm">
                    <MantineButton variant="outline" color="info">
                        Info button
                    </MantineButton>
                    <MantineButton variant="outline" color="critical">
                        Critical button
                    </MantineButton>
                    <MantineButton variant="outline" color="new">
                        New button
                    </MantineButton>
                    <MantineButton variant="outline" color="warning">
                        Warning button
                    </MantineButton>
                    <MantineButton variant="outline" color="success">
                        Success button
                    </MantineButton>
                </Group>
                <Group spacing="sm">
                    <MantineButton.Group>
                        <MantineButton variant="default">First</MantineButton>
                        <MantineButton variant="default">Second</MantineButton>
                        <MantineButton variant="default">Third</MantineButton>
                    </MantineButton.Group>
                    <MantineButton.Group orientation="vertical">
                        <MantineButton variant="default">First</MantineButton>
                        <MantineButton variant="default">Second</MantineButton>
                        <MantineButton variant="default">Third</MantineButton>
                    </MantineButton.Group>
                </Group>
                <Group spacing="sm">
                    <MantineButton size="xs">XS size</MantineButton>
                    <MantineButton size="sm">SM size</MantineButton>
                    <MantineButton size="md">MD size</MantineButton>
                    <MantineButton size="lg">LG size</MantineButton>
                    <MantineButton size="xl">XL size</MantineButton>
                </Group>
                <Group spacing="sm">
                    <MantineButton radius="xs">XS radius</MantineButton>
                    <MantineButton radius="sm">SM radius</MantineButton>
                    <MantineButton radius="md">MD radius</MantineButton>
                    <MantineButton radius="lg">LG radius</MantineButton>
                    <MantineButton radius="xl">XL radius</MantineButton>
                </Group>
            </Stack>
        </Section>
    );
};
