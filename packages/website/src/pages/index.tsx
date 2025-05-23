import {Anchor, AppShell, Container, Title, Stack, Text, Box} from '@coveord/plasma-mantine';
import {ExternalSize16Px} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';
import {withTranslation, WithTranslation} from 'react-i18next';
import {Tile} from '../building-blocs/Tile';

export const Home: FunctionComponent<WithTranslation> = ({t, i18n, tReady}) => (
    <AppShell.Main>
        <Container size="xl" py="xl">
            <Stack gap="xl">
                <WelcomeToPlasma t={t} i18n={i18n} tReady={tReady} />
                <FoundationsPages t={t} i18n={i18n} tReady={tReady} />
                <LayoutPages t={t} i18n={i18n} tReady={tReady} />
                <FormPages t={t} i18n={i18n} tReady={tReady} />
            </Stack>
        </Container>
    </AppShell.Main>
);

interface WelcomeToPlasmaProps extends WithTranslation {}

export const WelcomeToPlasma: FunctionComponent<WelcomeToPlasmaProps> = ({t}) => (
    <>
        <Title order={1}>
            <Text fz="lg" fw={500} inherit>
                {t('index_plasma-title-start')}
            </Text>{' '}
            <Text className="page-title">{t('index_plasma-title-end')}</Text>
        </Title>
        <Stack gap="xs">
            <Text>{t('index_platform-description')}</Text>
            <Text>
                {t('index_brand-page')}{' '}
                <Anchor href="https://brand.coveo.com/">
                    {t('index_brand-page-link')}
                    <Box component={ExternalSize16Px} height={16} ml="xxs" />
                </Anchor>
                .
            </Text>
            <Text>
                {t('index_contribute-github')}{' '}
                <Anchor href="https://github.com/coveo/plasma#readme">
                    {t('index_github-link')}
                    <Box component={ExternalSize16Px} height={16} ml="xxs" />
                </Anchor>
                .
            </Text>
        </Stack>
    </>
);

const FoundationsPages: FunctionComponent<WithTranslation> = ({t}) => (
    <Stack gap="sm">
        <Title order={2}>{t('index_foundations-title')}</Title>
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

const LayoutPages: FunctionComponent<WithTranslation> = ({t}) => (
    <Stack gap="sm" className="section">
        <Title order={2}>{t('index_layout-title')}</Title>
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

const FormPages: FunctionComponent<WithTranslation> = ({t}) => (
    <Stack gap="sm" className="section">
        <Title order={2}>{t('index_form-title')}</Title>
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

const HomeWithTranslation = withTranslation()(Home);
export default HomeWithTranslation;
