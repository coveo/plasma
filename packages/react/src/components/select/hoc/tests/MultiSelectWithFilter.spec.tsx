import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {MultiSelectWithFilter} from '../SelectComponents.js';

describe('Select', () => {
    describe('MultiSelectWithFilter', () => {
        const id: string = 'multi-select-with-filter';

        it('should add a duplicate if the filterValue is already selected', async () => {
            const duplicateText: string = 'a';

            render(
                <MultiSelectWithFilter
                    id={id}
                    duplicateText={duplicateText}
                    items={[
                        {value: duplicateText, selected: true},
                        {value: duplicateText, selected: true},
                    ]}
                />
            );

            await userEvent.click(screen.getByText(/select an option/i));

            const listItems = screen.getAllByRole('listitem');

            expect(listItems.length).toBe(2);
            expect(listItems[0]).toHaveTextContent(listItems[1].textContent);
        });

        it('should open the dropdown even if the list is empty with customValue', async () => {
            const noItemsText = 'not an item text';

            render(<MultiSelectWithFilter id={id} noItemsText={noItemsText} customValues items={[]} />);
            await userEvent.click(screen.getByText(/select an option/i));

            expect(screen.getByRole('option')).toHaveTextContent(noItemsText);
        });

        it('should set the noItemsText in noResultItem if items is not empty and all values are selected', async () => {
            const noItemsText = 'not an item text';

            render(
                <MultiSelectWithFilter
                    id={id}
                    noItemsText={noItemsText}
                    customValues
                    items={[
                        {value: 'a', selected: true},
                        {value: 'b', selected: true},
                    ]}
                />
            );

            await userEvent.click(screen.getByText(/select an option/i));

            expect(screen.getByRole('option', {name: noItemsText})).toBeInTheDocument();
        });
    });
});
