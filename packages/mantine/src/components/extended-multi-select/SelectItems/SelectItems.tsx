import React from 'react';
import {DefaultProps, MantineSize, Selectors} from '@mantine/styles';
import {randomId} from '@mantine/hooks';
import {Text} from '@mantine/core';
import {Divider} from '@mantine/core';
import {SelectItem} from '../types';
import useStyles from './SelectItems.styles';

export type SelectItemsStylesNames = Selectors<typeof useStyles>;

export interface SelectItemsProps extends DefaultProps<SelectItemsStylesNames> {
    data: SelectItem[];
    hovered: number;
    __staticSelector: string;
    isItemSelected?(itemValue: string): boolean;
    uuid: string;
    itemsRefs?: React.MutableRefObject<Record<string, HTMLDivElement>>;
    onItemHover(index: number): void;
    onItemSelect(item: SelectItem): void;
    size: MantineSize;
    itemComponent: React.FC<any>;
    nothingFound?: React.ReactNode;
    creatable?: boolean;
    createLabel?: React.ReactNode;
    variant: string;
}

export const SelectItems = ({
    data,
    hovered,
    classNames,
    styles,
    isItemSelected,
    uuid,
    __staticSelector,
    onItemHover,
    onItemSelect,
    itemsRefs,
    itemComponent: Item,
    size,
    nothingFound,
    creatable,
    createLabel,
    unstyled,
    variant,
}: SelectItemsProps) => {
    const {classes} = useStyles(null, {
        classNames,
        styles,
        unstyled,
        name: __staticSelector,
        variant,
        size,
    });

    const unGroupedItems: Array<React.ReactElement<any>> = [];
    const groupedItems: Array<React.ReactElement<any>> = [];
    let creatableDataIndex: number | null = null;

    const constructItemComponent = (item: SelectItem, index: number) => {
        const selected = typeof isItemSelected === 'function' ? isItemSelected(item.value) : false;
        return (
            <Item
                key={item.value}
                className={classes.item}
                data-disabled={item.disabled || undefined}
                data-hovered={(!item.disabled && hovered === index) || undefined}
                data-selected={(!item.disabled && selected) || undefined}
                selected={selected}
                onMouseEnter={() => onItemHover(index)}
                id={`${uuid}-${index}`}
                role="option"
                // data-ignore-outside-clicks
                tabIndex={-1}
                aria-selected={hovered === index}
                ref={(node: HTMLDivElement) => {
                    if (itemsRefs && itemsRefs.current) {
                        // eslint-disable-next-line no-param-reassign
                        itemsRefs.current[item.value] = node;
                    }
                }}
                onMouseDown={
                    !item.disabled
                        ? (event: React.MouseEvent<HTMLDivElement>) => {
                              event.preventDefault();
                              onItemSelect(item);
                          }
                        : null
                }
                disabled={item.disabled}
                variant={variant}
                {...item}
            />
        );
    };

    let groupName: string | null = null;
    data.forEach((item, index) => {
        if (item.creatable) {
            creatableDataIndex = index;
        } else if (!item.group) {
            unGroupedItems.push(constructItemComponent(item, index));
        } else {
            if (groupName !== item.group) {
                groupName = item.group;
                groupedItems.push(
                    <div className={classes.separator} key={`__mantine-divider-${index}`}>
                        <Divider classNames={{label: classes.separatorLabel}} label={item.group} />
                    </div>,
                );
            }
            groupedItems.push(constructItemComponent(item, index));
        }
    });

    if (creatable) {
        const creatableDataItem = data[creatableDataIndex];
        unGroupedItems.unshift(
            <div
                key={randomId()}
                className={classes.item}
                data-hovered={hovered === creatableDataIndex || undefined}
                onMouseEnter={() => onItemHover(creatableDataIndex)}
                onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
                    event.preventDefault();
                    onItemSelect(creatableDataItem);
                }}
                tabIndex={-1}
                ref={(node: HTMLDivElement) => {
                    if (itemsRefs && itemsRefs.current) {
                        // eslint-disable-next-line no-param-reassign
                        itemsRefs.current[creatableDataItem.value] = node;
                    }
                }}
            >
                {createLabel}
            </div>,
        );
    }

    if (groupedItems.length > 0 && unGroupedItems.length > 0) {
        unGroupedItems.unshift(
            <div className={classes.separator} key="empty-group-separator">
                <Divider />
            </div>,
        );
    }

    return groupedItems.length > 0 || unGroupedItems.length > 0 ? (
        <>
            {groupedItems}
            {unGroupedItems}
        </>
    ) : (
        <Text size={size} unstyled={unstyled} className={classes.nothingFound}>
            {nothingFound}
        </Text>
    );
};

SelectItems.displayName = '@mantine/core/SelectItems';
