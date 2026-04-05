import {Box, Input, InputWrapperProps, Tooltip, useProps} from '@mantine/core';
import {useUncontrolled} from '@mantine/hooks';
import {ForwardedRef, type ReactNode, useEffect, useRef} from 'react';
import {InputLabelInfo} from '../Input/InputLabelInfo.js';
import {Table} from '../Table/Table.js';
import {TableProps} from '../Table/Table.types.js';
import {useTable} from '../Table/use-table.js';

export interface TableInputProps<TData>
    extends
        Omit<TableProps<TData>, 'store' | 'multiRowSelectionMode'>,
        Pick<InputWrapperProps, 'label' | 'description' | 'required' | 'withAsterisk'> {
    /** Controlled value — list of selected rows */
    value?: TData[];
    /** Default value for uncontrolled mode */
    defaultValue?: TData[];
    /** Called when selection changes */
    onChange?: (value: TData[]) => void;
    /** When true, checkboxes are visible but not interactive */
    readOnly?: boolean;
    /** When true, the entire input is disabled and non-interactive */
    disabled?: boolean;
    /** Tooltip displayed when hovering over the disabled table input */
    disabledTooltip?: string;
    /** Tooltip content displayed next to the label as an info icon */
    labelInfo?: ReactNode;
}

const defaultProps: Partial<TableInputProps<unknown>> = {};

export const TableInput = <TData,>(props: TableInputProps<TData> & {ref?: ForwardedRef<HTMLDivElement>}) => {
    const {
        value,
        defaultValue,
        onChange,
        readOnly,
        disabled,
        disabledTooltip,
        label,
        labelInfo,
        description,
        required,
        withAsterisk,
        data,
        columns,
        getRowId,
        getRowCanEdit,
        children,
        loading,
        ref,
        ...tableProps
    } = useProps('TableInput', defaultProps as TableInputProps<TData>, props);

    const [_value, handleChange] = useUncontrolled<TData[]>({
        value,
        defaultValue,
        finalValue: [],
        onChange,
    });

    const store = useTable<TData>({
        enableMultiRowSelection: true,
        enableRowSelection: !disabled && !readOnly,
    });

    // Sync external value → store.rowSelection
    const isInternalUpdate = useRef(false);
    useEffect(() => {
        if (isInternalUpdate.current) {
            isInternalUpdate.current = false;
            return;
        }
        if (!getRowId || !data) {
            return;
        }
        const newSelection: Record<string, TData> = {};
        for (const item of _value) {
            // We need to find the index to call getRowId properly
            const index = data.indexOf(item);
            const id = getRowId(item, index, undefined!);
            newSelection[id] = item;
        }
        store.setRowSelection(newSelection);
    }, [_value]);

    // Sync store.rowSelection → external onChange
    useEffect(() => {
        const selectedRows = store.getSelectedRows();
        isInternalUpdate.current = true;
        handleChange(selectedRows);
    }, [store.state.rowSelection]);

    const resolvedLabel = labelInfo ? (
        <>
            {label}
            <InputLabelInfo>{labelInfo}</InputLabelInfo>
        </>
    ) : (
        label
    );

    const tableContent = (
        <Table<TData>
            store={store}
            data={data}
            columns={columns}
            getRowId={getRowId}
            getRowCanEdit={getRowCanEdit}
            loading={loading}
            multiRowSelectionMode="input"
            {...tableProps}
        >
            {children}
        </Table>
    );

    return (
        <Input.Wrapper
            ref={ref}
            label={resolvedLabel}
            description={description}
            required={required}
            withAsterisk={withAsterisk}
        >
            {disabledTooltip && disabled ? (
                <Tooltip label={disabledTooltip}>
                    <Box>{tableContent}</Box>
                </Tooltip>
            ) : (
                tableContent
            )}
        </Input.Wrapper>
    );
};
