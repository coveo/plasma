import {render, screen} from '@test-utils';
import * as React from 'react';

import {MultiSelectWithFilter} from '../SelectComponents';

describe('Select', () => {
    describe('MultiSelectWithFilter', () => {
        const id: string = 'multi-select-with-filter';

        it('should add a duplicate if the filterValue is already selected', () => {
            const filterValue: string = 'a';
            const duplicateText: string = 'duplicate';

            render(
                <MultiSelectWithFilter
                    id={id}
                    duplicateText={duplicateText}
                    items={[
                        {value: filterValue, selected: true},
                        {value: filterValue, selected: true},
                    ]}
                />,
                {
                    initialState: {},
                }
            );

            const listItems = screen.getAllByRole('listitem');

            expect(listItems.length).toBe(2);
            expect(listItems[0]).toHaveTextContent(listItems[1].textContent);
        });

        it('should open the dropdown even if the list is empty with customValue', () => {
            const noItemsText = 'not an item text';

            render(<MultiSelectWithFilter id={id} noItemsText={noItemsText} customValues items={[]} />, {
                initialState: {},
            });

            expect(
                screen.getByRole('option', {
                    hidden: true,
                })
            ).toHaveTextContent(noItemsText);
        });

        it('should set the noItems in noResultItem if items is not empty and all values are selected', () => {
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
                />,
                {
                    initialState: {},
                }
            );

            expect(
                screen.getByRole('option', {
                    hidden: true,
                })
            ).toHaveTextContent(noItemsText);
        });
    });
});
