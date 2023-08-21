import userEvent from '@testing-library/user-event';
import {render, screen} from '@test-utils';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../../hoc';
import {IFlatSelectOptionProps} from '../../../flatSelect/FlatSelectOption';
import {IItemBoxProps} from '../../../itemBox/ItemBox';
import {IMultiSelectOwnProps, MultiSelectConnected} from '../../MultiSelectConnected';
import {MultiSelectWithPredicate} from '../SelectComponents';
import {ISelectWithPredicateOwnProps, selectWithPredicate} from '../SelectWithPredicate';

describe('MultiSelectWithPredicate', () => {
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

    it('hides items when they do not match the predicates', async () => {
        const user = userEvent.setup();
        const items = [{value: 'first'}, {value: 'second'}, {value: 'third'}];

        render(<MultiSelectWithPredicate {...basicProps} items={items} />, {});
        // open the dropdown
        await user.click(screen.getByRole('button', {name: /select an option/i}));
        await user.click(screen.getByText(/all/i));

        expect(
            screen.getByRole('option', {
                name: /first/i,
            }),
        ).toBeVisible();

        // select the none flat select
        await user.click(screen.getByText('None'));

        expect(
            screen.queryByRole('option', {
                name: /first/i,
            }),
        ).not.toBeInTheDocument();
        expect(
            screen.getByRole('option', {
                name: /no items/i,
            }),
        ).toBeVisible();
    });

    it('shows items that match the predicates', async () => {
        const user = userEvent.setup();
        const options: IFlatSelectOptionProps[] = [
            {id: 'my_real_id_01', option: {content: 'All'}, selected: true},
            {id: 'my_real_id_02', option: {content: 'Beer'}},
        ];
        const matcher = (predicate: string, item: IItemBoxProps) =>
            predicate === defaultFlatSelectOptions[0].id || item.value === '🍻';
        const items = [{value: '🐝'}, {value: '🍻'}, {value: '🥩'}];

        render(<MultiSelectWithPredicate id={id} options={options} items={items} matchPredicate={matcher} />);
        // open the dropdown
        await user.click(screen.getByRole('button', {name: /select an option/i}));

        // select the all flat select
        await user.click(screen.getByText('Beer'));

        expect(
            screen.queryByRole('option', {
                name: /🐝/i,
            }),
        ).not.toBeInTheDocument();
        expect(
            screen.getByRole('option', {
                name: /🍻/i,
            }),
        ).toBeVisible();
        expect(
            screen.queryByRole('option', {
                name: /🥩/i,
            }),
        ).not.toBeInTheDocument();
    });

    describe('with predicates processed server side', () => {
        const ServerSideMultiSelectWithPredicates = _.compose(
            withServerSideProcessing,
            selectWithPredicate,
        )(MultiSelectConnected);

        it('should not filter the items based on any predicate because it is done on the server', async () => {
            const user = userEvent.setup();
            const items = [{value: 'first'}, {value: 'second'}, {value: 'third'}];

            render(<ServerSideMultiSelectWithPredicates {...basicProps} items={items} />, {});
            // open the dropdown
            await user.click(screen.getByRole('button', {name: /select an option/i}));

            // select the none flat select
            await user.click(screen.getByText('None'));

            expect(
                screen.getByRole('option', {
                    name: /first/i,
                }),
            ).toBeVisible();
            expect(
                screen.getByRole('option', {
                    name: /second/i,
                }),
            ).toBeVisible();
            expect(
                screen.getByRole('option', {
                    name: /third/i,
                }),
            ).toBeVisible();
        });

        it('triggers the onUpdate prop when the selected predicate changes', async () => {
            const user = userEvent.setup();
            const onUpdateSpy = jest.fn();

            const items = [{value: 'first'}, {value: 'second'}, {value: 'third'}];

            render(<ServerSideMultiSelectWithPredicates {...basicProps} items={items} onUpdate={onUpdateSpy} />);
            // open the dropdown
            await user.click(screen.getByRole('button', {name: /select an option/i}));

            onUpdateSpy.mockReset();

            // select the none flat select
            await user.click(screen.getByText('None'));

            expect(onUpdateSpy).toHaveBeenCalledTimes(1);
        });
    });
});
