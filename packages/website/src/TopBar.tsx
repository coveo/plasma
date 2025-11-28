import {
    ActionIcon,
    ColorSwatch,
    Group,
    Image,
    useComputedColorScheme,
    useMantineColorScheme,
} from '@coveord/plasma-mantine';
import {CheckSize16Px, MoonAndStarsSize32Px, SunSize32Px} from '@coveord/plasma-react-icons';
import {DefaultMantineColor, useMantineTheme} from '@mantine/core';
import {FunctionComponent} from 'react';
import githubLogo from './assets/github-mark.svg';
import plasmaLogo from './assets/plasma-logo.svg';
import StandaloneSearchBar from './search/StandaloneSearchBar.js';
import classes from './styles/TopBar.module.css';
import {useThemePicker} from './theme-picker/ThemePickerContext.js';

const TopBar = () => (
    <Group justify="space-between" px="lg" py="xs" h="100%" wrap="nowrap" className={classes.topBar}>
        <div>
            <Image src={plasmaLogo} className="header-logo" height={80} fit="contain" alt="Plasma Design System" />
        </div>
        <StandaloneSearchBar />
        <Group gap="sm">
            <a href="https://github.com/coveo/plasma#readme" aria-label="README" target="_blank">
                <Image src={githubLogo} width={32} height={32} className={classes.githubImage} />
            </a>
            <ColorSchemePicker />
            <PrimaryColorPicker />
        </Group>
    </Group>
);

export default TopBar;

const ColorSchemePicker = () => {
    const {setColorScheme} = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', {getInitialValueInEffect: true});

    return (
        <ActionIcon.Quaternary
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            color="white"
            size="xl"
            aria-label="Toggle color scheme"
        >
            {computedColorScheme === 'light' ? <MoonAndStarsSize32Px height={32} /> : <SunSize32Px height={32} />}
        </ActionIcon.Quaternary>
    );
};

const PrimaryColorPicker = () => (
    <Group gap="xs">
        <ColorPickerSwatch color="teal" />
        <ColorPickerSwatch color="blue" />
        <ColorPickerSwatch color="violet" />
    </Group>
);

const ColorPickerSwatch: FunctionComponent<{color: DefaultMantineColor}> = ({color}) => {
    const {setPrimaryColor} = useThemePicker();
    const {primaryColor: currentColor} = useMantineTheme();
    return (
        <ColorSwatch
            size="32"
            component="button"
            color={`var(--mantine-color-${color}-filled`}
            onClick={() => setPrimaryColor(color)}
        >
            {currentColor === color ? <CheckSize16Px color="#fff" height={24} /> : null}
        </ColorSwatch>
    );
};
