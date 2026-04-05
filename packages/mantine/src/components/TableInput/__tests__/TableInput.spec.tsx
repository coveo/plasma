import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, within} from '@test-utils';
import {vi} from 'vitest';
import {TableInput} from '../TableInput.js';

describe('TableInput', () => {
    type RowData = {id: string; firstName: string; lastName?: string};

    const columnHelper = createColumnHelper<RowData>();
    const columns: Array<ColumnDef<RowData>> = [
        columnHelper.accessor('firstName', {enableSorting: false}),
        columnHelper.accessor('lastName', {enableSorting: false}),
    ];

    const data: RowData[] = [
        {id: '1', firstName: 'John', lastName: 'Smith'},
        {id: '2', firstName: 'Jane', lastName: 'Doe'},
        {id: '3', firstName: 'Bob', lastName: 'Marley'},
    ];

    it('renders with label and description', () => {
        render(
            <TableInput
                data={data}
                columns={columns}
                getRowId={({id}) => id}
                label="Select users"
                description="Pick the users you want"
            />,
        );

        expect(screen.getByText('Select users')).toBeVisible();
        expect(screen.getByText('Pick the users you want')).toBeVisible();
    });

    it('renders checkboxes that are always visible', () => {
        render(<TableInput data={data} columns={columns} getRowId={({id}) => id} />);

        // All data rows should have checkboxes
        const dataRows = screen.getAllByRole('row').filter((row) => row.hasAttribute('data-multi-selection-mode'));
        dataRows.forEach((row) => {
            expect(row).toHaveAttribute('data-multi-selection-mode', 'input');
        });
    });

    it('calls onChange when a checkbox is toggled', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TableInput data={data} columns={columns} getRowId={({id}) => id} onChange={handleChange} />);

        await user.click(within(screen.getByRole('row', {name: /John Smith/i})).getByRole('checkbox'));
        expect(handleChange).toHaveBeenLastCalledWith([{id: '1', firstName: 'John', lastName: 'Smith'}]);
    });

    it('does not clear multi-selection when clicking on a row', async () => {
        const user = userEvent.setup();

        render(<TableInput data={data} columns={columns} getRowId={({id}) => id} />);

        // Select two rows via checkboxes
        await user.click(within(screen.getByRole('row', {name: /John Smith/i})).getByRole('checkbox'));
        await user.click(within(screen.getByRole('row', {name: /Jane Doe/i})).getByRole('checkbox'));
        expect(screen.getAllByRole('row', {selected: true})).toHaveLength(2);

        // Click on a row — should NOT clear multi-selection
        await user.click(screen.getByRole('cell', {name: 'Bob'}));
        expect(screen.getAllByRole('row', {selected: true})).toHaveLength(2);
    });

    it('does not deselect when pressing Escape', async () => {
        const user = userEvent.setup();

        render(<TableInput data={data} columns={columns} getRowId={({id}) => id} />);

        await user.click(within(screen.getByRole('row', {name: /John Smith/i})).getByRole('checkbox'));
        expect(screen.getAllByRole('row', {selected: true})).toHaveLength(1);

        await user.keyboard('{Escape}');
        expect(screen.getAllByRole('row', {selected: true})).toHaveLength(1);
    });

    it('marks rows as non-selectable when disabled is true', () => {
        render(<TableInput data={data} columns={columns} getRowId={({id}) => id} disabled />);

        const dataRows = screen.getAllByRole('row').filter((row) => row.hasAttribute('data-selectable'));
        dataRows.forEach((row) => {
            expect(row).toHaveAttribute('data-selectable', 'false');
        });
    });

    it('marks rows as non-selectable when readOnly is true', () => {
        render(<TableInput data={data} columns={columns} getRowId={({id}) => id} readOnly />);

        const dataRows = screen.getAllByRole('row').filter((row) => row.hasAttribute('data-selectable'));
        dataRows.forEach((row) => {
            expect(row).toHaveAttribute('data-selectable', 'false');
        });
    });

    it('renders the disabled tooltip when disabled and disabledTooltip is provided', async () => {
        const user = userEvent.setup();

        render(
            <TableInput
                data={data}
                columns={columns}
                getRowId={({id}) => id}
                disabled
                disabledTooltip="You cannot edit this"
                label="Users"
            />,
        );

        // Hover on the table area (wrapped in the tooltip Box)
        await user.hover(screen.getByRole('table'));
        expect(await screen.findByRole('tooltip', {name: /you cannot edit this/i})).toBeInTheDocument();
    });

    it('shows a disabled checkbox for non-editable rows', () => {
        render(
            <TableInput
                data={data}
                columns={columns}
                getRowId={({id}) => id}
                getRowCanEdit={(datum) => datum.firstName !== 'Bob'}
            />,
        );

        // Editable row has an enabled checkbox
        const editableCheckbox = within(screen.getByRole('row', {name: /John Smith/i})).getByRole('checkbox', {
            name: /select row/i,
        });
        expect(editableCheckbox).toBeInTheDocument();
        expect(editableCheckbox).not.toBeDisabled();

        // Non-editable row has a disabled checkbox
        const disabledCheckbox = within(screen.getByRole('row', {name: /Bob Marley/i})).getByRole('checkbox', {
            name: /select row/i,
        });
        expect(disabledCheckbox).toBeInTheDocument();
        expect(disabledCheckbox).toBeDisabled();
    });

    it('supports controlled value', () => {
        const handleChange = vi.fn();

        const controlledValue = [{id: '2', firstName: 'Jane', lastName: 'Doe'}];

        render(
            <TableInput
                data={data}
                columns={columns}
                getRowId={({id}) => id}
                value={controlledValue}
                onChange={handleChange}
            />,
        );

        // Jane should be selected initially
        expect(screen.getByRole('row', {name: /Jane Doe/i, selected: true})).toBeInTheDocument();
        expect(screen.getByRole('row', {name: /John Smith/i, selected: false})).toBeInTheDocument();
    });
});
