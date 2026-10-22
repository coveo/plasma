import {BoxProps, factory, Factory, Group, StylesApiProps, Text, Tooltip, useProps, useStyles} from '@mantine/core';
import {ReactNode} from 'react';

import {Badge} from '../Badge/Badge.js';
import {EllipsisText} from '../EllipsisText/EllipsisText.js';

export type BadgeListStylesNames = 'root' | 'badge' | 'more' | 'empty';

/**
 * Props for the {@link BadgeList} component.
 */
export interface BadgeListProps extends BoxProps, StylesApiProps<BadgeListFactory> {
    /**
     * The items to render as badges.
     */
    data: string[];
    /**
     * Maximum number of badges to display before truncating and showing a "more" indicator.
     * @default data.length
     */
    maxDisplayed?: number;
    /**
     * The number of items that are not displayed.
     * This drives the visibility of the "more" indicator.
     * @default data.length - maxDisplayed
     */
    hiddenCount?: number;
    /**
     * Label shown after the visible badges to indicate how many remain
     * (e.g. "+3" or "and 3 more").
     * @default (hiddenCount) => `and ${hiddenCount} more`
     */
    moreLabel?: (hiddenCount: number) => ReactNode;
    /**
     * Content rendered inside the tooltip that appears when hovering the "more" label.
     * Use this to list the remaining items that are not visible.
     * @default The hidden items, one per line
     */
    moreTooltip?: ReactNode;
    /**
     * Optional message displayed when the {@link data} array is empty.
     */
    emptyLabel?: ReactNode;
    /**
     * Optional max width applied to each badge's text via {@link EllipsisText}.
     * When set, long item labels are truncated with an ellipsis.
     */
    maxItemWidth?: number | string;
}

export type BadgeListFactory = Factory<{
    props: BadgeListProps;
    ref: HTMLDivElement;
    stylesNames: BadgeListStylesNames;
}>;

const defaultProps = {
    moreLabel: (hiddenCount: number) => `and ${hiddenCount} more`,
} satisfies Partial<BadgeListProps>;

/**
 * Renders a horizontal list of {@link Badge.Secondary} badges with built-in truncation.
 *
 * Only the first `maxDisplayed` items are shown as badges. When there are more items than
 * `maxDisplayed`, a "more" label is rendered with a {@link Tooltip} that reveals the
 * remaining items on hover.
 *
 * If the `data` array is empty and an `emptyLabel` is provided, only the message is
 * displayed.
 */
export const BadgeList = factory<BadgeListFactory>(({ref, ...props}) => {
    const {
        data,
        maxDisplayed,
        hiddenCount,
        moreLabel,
        moreTooltip,
        emptyLabel,
        maxItemWidth,
        classNames,
        className,
        styles,
        style,
        vars,
        unstyled,
        ...others
    } = useProps('PlasmaBadgeList', defaultProps, props);

    const getStyles = useStyles<BadgeListFactory>({
        name: 'BadgeList',
        classes: {},
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
    });

    if (data.length === 0 && emptyLabel) {
        return (
            <Group ref={ref} gap="xs" {...getStyles('root')} {...others}>
                <Text c="dimmed" {...getStyles('empty')}>
                    {emptyLabel}
                </Text>
            </Group>
        );
    }

    const displayedCount = maxDisplayed ?? data.length;
    const displayedItems = data.slice(0, displayedCount);
    const hiddenItems = data.slice(displayedCount);
    const resolvedHiddenCount = hiddenCount ?? hiddenItems.length;

    return (
        <Group ref={ref} gap="xs" {...getStyles('root')} {...others}>
            {displayedItems.map((item, index) => (
                <Badge.Secondary key={index} {...getStyles('badge')}>
                    {maxItemWidth ? <EllipsisText maw={maxItemWidth}>{item}</EllipsisText> : item}
                </Badge.Secondary>
            ))}
            {resolvedHiddenCount > 0 && (
                <Tooltip
                    label={
                        moreTooltip ??
                        hiddenItems.map((item, index) => (
                            <Text key={index} size="xs">
                                {item}
                            </Text>
                        ))
                    }
                    position="bottom"
                    withArrow
                >
                    <Text {...getStyles('more')}>{moreLabel(resolvedHiddenCount)}</Text>
                </Tooltip>
            )}
        </Group>
    );
});

BadgeList.displayName = 'BadgeList';

export namespace BadgeList {
    export type Props = BadgeListProps;
    export type StylesNames = BadgeListStylesNames;
    export type Factory = BadgeListFactory;
}
