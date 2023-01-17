/* eslint-disable testing-library/no-container */
import {fireEvent, render, screen, within} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {MultiSelectConnected} from '../MultiSelectConnected.js';

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
            const items = [{value: '🌱', displayValue: '🌱'}, {value: '🥔', displayValue: '🥔'}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            // open the dropdown
            await userEvent.click(screen.getByRole('button', {name: /select an option/i}));

            expect(
                screen.getByRole('option', {
                    name: /🌱/i,
                })
            ).toBeVisible();
            expect(
                screen.getByRole('option', {
                    name: /🌱/i,
                })
            ).toBeVisible();
            expect(
                screen.getByRole('option', {
                    name: /🍟/i,
                })
            ).toBeVisible();
        });

        it('hides items that are hidden', async () => {
            const items = [{value: 'first', hidden: true}, {value: 'second'}, {value: 'third'}];

            render(<MultiSelectConnected id={id} items={items} />, {});
            // open the dropdown
            await userEvent.click(screen.getByRole('button', {name: /select an option/i}));

            expect(
                screen.queryByRole('option', {
                    name: /first/i,
                })
            ).not.toBeInTheDocument();
        });

        it('is possible to remove a selected item', async () => {
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            let listitems = screen.getAllByRole('listitem');
            expect(listitems.length).toBe(2);
            expect(listitems[0]).toHaveTextContent('🌱');
            expect(listitems[1]).toHaveTextContent('🥔');

            await userEvent.click(within(listitems[0]).getByRole('button'));

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
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            await userEvent.click(screen.getByRole('button', {name: 'Deselect All'}));

            expect(screen.getByRole('list')).toHaveTextContent('No selected option');
        });

        it('does not contain the deselect all button when in read only', () => {
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} readOnly />);

            expect(screen.queryByRole('button', {name: 'Deselect All'})).not.toBeInTheDocument();
        });

        it('hides items from the dropdown list when they are selected', async () => {
            const items = [{value: '🌱'}, {value: '🥔', selected: true}, {value: '🍟'}];

            render(<MultiSelectConnected id={id} items={items} />);
            // open the dropdown
            await userEvent.click(screen.getByRole('button', {name: /select an option/i}));

            // pre-selected option is in the listbox
            expect(screen.getByText(/🥔/i)).toBeInTheDocument();

            expect(
                screen.getByRole('option', {
                    name: /🌱/i,
                })
            ).toBeInTheDocument();
            expect(
                screen.getByRole('option', {
                    name: /🍟/i,
                })
            ).toBeInTheDocument();

            // select 🍟
            await userEvent.click(
                screen.getByRole('option', {
                    name: /🍟/i,
                })
            );
            expect(screen.getByText(/🥔/i)).toBeInTheDocument();
            expect(screen.getByText(/🍟/i)).toBeInTheDocument();

            // open the dropdown
            await userEvent.click(screen.getByRole('button', {name: /select an option/i}));

            expect(
                screen.getByRole('option', {
                    name: /🌱/i,
                })
            ).toBeVisible();
            expect(
                screen.queryByRole('option', {
                    name: /🥔/i,
                })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole('option', {
                    name: /🍟/i,
                })
            ).not.toBeInTheDocument();
        });

        it('does not open the dropdown if there is no unselected items', async () => {
            const items = [
                {value: '🌱', selected: true},
                {value: '🥔', selected: true},
            ];
            render(<MultiSelectConnected id={id} items={items} />);

            // open the dropdown
            await userEvent.click(screen.getByRole('button', {name: /select an option/i}));

            // one list for the selected values
            expect(screen.getAllByRole('list').length).toBe(1);
        });

        it('does not open the dropdown if there is no items', async () => {
            render(<MultiSelectConnected id={id} items={[]} />);

            // open the dropdown
            await userEvent.click(screen.getByRole('button', {name: /select an option/i}));

            // one list for the selected values
            expect(screen.getAllByRole('list').length).toBe(1);
        });

        it('allows custom toggleClasses on the dropdown', () => {
            const {container} = render(<MultiSelectConnected id={id} items={[]} toggleClasses="coulili-zazou" />);

            expect(container.querySelector('.coulili-zazou')).toBeVisible();
        });

        describe('Sortable', () => {
            const dragAndDrop = (source: Element, position: number) => {
                // We must query the listitem role again on each event because it gets reordered during the drag and drop process
                const eventData: any = {dataTransfer: {files: []}};
                fireEvent.dragStart(source, eventData);
                fireEvent.dragEnter(screen.getAllByRole('listitem')[position], eventData);
                fireEvent.dragOver(screen.getAllByRole('listitem')[position], eventData);
                fireEvent.drop(screen.getAllByRole('listitem')[position], eventData);
            };

            it('does not have the drag icon if the component is not sortable', () => {
                const items = [{value: '🌱', selected: true}];

                render(<MultiSelectConnected id={id} items={items} sortable={false} />);

                const listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🌱');

                const dragIcons = screen.queryByRole('img', {name: /draganddrop/i});
                expect(dragIcons).not.toBeInTheDocument();
            });

            it('is possible to reorder items', async () => {
                const items = [
                    {value: '🌱', selected: true},
                    {value: '🥔', selected: true},
                    {value: '🍟', selected: true},
                ];

                render(<MultiSelectConnected id={id} items={items} sortable />);

                let listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🌱');
                expect(listitems[1]).toHaveTextContent('🥔');
                expect(listitems[2]).toHaveTextContent('🍟');

                const dragIcons = await screen.findAllByRole('img', {name: /draganddrop/i});
                dragAndDrop(dragIcons[1], 2);

                listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🌱');
                expect(listitems[1]).toHaveTextContent('🍟');
                expect(listitems[2]).toHaveTextContent('🥔');
            });

            it('is possible to remove a selected item', async () => {
                const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
                render(<MultiSelectConnected id={id} items={items} sortable />);

                let listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🌱');
                expect(listitems[1]).toHaveTextContent('🥔');

                await userEvent.click(within(listitems[0]).getByRole('button'));

                listitems = screen.getAllByRole('listitem');
                expect(listitems.length).toBe(1);
                expect(listitems[0]).toHaveTextContent('🥔');
            });

            it('does not allow to drag items across different multi selects', async () => {
                render(
                    <>
                        <MultiSelectConnected
                            id="fruits"
                            items={[
                                {value: '🍌', selected: true},
                                {value: '🍊', selected: true},
                            ]}
                            sortable
                        />
                        ;
                        <MultiSelectConnected
                            id="tools"
                            items={[
                                {value: '🔨', selected: true},
                                {value: '🔧', selected: true},
                            ]}
                            sortable
                        />
                        ;
                    </>
                );

                let listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🍌');
                expect(listitems[1]).toHaveTextContent('🍊');
                expect(listitems[2]).toHaveTextContent('🔨');
                expect(listitems[3]).toHaveTextContent('🔧');

                const dragIcons = await screen.findAllByRole('img', {name: /drag/i});
                dragAndDrop(dragIcons[1], 2);

                listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🍌');
                expect(listitems[1]).toHaveTextContent('🍊');
                expect(listitems[2]).toHaveTextContent('🔨');
                expect(listitems[3]).toHaveTextContent('🔧');
            });
        });
    });
});
