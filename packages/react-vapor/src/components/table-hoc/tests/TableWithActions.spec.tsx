import * as React from 'react';
import * as _ from 'underscore';

import {render, screen, waitFor} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {TableRowConnected} from '..';
import {TableHOC} from '../TableHOC';
import {tableWithActions} from '../TableWithActions';

describe('Table HOC', () => {
    describe('TableWithActions', () => {
        const TableWithActions = _.compose(tableWithActions())(TableHOC);
        const actionList = [{id: 'test', enabled: true, trigger: _.noop}];

        it('unselects the row when the user click outside and the row is selected', async () => {
            render(
                <>
                    <button>outside</button>
                    <TableWithActions
                        id="a"
                        data={[{value: '🍎'}]}
                        renderBody={(all: Array<{value: string}>) =>
                            all.map(({value}) => (
                                <TableRowConnected tableId="a" key={value} actions={actionList}>
                                    <td>{value}</td>
                                </TableRowConnected>
                            ))
                        }
                    />
                </>
            );

            userEvent.click(screen.getByText('🍎'));

            await waitFor(() => expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'true'));

            userEvent.click(screen.getByRole('button', {name: 'outside'}));

            await waitFor(() => expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'false'));
        });

        it('does not unselect when the user click inside the table', async () => {
            render(
                <TableWithActions
                    id="a"
                    data={[{value: '🍎'}]}
                    renderBody={(all: Array<{value: string}>) =>
                        all.map(({value}) => (
                            <TableRowConnected tableId="a" key={value} actions={actionList}>
                                <td>{value}</td>
                            </TableRowConnected>
                        ))
                    }
                >
                    <button>inside</button>
                </TableWithActions>
            );

            userEvent.click(screen.getByText('🍎'));

            await waitFor(() => expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'true'));

            userEvent.click(screen.getByRole('button', {name: 'inside'}));

            await waitFor(() => expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'true'));
        });
    });
});
