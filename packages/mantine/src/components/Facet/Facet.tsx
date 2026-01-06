import {CrossSize16Px, FilterSize16Px} from '@coveord/plasma-react-icons';
import {
    Box,
    BoxProps,
    Combobox,
    Divider,
    factory,
    Factory,
    StylesApiProps,
    Text,
    TextInput,
    Title,
    useCombobox,
    useProps,
} from '@mantine/core';
import {useUncontrolled} from '@mantine/hooks';
import {clsx} from 'clsx';
import {FunctionComponent, ReactElement, ReactNode} from 'react';
import {groupOptions} from '../../utils/groupOptions.js';
import {ActionIcon} from '../ActionIcon/ActionIcon.js';
import {DefaultFacetItem} from './DefaultFacetItem.js';
import classes from './Facet.module.css';
import {FacetScrollArea} from './FacetScrollArea.js';
import {FacetData, FacetItem, FacetItemComponent} from './FacetTypes.js';

export type FacetStylesNames =
    | 'facet'
    | 'facetItem'
    | 'facetItems'
    | 'facetHeader'
    | 'searchInput'
    | 'hiddenSearch'
    | 'facetBody'
    | 'facetTitle'
    | 'facetSearch'
    | 'facetControl'
    | 'separator'
    | 'separatorLabel';

export interface FacetProps extends BoxProps, StylesApiProps<FacetFactory> {
    className?: string;
    /**
     * The data to render in the component
     */
    data: FacetData;
    /**
     * Function called when an item is selected or unselected
     *
     * @param values the selected items
     */
    onChange?: (values: string[]) => void;
    /**
     * Initial items selection
     *
     * @default []
     */
    initialSelection?: string[];
    /**
     * Determined items selection
     *
     * @default []
     */
    selection?: string[];
    /**
     * Custom item component
     *
     * @default a checkbox with the label of the item
     */
    itemComponent?: FacetItemComponent;
    /**
     * Function to format the facet item count
     *
     * @param count
     * @default NumberFormatter.integerFull format
     */
    itemCountFormatter?: (value: number) => string;
    /**
     * Search input placeholder
     */
    searchPlaceholder?: string;
    /**
     * Called when the search query changes
     *
     * @param value the search query
     */
    onSearch?: (value: string) => void;
    /**
     * Function to filter search results
     *
     * @param query value of the search input
     * @param item the current item
     *
     * @default function that compare the query with the label and value, case-insensitive
     */
    filter?: (query: string, item: FacetItem) => boolean;
    /**
     * Value of the search input
     */
    query?: string;
    /**
     * Nothing found message
     *
     * @default No matching items
     */
    nothingFound?: ReactNode;
    /**
     * Displayed when a list is empty and there is no search query
     *
     * @default No items
     */
    placeholder?: ReactNode;
    /**
     * Facet title
     */
    title?: ReactNode;
    /**
     * Maximum height, only used when there is more than 7 values
     *
     * @default 200
     */
    height?: number | 'auto';
    /**
     * Predefined border-radius value from theme.radius or number for border-radius in px
     *
     * @default md
     */
    radius?: number | string;
    /**
     * Change list component, can be used to add custom scrollbars
     */
    listComponent?: FunctionComponent<any>;
    /**
     * Limit amount of items showed at a time
     *
     * @default Infinity
     */
    limit?: number;
    /**
     * Control the displaying of the search input.
     *
     * @default data.length <= 7
     */
    hideSearch?: boolean;
    __staticSelector?: string;
}

export type FacetFactory = Factory<{
    props: FacetProps;
    ref: HTMLDivElement;
    stylesNames: FacetStylesNames;
}>;

const defaultProps: Partial<FacetProps> = {
    searchPlaceholder: 'Search',
    nothingFound: 'No matching items',
    placeholder: 'No items',
    height: 200,
    limit: Infinity,
    itemComponent: DefaultFacetItem,
    listComponent: FacetScrollArea,
};

