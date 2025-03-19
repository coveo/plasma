import {Anchor, AppShell, Box, Container, Stack, Text, Title} from '@coveord/plasma-mantine';
import {ExternalSize16Px} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';
import {Tile} from '../building-blocs/Tile';

export const Home = () => (
    <AppShell.Main>
        <Container size="xl" py="xl">
            <Stack gap="xl">
                <WelcomeToPlasma />
                <FoundationsPages />
                <LayoutPages />
                <FormPages />
            </Stack>
        </Container>
    </AppShell.Main>
);

const WelcomeToPlasma: FunctionComponent = () => (
    <>
        <Title order={1}>
            <Text fz="lg" fw={500} inherit>
                Welcome to
            </Text>{' '}
            <Text className="page-title">PLASMA</Text>
        </Title>
        <Stack gap="xs">
            <Text>Coveo’s platform design system & ionized Vapor.</Text>
            <Text>
                Learn more about our brand, our values and our story by visiting our{' '}
                <Anchor href="https://brand.coveo.com/">
                    brand page
                    <Box component={ExternalSize16Px} height={16} ml="xxs" />
                </Anchor>
                .
            </Text>
            <Text>
                Be part of the progress! Contribute to Plasma on{' '}
                <Anchor href="https://github.com/coveo/plasma#readme">
                    GitHub
                    <Box component={ExternalSize16Px} height={16} ml="xxs" />
                </Anchor>
                .
            </Text>
        </Stack>
    </>
);

const FoundationsPages: FunctionComponent = () => (
    <Stack gap="sm">
        <Title order={2}>Foundations</Title>
        <div className="tile-grid">
            <Tile
                title="Iconography"
                description="Icons are used to visually represent actions, functionalities, and features."
                href="foundations/Iconography"
                thumbnail="iconography"
            />
            <Tile
                title="Colors"
                description="The colors that give Plasma its identity"
                href="foundations/Colors"
                thumbnail="colors"
            />
        </div>
    </Stack>
);

const LayoutPages: FunctionComponent = () => (
    <Stack gap="sm" className="section">
        <Title order={2}>Layout</Title>
        <div className="tile-grid">
            <Tile
                title="Header"
                description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional call to actions."
                href="layout/Header"
                thumbnail="header"
            />
            <Tile
                title="Sticky footer"
                description="A page footer that sticks to the bottom of the screen."
                href="layout/StickyFooter"
            />
            <Tile
                title="Table"
                description="A table displays large quantities of items or data in a list format."
                href="layout/Table"
            />
        </div>
    </Stack>
);

const FormPages: FunctionComponent = () => (
    <Stack gap="sm" className="section">
        <Title order={2}>Form</Title>
        <div className="tile-grid">
            <Tile
                title="Code Editor"
                description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
                href="form/CodeEditor"
                thumbnail="codeEditor"
            />
            <Tile
                title="Collection"
                description="A collection allows users to provide multiple inputs for the same parameter. Each input appears on a different line."
                href="form/Collection"
            />
        </div>
    </Stack>
);

export default Home;
