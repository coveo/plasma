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

        it('renders accessible actions when the user selects a row', async () => {
            const actions = [
                {id: 'first-action', name: 'first one', primary: true, enabled: true, link: 'https://external.link'},
                {id: 'second-action', name: 'second one', primary: true, enabled: true, trigger: jest.fn()},
            ];
            render(
                <TableWithActions
                    id="a"
                    data={[{value: '🍎'}]}
                    renderBody={(all: Array<{value: string}>) =>
                        all.map(({value}) => (
                            <TableRowConnected tableId="a" key={value} actions={actions}>
                                <td>{value}</td>
                            </TableRowConnected>
                        ))
                    }
                >
                    <button>inside</button>
                </TableWithActions>
            );

            expect(screen.queryByRole('button', {name: 'first one'})).not.toBeInTheDocument();
            expect(screen.queryByRole('button', {name: 'second one'})).not.toBeInTheDocument();

            userEvent.click(screen.getByText('🍎'));

            await waitFor(() => {
                expect(screen.getByRole('button', {name: 'first one'})).toBeVisible();
            });
            await waitFor(() => {
                expect(screen.getByRole('button', {name: 'second one'})).toBeVisible();
            });
        });

        it('renders an accessible "more" action when the user selects a row and there are secondary actions', async () => {
            const actions = [
                {id: 'first-action', name: 'first one', primary: true, enabled: true, link: 'https://external.link'},
                {id: 'second-action', name: 'second one', primary: true, enabled: true, trigger: jest.fn()},
                {id: 'third-action', name: 'third one', enabled: true, trigger: jest.fn()},
                {id: 'fourth-action', name: 'fourth one', enabled: true, trigger: jest.fn()},
                {id: 'fifth-action', name: 'fifth one', enabled: true, trigger: jest.fn()},
            ];
            render(
                <TableWithActions
                    id="a"
                    data={[{value: '🍎'}]}
                    renderBody={(all: Array<{value: string}>) =>
                        all.map(({value}) => (
                            <TableRowConnected tableId="a" key={value} actions={actions}>
                                <td>{value}</td>
                            </TableRowConnected>
                        ))
                    }
                >
                    <button>inside</button>
                </TableWithActions>
            );

            expect(screen.queryByRole('button', {name: 'third one'})).not.toBeInTheDocument();
            expect(screen.queryByRole('button', {name: 'fourth one'})).not.toBeInTheDocument();
            expect(screen.queryByRole('button', {name: 'fifth one'})).not.toBeInTheDocument();

            userEvent.click(screen.getByText('🍎'));

            await waitFor(() => {
                expect(screen.getByRole('button', {name: 'More'})).toBeVisible();
            });

            userEvent.click(screen.getByRole('button', {name: 'More'}));

            await waitFor(() => {
                expect(screen.getByRole('button', {name: 'third one'})).toBeVisible();
            });
            await waitFor(() => {
                expect(screen.getByRole('button', {name: 'fourth one'})).toBeVisible();
            });
            await waitFor(() => {
                expect(screen.getByRole('button', {name: 'fifth one'})).toBeVisible();
            });
        });
    });
});
