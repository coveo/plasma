import {Button} from '@coveord/plasma-mantine';
import {ExternalSize16Px} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';
import githubLogo from '../assets/github-mark.svg';

export const GithubButton: FunctionComponent<React.PropsWithChildren<{href: string; ariaLabel: string}>> = ({
    children,
    ariaLabel,
    href,
}) => (
    <Button
        component="a"
        variant="outline"
        color="gray"
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        leftSection={<img src={githubLogo} width={16} height={16} />}
        rightSection={<ExternalSize16Px height={16} />}
    >
        {children}
    </Button>
);
