import {render, screen, userEvent} from '@test-utils';
import {Facet} from '../Facet.js';

describe('Facet', () => {
    beforeEach(() => {
        Element.prototype.scrollIntoView = vi.fn();
    });

    it('renders the title', () => {
        render(<Facet data={[]} title="My little title" />);
        expect(screen.getByText('My little title')).toBeVisible();
    });

    it('renders a checkbox for every item', () => {
        render(
            <Facet
                data={[
                    {value: 'a', label: 'A'},
                    {value: 'b', label: 'B'},
                    {value: 'c', label: 'C'},
                ]}
            />,
        );
        expect(screen.getAllByRole('option')).toHaveLength(3);
    });

    it('displays the count when it exists', async () => {
        render(
            <Facet
                data={[
                    {value: 'a', label: 'A'},
                    {value: 'b', label: 'B', count: 4},
                    {value: 'c', label: 'C', count: 5},
                ]}
            />,
        );
        expect(screen.getByRole('option', {name: /A/i})).toBeVisible();
        expect(screen.getByRole('option', {name: /B\(4\)/i})).toBeVisible();
        expect(screen.getByRole('option', {name: /C\(5\)/i})).toBeVisible();
    });

    it('formats the count using the provided function', () => {
        render(
            <Facet
                data={[
                    {value: 'a', label: 'A'},
                    {value: 'b', label: 'B', count: 4000},
                    {value: 'c', label: 'C', count: 5000},
                ]}
                itemCountFormatter={(count: number) => `test: ${count}`}
            />,
        );
        expect(screen.getByRole('option', {name: /A/i})).toBeVisible();
        expect(screen.getByRole('option', {name: /B\(test: 4000\)/i})).toBeVisible();
        expect(screen.getByRole('option', {name: /C\(test: 5000\)/i})).toBeVisible();
    });

    it('ticks the checkboxes of every item in the initialSelection', () => {
        render(
            <Facet
                data={[
                    {value: 'alpha', label: 'Alpha'},
                    {value: 'bravo', label: 'Bravo'},
                    {value: 'charlie', label: 'Charlie'},
                ]}
                initialSelection={['bravo', 'charlie']}
            />,
        );
        expect(screen.getByRole('option', {name: /Bravo/i, selected: true})).toBeVisible();
        expect(screen.getByRole('option', {name: /Charlie/i, selected: true})).toBeVisible();
    });

    it('handles keyboard navigation when there is no search', async () => {
        const user = userEvent.setup();
        render(
            <Facet
                data={[
                    {value: 'alpha', label: 'Alpha'},
                    {value: 'bravo', label: 'Bravo'},
                    {value: 'charlie', label: 'Charlie'},
                ]}
            />,
        );

        // Focus the facet container (the ScrollArea with tabindex=0)
        // This is the EventsTarget that handles keyboard navigation
        const container = screen.getByRole('listbox').parentElement?.parentElement?.parentElement;
        container?.focus();

        // Arrow down to navigate to Alpha (starts at nothing selected)
        await user.keyboard('{arrowdown}');
        await user.keyboard('{enter}');
        expect(screen.getByRole('option', {name: /Alpha/i, selected: true})).toBeVisible();

        // Arrow down to navigate to Bravo
        await user.keyboard('{arrowdown}');
        await user.keyboard('{enter}');
        expect(screen.getByRole('option', {name: /Bravo/i, selected: true})).toBeVisible();

        // Arrow down to navigate to Charlie
        await user.keyboard('{arrowdown}');
        await user.keyboard('{enter}');
        expect(screen.getByRole('option', {name: /Charlie/i, selected: true})).toBeVisible();

        // Arrow up to navigate back to Bravo
        await user.keyboard('{arrowup}');
        await user.keyboard('{enter}');
        // Bravo should now be unselected (toggling off)
        expect(screen.getByRole('option', {name: /Bravo/i, selected: false})).toBeVisible();
    });

    it('ticks the checkboxes on click', async () => {
        const user = userEvent.setup();
        render(
            <Facet
                data={[
                    {value: 'alpha', label: 'Alpha'},
                    {value: 'bravo', label: 'Bravo'},
                    {value: 'charlie', label: 'Charlie'},
                ]}
            />,
        );

        await user.click(screen.getByRole('option', {name: /Alpha/i}));
        expect(screen.getByRole('option', {name: /Alpha/i, selected: true})).toBeVisible();

        await user.click(screen.getByRole('option', {name: /Charlie/i}));
        expect(screen.getByRole('option', {name: /Charlie/i, selected: true})).toBeVisible();
    });

    describe('controlled, if the selection prop is used', () => {
        it('is not selecting items automatically', async () => {
            const user = userEvent.setup();
            render(
                <Facet
                    selection={[]}
                    data={[
                        {value: 'alpha', label: 'Alpha'},
                        {value: 'bravo', label: 'Bravo'},
                        {value: 'charlie', label: 'Charlie'},
                    ]}
                />,
            );
            await user.click(screen.getByRole('option', {name: /Alpha/i}));
            expect(screen.getByRole('option', {name: /Alpha/i, selected: false})).toBeVisible();
        });

        it('Is selecting items accordingly to the selection prop', async () => {
            const selection = ['charlie'];
            render(
                <Facet
                    selection={selection}
                    data={[
                        {value: 'alpha', label: 'Alpha'},
                        {value: 'bravo', label: 'Bravo'},
                        {value: 'charlie', label: 'Charlie'},
                    ]}
                />,
            );

            expect(screen.getByRole('option', {name: /Charlie/i, selected: true})).toBeVisible();
            expect(screen.getByRole('option', {name: /Alpha/i, selected: false})).toBeVisible();
            expect(screen.getByRole('option', {name: /Bravo/i, selected: false})).toBeVisible();
        });
    });

    describe('search', () => {
        const makeData = (length: number) =>
            Array(length)
                .fill(0)
                .map((_, i) => ({label: (i + 1).toString(), value: (i + 1).toString()}));

        it('displays the search bar according to the number of items', () => {
            const {rerender} = render(<Facet data={makeData(6)} />);
            expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

            rerender(<Facet data={makeData(7)} />);
            expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

            rerender(<Facet data={makeData(8)} />);
            expect(screen.getByRole('textbox')).toBeVisible();

            rerender(<Facet data={makeData(9)} />);
            expect(screen.getByRole('textbox')).toBeVisible();
        });

        it('displays the search bar according to a custom condition', () => {
            render(<Facet data={makeData(5)} hideSearch={false} />);
            expect(screen.getByRole('textbox')).toBeInTheDocument();
        });

        it('hides elements that do not match the user query', async () => {
            const user = userEvent.setup();
            render(<Facet data={makeData(15)} />);

            expect(screen.getAllByRole('option')).toHaveLength(15);

            await user.type(screen.getByRole('textbox'), '1');

            expect(screen.getAllByRole('option')).toHaveLength(7); // 1, 10, 11, 12, 13, 14, 15

            await user.type(screen.getByRole('textbox'), '0'); // append 0 to the previously added 1, so 10

            expect(screen.getAllByRole('option')).toHaveLength(1);
            expect(screen.getByRole('option', {name: /10/i})).toBeVisible();
        });

        it('handles keyboard navigation', async () => {
            const user = userEvent.setup();
            render(<Facet data={makeData(10)} />);

            await user.click(screen.getByRole('textbox')); // put the focus on the textbox
            await user.type(screen.getByRole('textbox'), '{arrowdown}{arrowdown}{enter}'); // starts at none, moves to 1, then to 2, then select 2

            expect(screen.getByRole('option', {name: /2/i, selected: true})).toBeVisible();

            await user.type(screen.getByRole('textbox'), '{arrowup}{enter}'); // moves from 2 to 1, then select 1

            expect(screen.getByRole('option', {name: /1/i, selected: true})).toBeVisible();
        });

        it('calls onSearch prop when performing a search', async () => {
            const user = userEvent.setup();
            const onSearch = vi.fn();
            render(<Facet data={makeData(10)} onSearch={onSearch} />);
            await user.type(screen.getByRole('textbox'), 'what');
            expect(onSearch).toHaveBeenCalledWith('what');
        });

        it('clears the search box of its current value when clicking on the cross', async () => {
            const user = userEvent.setup();
            const onSearch = vi.fn();
            render(<Facet data={makeData(10)} onSearch={onSearch} />);
            expect(screen.queryByRole('button', {name: /clear search/i})).not.toBeInTheDocument();
            await user.type(screen.getByRole('textbox'), 'what');
            onSearch.mockClear();
            await user.click(screen.getByRole('button', {name: /clear search/i}));
            expect(onSearch).toHaveBeenCalledWith('');
        });
    });
});
