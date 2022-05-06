import {Svg} from '@coveord/plasma-react';
import classNames from 'classnames';
import {FunctionComponent} from 'react';

export const GithubButton: FunctionComponent<{href: string; ariaLabel: string; className?: string}> = ({
    children,
    className,
    ariaLabel,
    href,
}) => (
    <a
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        className={classNames('github-button inline-block p1', className)}
    >
        <Svg svgName="githubMark" svgClass="icon mod-16" />
        <span className="body-m mx1">{children}</span>
        <Svg svgName="external" svgClass="icon mod-16" />
    </a>
);
