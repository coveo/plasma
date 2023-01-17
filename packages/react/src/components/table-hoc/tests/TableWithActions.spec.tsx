import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';
import * as _ from 'underscore';

import {IActionOptions} from '../../actions/index.js';
import {TableHOC} from '../TableHOC.js';
import {TableRowConnected} from '../TableRowConnected.js';
import {tableWithActions} from '../TableWithActions.js';

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

            await userEvent.click(screen.getByText('🍎'));

            expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'true');

            await userEvent.click(screen.getByRole('button', {name: /outside/i}));

            expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'false');
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

            await userEvent.click(screen.getByText('🍎'));

            expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'true');

            await userEvent.click(screen.getByRole('button', {name: /inside/i}));

            expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'true');
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

            expect(screen.queryByRole('button', {name: /first one/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('button', {name: /second one/i})).not.toBeInTheDocument();

            await userEvent.click(screen.getByText('🍎'));

            expect(screen.getByRole('button', {name: /first one/i})).toBeVisible();
            expect(screen.getByRole('button', {name: /second one/i})).toBeVisible();
        });

        it('renders an accessible "more" action when the user selects a row and there are secondary actions', async () => {
            const actions: IActionOptions[] = [
                {
                    id: 'first-action',
                    name: 'first one',
                    icon: 'add',
                    primary: true,
                    enabled: true,
                    link: 'https://external.link',
                },
                {
                    id: 'second-action',
                    name: 'second one',
                    icon: 'edit',
                    primary: true,
                    enabled: true,
                    trigger: jest.fn(),
                },
                {id: 'third-action', name: 'third one', icon: 'view', enabled: true, trigger: jest.fn()},
                {id: 'fourth-action', name: 'fourth one', icon: 'details', enabled: true, trigger: jest.fn()},
                {id: 'fifth-action', name: 'fifth one', icon: 'lock', enabled: true, trigger: jest.fn()},
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

            expect(screen.queryByRole('button', {name: /third one/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('button', {name: /fourth one/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('button', {name: /fifth one/i})).not.toBeInTheDocument();

            await userEvent.click(screen.getByText('🍎'));

            expect(screen.getByRole('button', {name: /more/i})).toBeVisible();

            await userEvent.click(screen.getByRole('button', {name: /more/i}));

            expect(screen.getByRole('button', {name: /third one/i})).toBeVisible();
            expect(screen.getByRole('button', {name: /fourth one/i})).toBeVisible();
            expect(screen.getByRole('button', {name: /fifth one/i})).toBeVisible();
        });
    });
});
