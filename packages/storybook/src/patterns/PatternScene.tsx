import {
    Box,
    Center,
    Group,
    Header,
    MantineTable as Table,
    Paper,
    SimpleGrid,
    Skeleton,
    Stack,
    StatusToken,
    type StatusTokenVariant,
    Text,
    Title,
} from '@coveord/plasma-mantine';
import type {ReactNode} from 'react';

export const SCENE_HEIGHT = 340;

interface PatternSceneProps {
    /** Position in the decision guide, so readers can match the scene to its row. */
    index?: number;
    /** What the scene shows, in a few words. */
    title: string;
    /** The rule the scene illustrates. Rendered as text so the page reads the same without the picture. */
    caption: string;
    children: ReactNode;
}

/**
 * A fixed-height frame for a miniature Administration Console scene.
 * Every scene on a pattern page has the same size, so readers can compare them at a glance.
 * The `transform` makes the frame the containing block of fixed-position children, which lets a `Prompt`
 * rendered with `withinPortal={false}` stay inside the frame.
 */
export const PatternScene = ({index, title, caption, children}: PatternSceneProps) => (
    <Stack component="figure" gap="xs" m={0}>
        <Paper
            withBorder
            radius="md"
            h={SCENE_HEIGHT}
            style={{position: 'relative', overflow: 'hidden', transform: 'translateZ(0)'}}
        >
            {children}
        </Paper>
        <Box component="figcaption">
            <Text size="sm" fw={500}>
                {index !== undefined ? `${index}. ` : ''}
                {title}
            </Text>
            <Text size="sm" c="dimmed">
                {caption}
            </Text>
        </Box>
    </Stack>
);

/** Lays scenes out in equal columns. */
export const PatternSceneGrid = ({children}: {children: ReactNode}) => (
    <SimpleGrid cols={{base: 1, sm: 2}} spacing="lg" verticalSpacing="xl" my="md">
        {children}
    </SimpleGrid>
);

interface ScenePageProps {
    /** Page title. Leave it out to show a grey bar instead, so the words do not compete with the example. */
    title?: string;
    /** Set to false when the example fills the page and a title bar would only add noise. */
    withTitle?: boolean;
    /** Grey bars standing in for page content that is not part of the example. */
    placeholderLines?: number;
    children?: ReactNode;
}

/**
 * Centers a component in the frame, for scenes where the surrounding page adds nothing.
 * The content is centered at its own width; give inputs and alerts an explicit `w` so they line up across scenes.
 */
export const SceneCenter = ({children}: {children: ReactNode}) => (
    <Center h="100%" p="lg">
        {children}
    </Center>
);

/** A grey bar standing in for a line of text that is not part of the example. */
export const SceneLine = ({w = '80%', h = 12, inline = false}: {w?: string | number; h?: number; inline?: boolean}) => (
    <Skeleton
        h={h}
        w={w}
        radius="xl"
        animate={false}
        style={inline ? {display: 'inline-block', verticalAlign: 'middle'} : undefined}
    />
);

/**
 * The header of an Administration Console page: optional breadcrumbs and a title.
 * Words are replaced by grey bars so the header reads as a header, not as a specific page.
 */
export const ScenePageHeader = ({breadcrumbs = false}: {breadcrumbs?: boolean}) => (
    <Header p={0} variant="secondary">
        {breadcrumbs && (
            <Header.Breadcrumbs>
                <Header.BreadcrumbAnchor href="#">
                    <SceneLine inline w={56} h={10} />
                </Header.BreadcrumbAnchor>
                <Header.BreadcrumbAnchor href="#">
                    <SceneLine inline w={72} h={10} />
                </Header.BreadcrumbAnchor>
            </Header.Breadcrumbs>
        )}
        <SceneLine inline w={140} h={18} />
    </Header>
);

/** The key-value rows of a detail page, as grey bars. */
export const SceneDetails = ({rows = 3}: {rows?: number}) => (
    <Stack gap="sm">
        {Array.from({length: rows}, (_, row) => (
            <Group key={row} gap="lg" wrap="nowrap">
                <SceneLine w={88} h={10} />
                <SceneLine w={row % 2 ? '45%' : '60%'} />
            </Group>
        ))}
    </Stack>
);

/** The table of a listing page: a header row and one row per status, each with a status token and grey bars. */
export const SceneTable = ({rows}: {rows: StatusTokenVariant[]}) => (
    <Table layout="fixed">
        <Table.Thead>
            <Table.Tr>
                <Table.Th w="45%">
                    <SceneLine w={48} h={10} />
                </Table.Th>
                <Table.Th>
                    <SceneLine w={56} h={10} />
                </Table.Th>
                <Table.Th>
                    <SceneLine w={40} h={10} />
                </Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {rows.map((variant, row) => (
                <Table.Tr key={row}>
                    <Table.Td>
                        <Group gap="sm" wrap="nowrap">
                            <StatusToken variant={variant} size="sm" />
                            <SceneLine w={row % 2 ? '55%' : '75%'} />
                        </Group>
                    </Table.Td>
                    <Table.Td>
                        <SceneLine w="70%" />
                    </Table.Td>
                    <Table.Td>
                        <SceneLine w="50%" />
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
);

/** A miniature Administration Console page: a title, the example content, then grey bars for the rest. */
export const ScenePage = ({title, withTitle = true, placeholderLines = 2, children}: ScenePageProps) => (
    <Stack gap="sm" p="md" h="100%">
        {title && <Title order={4}>{title}</Title>}
        {!title && withTitle && <SceneLine w="35%" h={18} />}
        {children}
        {Array.from({length: placeholderLines}, (_, line) => (
            <SceneLine key={line} w={line % 2 ? '55%' : '80%'} />
        ))}
    </Stack>
);