export const Facet: FunctionComponent<FacetProps> = factory<FacetFactory>((_props, ref) => {
    const props = useProps('Facet', defaultProps, _props);
    const {
        className,
        data,
        onChange,
        initialSelection = [],
        selection,
        itemComponent: ItemComponent,
        listComponent: ListComponent,
        itemCountFormatter,
        searchPlaceholder,
        query,
        hideSearch = data.length <= 7,
        onSearch,
        filter = defaultFilter,
        nothingFound,
        placeholder,
        title,
        height,
        radius,
        __staticSelector,
        classNames,
        styles,
        limit,
        unstyled,
        ...others
    } = props;
    const combobox = useCombobox();
    const [search, handleSearch] = useUncontrolled({
        value: query,
        defaultValue: '',
        finalValue: '',
        onChange: onSearch,
    });

    const [_selection, handleSelection] = useUncontrolled({
        value: selection,
        defaultValue: initialSelection,
        finalValue: [],
        onChange,
    });

    const unGroupedItems: ReactElement[] = [];
    const groupedItems: ReactElement[] = [];
    const filteredData = data.filter((item) => filter(search, item)).slice(0, limit);

    const sortedData: FacetData = groupOptions({data: filteredData});

    const handleValueSelect = (val: string) =>
        handleSelection(_selection.includes(val) ? _selection.filter((v) => v !== val) : [..._selection, val]);

    let groupName: string = null;

    sortedData.forEach((item) => {
        const itemComponent = (
            <Combobox.Option
                active={_selection.includes(item.value)}
                aria-selected={_selection.includes(item.value)}
                value={item.value}
                key={item.value}
                onMouseEnter={() => combobox.resetSelectedOption()}
                className={clsx(classes.facetItem)}
                tabIndex={data.length > 8 ? -1 : 1} // only remove the tabIndex if there is no search bar
            >
                <ItemComponent
                    data={item}
                    selected={_selection.includes(item.value)}
                    countFormatter={itemCountFormatter}
                />
            </Combobox.Option>
        );

        if (!item.group) {
            unGroupedItems.push(itemComponent);
        } else {
            if (groupName !== item.group) {
                groupName = item.group;
                groupedItems.push(
                    <div className={classes.separator} key={groupName}>
                        <Divider classNames={{label: classes.separatorLabel}} label={groupName} />
                    </div>,
                );
            }
            groupedItems.push(itemComponent);
        }
    });

    if (groupedItems.length > 0 && unGroupedItems.length > 0) {
        unGroupedItems.unshift(
            <div className={classes.separator}>
                <Divider unstyled={unstyled} classNames={{label: classes.separatorLabel}} />
            </div>,
        );
    }

    return (
        <Box className={clsx(classes.facet, className)} {...others}>
            <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
                <Combobox.EventsTarget>
                    <Box className={classes.facetHeader}>
                        {title ? <Title order={5}>{title}</Title> : null}

                        <TextInput
                            unstyled={unstyled}
                            value={search}
                            onChange={(event) => {
                                handleSearch(event.currentTarget.value);
                                combobox.updateSelectedOptionIndex();
                            }}
                            placeholder={searchPlaceholder}
                            aria-hidden={hideSearch}
                            className={clsx(classes.facetSearch, {[classes.hiddenSearch]: hideSearch})}
                            rightSection={
                                search ? (
                                    <ActionIcon.Quaternary
                                        aria-label="clear search"
                                        color="gray"
                                        onClick={() => {
                                            handleSearch('');
                                        }}
                                    >
                                        <CrossSize16Px height={16} />
                                    </ActionIcon.Quaternary>
                                ) : (
                                    <FilterSize16Px height={16} />
                                )
                            }
                        />
                    </Box>
                </Combobox.EventsTarget>
                <div className={classes.facetBody}>
                    <ListComponent
                        className={classes.facetItems}
                        mah={height}
                        style={{overflow: 'auto', position: 'relative'}}
                    >
                        <Combobox.Options>
                            {groupedItems.length > 0 || unGroupedItems.length > 0 ? (
                                <>
                                    {groupedItems}
                                    {unGroupedItems}
                                </>
                            ) : (
                                <Combobox.Empty>
                                    <Text c="dimmed" unstyled={unstyled} size="sm" ta="center" my="sm">
                                        {!query && placeholder ? placeholder : nothingFound}
                                    </Text>
                                </Combobox.Empty>
                            )}
                        </Combobox.Options>
                    </ListComponent>
                </div>
            </Combobox>
        </Box>
    );
});

Facet.displayName = 'Facet';

const defaultFilter = (query: string, item: FacetItem) =>
    item.label.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
    item.value.toLowerCase().trim().includes(query.toLowerCase().trim());
