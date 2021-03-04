import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {render, screen, within} from 'react-vapor-test-utils';
import * as _ from 'underscore';

import {IFlatSelectOptionProps} from '../../../flatSelect/FlatSelectOption';
import {IItemBoxProps} from '../../../itemBox/ItemBox';
import {IMultiSelectOwnProps, MultiSelectConnected} from '../../MultiSelectConnected';
import {MultiSelectWithPredicate} from '../SelectComponents';
import {ISelectWithPredicateOwnProps, selectWithPredicate} from '../SelectWithPredicate';
import {withServerSideProcessing} from '../../../../hoc';

describe('Select', () => {
    describe('<MultiSelectWithPredicate />', () => {
        const id: string = 'multi-select-with-predicate';
        const defaultFlatSelectOptions: IFlatSelectOptionProps[] = [
            {id: 'my_real_id_01', option: {content: 'All'}, selected: true},
            {id: 'my_real_id_02', option: {content: 'None'}},
        ];
        const matchPredicate = (predicate: string, item: IItemBoxProps) => predicate === defaultFlatSelectOptions[0].id;

        const basicProps: ISelectWithPredicateOwnProps & IMultiSelectOwnProps = {
            id,
            items: [],
            options: defaultFlatSelectOptions,
            matchPredicate,
        };

        it('hides items when they do not match the predicates', () => {
            const items = [{value: 'first'}, {value: 'second'}, {value: 'third'}];

            render(<MultiSelectWithPredicate {...basicProps} items={items} />, {});
            // open the dropdown
            userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

            let lists = screen.getAllByRole('list');
            expect(within(lists[1]).getByText('first')).toBeVisible();

            // select the none flat select
            userEvent.click(screen.getByText('None'));

            lists = screen.getAllByRole('list');
            expect(within(lists[1]).queryByText('first')).not.toBeInTheDocument();
            expect(within(lists[1]).getByText('No Items')).toBeVisible();
        });

        it('shows items that match the predicates', () => {
            const options: IFlatSelectOptionProps[] = [
                {id: 'my_real_id_01', option: {content: 'All'}, selected: true},
                {id: 'my_real_id_02', option: {content: 'Beer'}},
            ];
            const matcher = (predicate: string, item: IItemBoxProps) =>
                predicate === defaultFlatSelectOptions[0].id || item.value === '🍻';
            const items = [{value: '🐝'}, {value: '🍻'}, {value: '🥩'}];

            render(<MultiSelectWithPredicate id={id} options={options} items={items} matchPredicate={matcher} />);
            // open the dropdown
            userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

            // select the all flat select
            userEvent.click(screen.getByText('Beer'));

            const lists = screen.getAllByRole('list');
            expect(within(lists[1]).queryByText('🐝')).not.toBeInTheDocument();
            expect(within(lists[1]).getByText('🍻')).toBeVisible();
            expect(within(lists[1]).queryByText('🥩')).not.toBeInTheDocument();
        });

        describe('with predicates processed server side', () => {
            const ServerSideMultiSelectWithPredicates = _.compose(
                withServerSideProcessing,
                selectWithPredicate
            )(MultiSelectConnected);

            it('should not filter the items based on any predicate because it is done on the server', () => {
                const items = [{value: 'first'}, {value: 'second'}, {value: 'third'}];

                render(<ServerSideMultiSelectWithPredicates {...basicProps} items={items} />, {});
                // open the dropdown
                userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

                // select the none flat select
                userEvent.click(screen.getByText('None'));

                const lists = screen.getAllByRole('list');
                expect(within(lists[1]).getByText('first')).toBeVisible();
                expect(within(lists[1]).getByText('second')).toBeVisible();
                expect(within(lists[1]).getByText('third')).toBeVisible();
            });

            it('triggers the onUpdate prop when the selected predicate changes', () => {
                const onUpdateSpy = jest.fn();

                const items = [{value: 'first'}, {value: 'second'}, {value: 'third'}];

                render(<ServerSideMultiSelectWithPredicates {...basicProps} items={items} onUpdate={onUpdateSpy} />);
                // open the dropdown
                userEvent.click(screen.getByRole('button', {name: 'Select an option'}));

                onUpdateSpy.mockReset();

                // select the none flat select
                userEvent.click(screen.getByText('None'));

                expect(onUpdateSpy).toHaveBeenCalledTimes(1);
            });
        });
    });
});
