import {QuestionSize16Px} from '@coveord/plasma-react-icons';
import {Anchor, DefaultProps, Selectors, Tooltip, TooltipProps, useComponentDefaultProps} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';
import {HeaderDocAnchorStylesParams, useStyles} from './HeaderDocAnchor.styles';

export type HeaderDocAnchorStylesNames = Selectors<typeof useStyles>;

const defaultProps: Partial<HeaderDocAnchorProps> = {
    position: 'right',
    children: <QuestionSize16Px height={16} />,
};

export interface HeaderDocAnchorProps
    extends Pick<TooltipProps, 'position'>,
        DefaultProps<HeaderDocAnchorStylesNames, HeaderDocAnchorStylesParams> {
    /**
     * A href pointing to documentation related to the current panel.
     * When provided, an info icon is rendered next to the title as link to this documentation
     */
    href: string;
    /**
     * The tooltip text shown when hovering over the doc link icon
     */
    label?: ReactNode;
    /**
     * React component to add the tooltip and anchor on
     */
    children?: ReactNode;
}

export const HeaderDocAnchor: FunctionComponent<HeaderDocAnchorProps> = (props: HeaderDocAnchorProps) => {
    const {
        classNames,
        styles,
        unstyled,
        className,
        children,
        href: docLink,
        label: docLinkTooltipLabel,
        ...others
    } = useComponentDefaultProps('PlasmaHeaderActions', defaultProps, props);
    const {classes, cx} = useStyles({}, {name: 'PlasmaHeaderActions', classNames, styles, unstyled});
    return (
        <Tooltip
            className={cx(className, classes.tooltip)}
            label={docLinkTooltipLabel}
            disabled={!docLinkTooltipLabel}
            {...others}
        >
            <Anchor className={classes.anchor} inline href={docLink} target="_blank">
                {children}
            </Anchor>
        </Tooltip>
    );
};
