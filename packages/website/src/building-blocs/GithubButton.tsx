import {ExternalSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {FunctionComponent} from 'react';

import githubLogo from '../../resources/github-mark.svg';

export const GithubButton: FunctionComponent<
    React.PropsWithChildren<{href: string; ariaLabel: string; className?: string}>
> = ({children, className, ariaLabel, href}) => (
    <a
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        className={classNames('github-button inline-flex flex-center p1', className)}
        rel="noopener noreferrer"
    >
        <img src={githubLogo} width={16} height={16} className="mr1" />
        <span className="body-m">
            {children}
            <ExternalSize16Px className="ml1" />
        </span>
    </a>
);
