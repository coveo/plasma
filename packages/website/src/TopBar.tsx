import {Group, Image} from '@coveord/plasma-mantine';
import githubLogo from './assets/github-mark.svg';
import plasmaLogo from './assets/plasma-logo.svg';
import StandaloneSearchBar from './search/StandaloneSearchBar';
import classes from './styles/TopBar.module.css';

const TopBar = () => (
    <Group
        justify="space-between"
        px="lg"
        py="xs"
        bg={
            'linear-gradient(217deg, var(--mantine-color-purple-6) 0%, var(--mantine-color-navy-7) 74.62%, var(--mantine-color-navy-7) 100%)'
        }
        h="100%"
        wrap="nowrap"
    >
        <div>
            <Image src={plasmaLogo} className="header-logo" height={80} fit="contain" alt="Plasma Design System" />
        </div>
        <StandaloneSearchBar />
        <a href="https://github.com/coveo/plasma#readme" aria-label="README" target="_blank">
            <Image src={githubLogo} width={32} height={32} className={classes.githubImage} />
        </a>
    </Group>
);

export default TopBar;
