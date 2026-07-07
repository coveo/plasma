import {factory, Factory, List, ListItemProps, StylesApiProps, Text, useProps} from '@mantine/core';
import {usePrerequisitesListContext} from './PrerequisitesListContext.js';
import {PrerequisitesListIcon, type PrerequisitesListIconVariant} from './PrerequisitesListIcon.js';

export type PrerequisitesListItemStylesNames = 'item' | 'itemIcon';

export type PrerequisitesListItemStatus = PrerequisitesListIconVariant;

interface PrerequisitesListItemProps
    extends Omit<ListItemProps, 'classNames' | 'styles' | 'vars'>, StylesApiProps<PrerequisitesListItemFactory> {
    status: PrerequisitesListItemStatus;
    label: string;
    description?: string;
}

type PrerequisitesListItemFactory = Factory<{
    props: PrerequisitesListItemProps;
    ref: HTMLLIElement;
    vars: never;
    compound: true;
}>;

const defaultProps = {} satisfies Partial<PrerequisitesListItemProps>;

export const PrerequisitesListItem = factory<PrerequisitesListItemFactory>((_props, ref) => {
    const props = useProps('PrerequisitesListItem', defaultProps, _props);
    const {className, style, label, description, status, vars: _vars, ...others} = props;
    const ctx = usePrerequisitesListContext();

    return (
        <List.Item
            ref={ref}
            {...ctx.getStyles('item', {className, style})}
            icon={<PrerequisitesListIcon variant={status} />}
            mod={{state: status}}
            {...others}
        >
            {label}
            {description && (
                <Text fz="xs" c="dimmed">
                    {description}
                </Text>
            )}
        </List.Item>
    );
});

PrerequisitesListItem.displayName = 'PrerequisitesList.Item';
