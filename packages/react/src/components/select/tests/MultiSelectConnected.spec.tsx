import {fireEvent, render, screen, within} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {MultiSelectConnected} from '../MultiSelectConnected';

describe('Select', () => {
    describe('<MultiSelectConnected />', () => {
        const id: string = 'multi-select';

        it('contains the specified placeholder when no items are selected', () => {
            const items = [{value: '🌱'}, {value: '🥔'}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} emptyPlaceholder="🍍" />);

            expect(screen.getByRole('list')).toHaveTextContent('🍍');
        });

        it('displays the selected items', () => {
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            const listitems = screen.getAllByRole('listitem');
            expect(listitems.length).toBe(2);
            expect(listitems[0]).toHaveTextContent('🌱');
            expect(listitems[1]).toHaveTextContent('🥔');
        });

        it('describes the item with a tooltip', async () => {
            const items = [{value: '🌱', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            fireEvent.mouseOver(screen.getByText('🌱'));

            expect(await screen.findByLabelText(/🌱/)).toBeVisible();
        });

        it('describes the item with a custom tooltip', async () => {
            const items = [{value: '🌱', selected: true, selectedTooltip: {title: '🌱'}}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            fireEvent.mouseOver(screen.getByText('🌱'));

            expect(await screen.findByLabelText(/🌱/)).toBeVisible();
        });

        it('displays the displayValue in the selected items', () => {
            const items = [
                {value: '🌱', selected: true, displayValue: '🌱'},
                {value: '🥔', selected: true, displayValue: '🥔'},
                {value: '🍟'},
            ];
            render(<MultiSelectConnected id={id} items={items} />);

            const listitems = screen.getAllByRole('listitem');
            expect(listitems.length).toBe(2);
            expect(listitems[0]).toHaveTextContent('🌱');
            expect(listitems[1]).toHaveTextContent('🥔');
        });

        it('displays the displayValue in the dropdown list', async () => {
            const user = userEvent.setup();
            const items = [{value: '🌱', displayValue: '🌱'}, {value: '🥔', displayValue: '🥔'}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            // open the dropdown
            await user.click(screen.getByRole('button', {name: /select an option/i}));

            expect(
                screen.getByRole('option', {
                    name: /🌱/i,
                }),
            ).toBeVisible();
            expect(
                screen.getByRole('option', {
                    name: /🌱/i,
                }),
            ).toBeVisible();
            expect(
                screen.getByRole('option', {
                    name: /🍟/i,
                }),
            ).toBeVisible();
        });

        it('hides items that are hidden', async () => {
            const user = userEvent.setup();
            const items = [{value: 'first', hidden: true}, {value: 'second'}, {value: 'third'}];

            render(<MultiSelectConnected id={id} items={items} />, {});
            // open the dropdown
            await user.click(screen.getByRole('button', {name: /select an option/i}));

            expect(
                screen.queryByRole('option', {
                    name: /first/i,
                }),
            ).not.toBeInTheDocument();
        });

        it('is possible to remove a selected item', async () => {
            const user = userEvent.setup();
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            let listitems = screen.getAllByRole('listitem');
            expect(listitems.length).toBe(2);
            expect(listitems[0]).toHaveTextContent('🌱');
            expect(listitems[1]).toHaveTextContent('🥔');

            await user.click(within(listitems[0]).getByRole('button'));

            listitems = screen.getAllByRole('listitem');
            expect(listitems.length).toBe(1);
            expect(listitems[0]).toHaveTextContent('🥔');
        });

        it('does not contain the button to add a value when in read only', () => {
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} readOnly />);

            expect(screen.queryByRole('button', {name: 'Select an option'})).not.toBeInTheDocument();
        });

        it('does not contain the remove button on the selected items when in read only', () => {
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} readOnly />);

            const listitems = screen.getAllByRole('listitem');
            expect(within(listitems[0]).queryByRole('button')).not.toBeInTheDocument();
            expect(within(listitems[1]).queryByRole('button')).not.toBeInTheDocument();
        });

        it('is possible to remove all selected items', async () => {
            const user = userEvent.setup();
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            await user.click(screen.getByRole('button', {name: 'Deselect All'}));

            expect(screen.getByRole('list')).toHaveTextContent('No selected option');
        });

        it('does not contain the deselect all button when in read only', () => {
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} readOnly />);

            expect(screen.queryByRole('button', {name: 'Deselect All'})).not.toBeInTheDocument();
        });

        it('hides items from the dropdown list when they are selected', async () => {
            const user = userEvent.setup();
            const items = [{value: '🌱'}, {value: '🥔', selected: true}, {value: '🍟'}];

            render(<MultiSelectConnected id={id} items={items} />);
            // open the dropdown
            await user.click(screen.getByRole('button', {name: /select an option/i}));

            // pre-selected option is in the listbox
            expect(screen.getByText(/🥔/i)).toBeInTheDocument();

            expect(
                screen.getByRole('option', {
                    name: /🌱/i,
                }),
            ).toBeInTheDocument();
            expect(
                screen.getByRole('option', {
                    name: /🍟/i,
                }),
            ).toBeInTheDocument();

            // select 🍟
            await user.click(
                screen.getByRole('option', {
                    name: /🍟/i,
                }),
            );
            expect(screen.getByText(/🥔/i)).toBeInTheDocument();
            expect(screen.getByText(/🍟/i)).toBeInTheDocument();

            // open the dropdown
            await user.click(screen.getByRole('button', {name: /select an option/i}));

            expect(
                screen.getByRole('option', {
                    name: /🌱/i,
                }),
            ).toBeVisible();
            expect(
                screen.queryByRole('option', {
                    name: /🥔/i,
                }),
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole('option', {
                    name: /🍟/i,
                }),
            ).not.toBeInTheDocument();
        });

        it('does not open the dropdown if there is no unselected items', async () => {
            const user = userEvent.setup();
            const items = [
                {value: '🌱', selected: true},
                {value: '🥔', selected: true},
            ];
            render(<MultiSelectConnected id={id} items={items} />);

            // open the dropdown
            await user.click(screen.getByRole('button', {name: /select an option/i}));

            // one list for the selected values
            expect(screen.getAllByRole('list').length).toBe(1);
        });

        it('does not open the dropdown if there is no items', async () => {
            const user = userEvent.setup();
            render(<MultiSelectConnected id={id} items={[]} />);

            // open the dropdown
            await user.click(screen.getByRole('button', {name: /select an option/i}));

            // one list for the selected values
            expect(screen.getAllByRole('list').length).toBe(1);
        });

        it('allows custom toggleClasses on the dropdown', () => {
            const {container} = render(<MultiSelectConnected id={id} items={[]} toggleClasses="coulili-zazou" />);

            // eslint-disable-next-line testing-library/no-container
            expect(container.querySelector('.coulili-zazou')).toBeVisible();
        });

        describe('Sortable', () => {
            // testing drag and drop is impossible with jest due to jsdom getClientBoundingRect limitations
            // it should be tested in a real browser environment using something like cypress or playwright

            it('does not have the drag icon if the component is not sortable', () => {
                const items = [{value: '🌱', selected: true}];

                render(<MultiSelectConnected id={id} items={items} sortable={false} />);

                const listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🌱');

                const dragIcons = screen.queryByRole('img', {name: /draganddrop/i});
                expect(dragIcons).not.toBeInTheDocument();
            });

            it('is possible to remove a selected item', async () => {
                const user = userEvent.setup();
                const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
                render(<MultiSelectConnected id={id} items={items} sortable />);

                let listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🌱');
                expect(listitems[1]).toHaveTextContent('🥔');

                await user.click(within(listitems[0]).getByRole('button', {name: 'cross'}));

                listitems = screen.getAllByRole('listitem');
                expect(listitems.length).toBe(1);
                expect(listitems[0]).toHaveTextContent('🥔');
            });
        });
    });
});
