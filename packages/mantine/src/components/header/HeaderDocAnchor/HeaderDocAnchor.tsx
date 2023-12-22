import {QuestionSize16Px} from '@coveord/plasma-react-icons';
import {Anchor, Tooltip, TooltipProps, useProps} from '@mantine/core';
import cx from 'clsx';
import {FunctionComponent, ReactNode} from 'react';
import HeaderDocAnchorClasses from './HeaderDocAnchor.module.css';

const defaultProps: Partial<HeaderDocAnchorProps> = {
    position: 'right',
    children: <QuestionSize16Px height={16} />,
};

export interface HeaderDocAnchorProps extends Pick<TooltipProps, 'position' | 'className'> {
    /**
     * A href pointing to documentation related to the current panel.
     * When provided, an info icon is rendered next to the title as link to this documentation
     */
    href: string;
    /**
     * The tooltip text shown when hovering over the doc link icon
     */
    label?: string;
    /**
     * React component to add the tooltip and anchor on
     */
    children?: ReactNode;
}

export const HeaderDocAnchor: FunctionComponent<HeaderDocAnchorProps> = (props: HeaderDocAnchorProps) => {
    const {
        className,
        children,
        href: docLink,
        label: docLinkTooltipLabel,
        ...others
    } = useProps('PlasmaHeaderActions', defaultProps, props);

    return (
        <Tooltip
            className={cx(className, HeaderDocAnchorClasses.tooltip)}
            label={docLinkTooltipLabel}
            disabled={!docLinkTooltipLabel}
            {...others}
        >
            <Anchor className={HeaderDocAnchorClasses.anchor} inline href={docLink} target="_blank">
                {children}
            </Anchor>
        </Tooltip>
    );
};
