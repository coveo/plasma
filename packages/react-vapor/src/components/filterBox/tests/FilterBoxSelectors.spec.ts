import {IReactVaporState} from '../../../ReactVapor';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ISelectWithFilterProps} from '../../select/hoc/SelectWithFilter';
import {IFilterState} from '../FilterBoxReducers';
import {defaultListBoxMatchFilter, FilterBoxSelectors, MatchFilter} from '../FilterBoxSelectors';

describe('FilterBox', () => {
    describe('FilterBox Selectors', () => {
        const id: string = 'a';
        const defaultState: IReactVaporState = {
            filters: [],
            selectWithFilter: {},
            listBoxes: [],
        };
        const defaultOwnProps: ISelectWithFilterProps = {id};

        describe('getFilterText', () => {
            it('should return an empty filterText if it is not in the state', () => {
                expect(FilterBoxSelectors.getFilterText(defaultState, defaultOwnProps)).toEqual('');
            });

            it('should return the filterText in the state if the id is in the state', () => {
                const filter: IFilterState = {id, filterText: 'text'};
                expect(FilterBoxSelectors.getFilterText({filters: [filter]}, defaultOwnProps)).toEqual(
                    filter.filterText
                );
            });
        });

        describe('getMatchFilter', () => {
            it('should return the defaultListBoxMatchFilter if the matchFilter is not defined in the ownProps', () => {
                expect(FilterBoxSelectors.getMatchFilter(defaultState, defaultOwnProps)).toEqual(
                    defaultListBoxMatchFilter
                );
            });

            it('should return the matchFilter if it is defined in the ownProps', () => {
                const matchFilter: MatchFilter = () => true;
                expect(FilterBoxSelectors.getMatchFilter(defaultState, {matchFilter})).toEqual(matchFilter);
            });
        });
    });

    describe('defaultListBoxMatchFilter', () => {
        const defaultItemBox: IItemBoxProps = {
            value: 'abc',
        };

        it('should return true if the filterValue is empty', () => {
            expect(defaultListBoxMatchFilter('', defaultItemBox)).toBe(true);
        });

        it('should not throw for falsy values', () => {
            expect(() => defaultListBoxMatchFilter(null, defaultItemBox)).not.toThrow();
            expect(() => defaultListBoxMatchFilter(undefined, defaultItemBox)).not.toThrow();
            expect(() => defaultListBoxMatchFilter('', defaultItemBox)).not.toThrow();
        });

        it('should not throw errors when the filterValue contains special characters', () => {
            expect(() => {
                defaultListBoxMatchFilter('(', defaultItemBox);
                defaultListBoxMatchFilter('/', defaultItemBox);
                defaultListBoxMatchFilter('\\', defaultItemBox);
                defaultListBoxMatchFilter('[', defaultItemBox);
            }).not.toThrow();
        });

        describe('with value', () => {
            it('should return true if the item value contain the filterValue', () => {
                expect(defaultListBoxMatchFilter('a', defaultItemBox)).toBe(true);
            });

            it('should return true if the item value contain a exact match with the filterValue', () => {
                expect(defaultListBoxMatchFilter(defaultItemBox.value, defaultItemBox)).toBe(true);
            });

            it('should return false if the item value do not contain the filterValue', () => {
                expect(defaultListBoxMatchFilter('d', defaultItemBox)).toBe(false);
            });
        });

        describe('with displayValue', () => {
            const itemBoxWithDisplayValue: IItemBoxProps = {
                displayValue: 'abc',
                value: 'z',
            };

            it('should return true if the item displayValue contain the filterValue', () => {
                expect(defaultListBoxMatchFilter('a', itemBoxWithDisplayValue)).toBe(true);
            });

            it('should return true if the item displayValue contain a exact match with the filterValue', () => {
                expect(
                    defaultListBoxMatchFilter(itemBoxWithDisplayValue.displayValue as string, itemBoxWithDisplayValue)
                ).toBe(true);
            });

            it('should return false if the item displayValue do not contain the filterValue', () => {
                expect(defaultListBoxMatchFilter('d', itemBoxWithDisplayValue)).toBe(false);
            });
        });
    });
});
