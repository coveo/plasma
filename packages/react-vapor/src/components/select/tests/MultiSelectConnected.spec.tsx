import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {render, screen, fireEvent, within} from 'react-vapor-test-utils';

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
            const items = [{value: '🌱', selected: true, selectedTooltip: {title: ':seed:'}}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            fireEvent.mouseOver(screen.getByText('🌱'));

            expect(await screen.findByLabelText(/:seed:/)).toBeInTheDocument();
        });

        it('displays the displayValue in the selected items', () => {
            const items = [
                {value: '🌱', selected: true, displayValue: ':seed:'},
                {value: '🥔', selected: true, displayValue: ':potato:'},
                {value: '🍟'},
            ];
            render(<MultiSelectConnected id={id} items={items} />);

            const listitems = screen.getAllByRole('listitem');
            expect(listitems.length).toBe(2);
            expect(listitems[0]).toHaveTextContent(':seed:');
            expect(listitems[1]).toHaveTextContent(':potato:');
        });

        it('displays the displayValue in the dropdown list', () => {
            const items = [
                {value: '🌱', displayValue: ':seed:'},
                {value: '🥔', displayValue: ':potato:'},
                {value: '🍟'},
            ];
            render(<MultiSelectConnected id={id} items={items} />);

            // open the dropdown
            userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

            const lists = screen.getAllByRole('list');

            expect(within(lists[1]).getByText(':seed:')).toBeInTheDocument();
            expect(within(lists[1]).getByText(':potato:')).toBeInTheDocument();
            expect(within(lists[1]).getByText('🍟')).toBeInTheDocument();
        });

        it('hides items that are hidden', () => {
            const items = [{value: 'first', hidden: true}, {value: 'second'}, {value: 'third'}];

            render(<MultiSelectConnected id={id} items={items} />, {});
            // open the dropdown
            userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

            const lists = screen.getAllByRole('list');
            expect(within(lists[1]).queryByText('first')).not.toBeInTheDocument();
        });

        it('is possible to remove a selected item', () => {
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            let listitems = screen.getAllByRole('listitem');
            expect(listitems.length).toBe(2);
            expect(listitems[0]).toHaveTextContent('🌱');
            expect(listitems[1]).toHaveTextContent('🥔');

            userEvent.click(within(listitems[0]).getByRole('button'));

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

        it('is possible to remove all selected items', () => {
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} />);

            userEvent.click(screen.getByRole('button', {name: 'Deselect All'}));

            expect(screen.getByRole('list')).toHaveTextContent('No selected option');
        });

        it('is does not contain the deselect all button when in read only', () => {
            const items = [{value: '🌱', selected: true}, {value: '🥔', selected: true}, {value: '🍟'}];
            render(<MultiSelectConnected id={id} items={items} readOnly />);

            expect(screen.queryByRole('button', {name: 'Deselect All'})).not.toBeInTheDocument();
        });

        it('hides items from the dropdown list when they are selected', () => {
            const items = [{value: '🌱'}, {value: '🥔', selected: true}, {value: '🍟'}];

            render(<MultiSelectConnected id={id} items={items} />);
            // open the dropdown
            userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

            let lists = screen.getAllByRole('list');
            expect(within(lists[0]).getByText('🥔')).toBeInTheDocument();

            expect(within(lists[1]).getByText('🌱')).toBeInTheDocument();
            expect(within(lists[1]).queryByText('🥔')).not.toBeInTheDocument();
            expect(within(lists[1]).getByText('🍟')).toBeInTheDocument();

            userEvent.click(within(lists[1]).getByText('🍟'));

            lists = screen.getAllByRole('list');
            expect(within(lists[0]).getByText('🥔')).toBeInTheDocument();
            expect(within(lists[0]).getByText('🍟')).toBeInTheDocument();

            // open the dropdown
            userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

            lists = screen.getAllByRole('list');
            expect(within(lists[1]).getByText('🌱')).toBeInTheDocument();
            expect(within(lists[1]).queryByText('🥔')).not.toBeInTheDocument();
            expect(within(lists[1]).queryByText('🍟')).not.toBeInTheDocument();
        });

        it('is does not open the dropdown if there is no unselected items', () => {
            const items = [
                {value: '🌱', selected: true},
                {value: '🥔', selected: true},
            ];
            render(<MultiSelectConnected id={id} items={items} />);

            // open the dropdown
            userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

            // one list for the selected values
            expect(screen.getAllByRole('list').length).toBe(1);
        });

        it('is does not open the dropdown if there is no items', () => {
            render(<MultiSelectConnected id={id} items={[]} />);

            // open the dropdown
            userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

            // one list for the selected values
            expect(screen.getAllByRole('list').length).toBe(1);
        });

        it('allows custom toggleClasses on the dropdown', () => {
            const {container} = render(<MultiSelectConnected id={id} items={[]} toggleClasses="coulili-zazou" />);

            expect(container.querySelector('.coulili-zazou')).toBeInTheDocument();
        });

        describe('Sortable', () => {
            const dragAndDrop = (source: Element, target: Element) => {
                const eventData: any = {dataTransfer: {files: []}};
                fireEvent.dragStart(source, eventData);
                fireEvent.dragEnter(target, eventData);
                fireEvent.dragOver(target, eventData);
                fireEvent.drop(target, eventData);
            };

            it('does not have the drag icon if the component is not sortable', () => {
                const items = [{value: '🌱', selected: true}];

                const {container} = render(<MultiSelectConnected id={id} items={items} sortable={false} />);

                const listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🌱');

                const dragIcons = container.querySelector('[aria-grabbed=false] svg');
                expect(dragIcons).not.toBeInTheDocument();
            });

            it('is possible to reorder items', () => {
                const items = [
                    {value: '🌱', selected: true},
                    {value: '🥔', selected: true},
                    {value: '🍟', selected: true},
                ];

                const {container} = render(<MultiSelectConnected id={id} items={items} sortable />);

                let listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🌱');
                expect(listitems[1]).toHaveTextContent('🥔');
                expect(listitems[2]).toHaveTextContent('🍟');

                const dragIcons = container.querySelectorAll('[aria-grabbed=false] svg');
                dragAndDrop(dragIcons[1], listitems[2]);

                listitems = screen.getAllByRole('listitem');
                expect(listitems[0]).toHaveTextContent('🌱');
                expect(listitems[1]).toHaveTextContent('🍟');
                expect(listitems[2]).toHaveTextContent('🥔');
            });
        });
    });
});
