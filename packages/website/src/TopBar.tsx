import {Group, Image} from '@coveord/plasma-mantine';
import githubLogo from './assets/github-mark.svg';
import plasmaLogo from './assets/plasma-logo.svg';
import StandaloneSearchBar from './search/StandaloneSearchBar';
import classes from './styles/TopBar.module.css';

const TopBar = () => (
    <Group justify="space-between" px="lg" py="xs" h="100%" wrap="nowrap" className={classes.topBar}>
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
