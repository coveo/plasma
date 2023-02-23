import {CrossSize16Px, SearchSize16Px} from '@coveord/plasma-react-icons';
import {ActionIcon, createStyles, DefaultProps, Selectors, TextInput} from '@mantine/core';
import {ChangeEventHandler, FunctionComponent, MouseEventHandler} from 'react';

import {useTable} from './TableContext';

const useStyles = createStyles((theme) => ({
    wrapper: {
        marginBottom: '0 !important',
    },
    empty: {
        color: theme.colors.gray[4],
    },
}));

type TableFilterStylesNames = Selectors<typeof useStyles>;
interface TableFilterProps extends DefaultProps<TableFilterStylesNames> {
    /**
     * The placeholder for the filter input
     *
     * @default "Search by any field"
     */
    placeholder?: string;
}

export const TableFilter: FunctionComponent<TableFilterProps> = ({
    placeholder = 'Search by any field',
    classNames,
    styles,
    unstyled,
    ...others
}) => {
    const {classes} = useStyles(null, {name: 'TableHeader', classNames, styles, unstyled});
    const {state, setState} = useTable();

    const changeFilterValue = (value: string) => {
        setState((prevState) => ({
            ...prevState,
            pagination: prevState.pagination
                ? {pageIndex: 0, pageSize: prevState.pagination.pageSize}
                : prevState.pagination,
            globalFilter: value,
        }));
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const {value} = event.currentTarget;
        changeFilterValue(value);
    };

    const handleClear: MouseEventHandler<HTMLButtonElement> = () => {
        changeFilterValue('');
    };

    return (
        <TextInput
            className={classes.wrapper}
            placeholder={placeholder}
            mb="md"
            rightSection={
                state.globalFilter ? (
                    <ActionIcon onClick={handleClear}>
                        <CrossSize16Px height={16} />
                    </ActionIcon>
                ) : (
                    <SearchSize16Px height={14} className={classes.empty} />
                )
            }
            value={state.globalFilter}
            onChange={handleChange}
            {...others}
        />
    );
};
