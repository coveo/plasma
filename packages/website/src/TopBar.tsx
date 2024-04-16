import {Group, Image} from '@coveord/plasma-mantine';
import githubLogo from './assets/github-mark.svg';
import plasmaLogo from './assets/plasma-logo.svg';
import StandaloneSearchBar from './search/StandaloneSearchBar';

const TopBar = () => (
    <Group
        justify="space-between"
        px="lg"
        py="xs"
        style={(theme) => ({
            background: `linear-gradient(217deg, ${theme.colors.purple[6]} 0%, ${theme.colors.navy[7]} 74.62%, ${theme.colors.navy[7]} 100%)`,
            height: '100%',
        })}
        wrap="nowrap"
    >
        <div>
            <Image src={plasmaLogo} className="header-logo" height={80} fit="contain" alt="Plasma Design System" />
        </div>
        <StandaloneSearchBar />
        <a href="https://github.com/coveo/plasma#readme" aria-label="README" target="_blank">
            <Image src={githubLogo} width={32} height={32} style={{filter: 'invert(1)'}} />
        </a>
    </Group>
);

export default TopBar;
